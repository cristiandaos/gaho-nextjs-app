import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState, useContext } from "react";
import GlobalApi from '@/app/_utils/GlobalApi';
import { useUser } from "@clerk/nextjs";
import { CartContext } from '@/app/_context/CartContext'

function CheckoutForm({amount}) {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, setCart } = useContext(CartContext);
  const {user} = useUser();
  const [loading, setLoading] = useState(false);
  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    createOrder();
    sendEmail();

    const res = await fetch("/api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    console.log("client_secret",clientSecret);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  const createOrder=()=>{
    let productIds=[];
    cart.forEach(element=>{
      productIds.push(element?.product?.id);
    })
    const data={
      data:{
        email:user.primaryEmailAddress.emailAddress,
        userName:user.fullName,
        amount:amount,
        products:productIds
      }
    }
    GlobalApi.createOrder(data).then(resp=>{
      if(resp){
        cart.forEach(element=>{
          GlobalApi.deleteCartItem(element.id).then(result=>{})
        })
      }
    })
  }

  const sendEmail=async()=>{
    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-[840px] md:px-[640px] mt-20">
        <PaymentElement />
        <button className="bg-blue-800 hover:bg-blue-600 py-2 text-white rounded-md w-full mt-4 mb-20">
          Realizar pago
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
