import React, { useContext } from "react";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeltonProjectInfo from "./SkeltonProjectInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import GlobalApi from "@/app/_utils/GlobalApi";
import { CartContext } from "@/app/_context/CartContext";

function ProjectInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  //Use to add project/product into cart
  const onAddToCartClick = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    } else {
      //Logic to add to cart
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: product?.id,
        },
      };
      GlobalApi.addToCart(data).then(
        (resp) => {
          console.log("Agregado al carrito", resp);
          if (resp) {
            setCart((cart) => [
              ...cart,
              {
                id: resp?.data?.id,
                product: product,
              },
            ]);
          }
        },
        (error) => {
          console.log("Error al agregar al carrito", error);
        }
      );
    }
  };
  return (
    <div>
      {product ? (
        <div>
          <h2 className="text-[40px] font-bold text-blue-600">
            {product?.attributes?.title}
          </h2>
          <h2 className="text-[20px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[20px] text-gray-700 pt-4">
            {product?.attributes?.desc}
          </h2>

          <h2 className="flex gap-3 mt-5 text-gray-700 text-[14px]">
            {product?.attributes.instantDelivery ? (
              <BadgeCheck className="text-green-500 h-6 w-6" />
            ) : (
              <AlertOctagon className="text-yellow-400 h-6 w-6" />
            )}
            Entrega instantánea
          </h2>
          <h2 className="text-[38px] mt-4 font-medium text-gray-500 pt-4">
            S/.{product?.attributes?.pricing}
          </h2>
          <button
            className="flex gap-2 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-10 mt-5"
            onClick={() => onAddToCartClick()}
          >
            <ShoppingCart />
            Agregar al carrito
          </button>
        </div>
      ) : (
        <SkeltonProjectInfo />
      )}
    </div>
  );
}

export default ProjectInfo;
