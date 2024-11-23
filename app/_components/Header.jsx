"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import GlobalApi from '@/app/_utils/GlobalApi';
import Cart from './Cart';

function Header() {
  const {user} = useUser();
  const [isLogin, setIsLogin] = useState();
  const [openCart, setOpenCart] = useState(false);
  const {cart, setCart}=useContext(CartContext);
  useEffect(() => {
    setIsLogin(window.location.href.toString().includes('sign-in'));
  }, [])

  useEffect(() => {
    user&&getCartItem();
  }, [user])

  useEffect(() => {
    openCart==false&&setOpenCart(true);
  }, [cart])

  const getCartItem=()=>{
    GlobalApi.getUserCartItems(user.primaryEmailAddress.emailAddress).then(resp=>{
      const result=resp.data.data

      result&&result.forEach(prd=>{
        setCart(cart=>[...cart,
          {
            id:prd.id,
            product:prd.attributes.products.data[0]
          }
          ]);
      })
    })
  }
  return !isLogin&&(
<header className="bg-white">
  <div className="mx-auto max-w-screen-xl shadow-sm px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-blue-600 hover:text-blue-700" href="/">
          <span className="sr-only">Inicio</span>
            <svg width="131" height="30" viewBox="0 0 131 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.12 9.8C19.6133 8.86667 18.88 8.16 17.92 7.68C16.9867 7.17333 15.88 6.92 14.6 6.92C12.3867 6.92 10.6133 7.65333 9.28 9.12C7.94667 10.56 7.28 12.4933 7.28 14.92C7.28 17.5067 7.97333 19.5333 9.36 21C10.7733 22.44 12.7067 23.16 15.16 23.16C16.84 23.16 18.2533 22.7333 19.4 21.88C20.5733 21.0267 21.4267 19.8 21.96 18.2H13.28V13.16H28.16V19.52C27.6533 21.2267 26.7867 22.8133 25.56 24.28C24.36 25.7467 22.8267 26.9333 20.96 27.84C19.0933 28.7467 16.9867 29.2 14.64 29.2C11.8667 29.2 9.38667 28.6 7.2 27.4C5.04 26.1733 3.34667 24.48 2.12 22.32C0.92 20.16 0.32 17.6933 0.32 14.92C0.32 12.1467 0.92 9.68 2.12 7.52C3.34667 5.33333 5.04 3.64 7.2 2.44C9.36 1.21333 11.8267 0.599998 14.6 0.599998C17.96 0.599998 20.7867 1.41333 23.08 3.04C25.4 4.66667 26.9333 6.92 27.68 9.8H20.12ZM53.4288 24.04H42.9488L41.2688 29H34.1088L44.2688 0.919999H52.1888L62.3488 29H55.1088L53.4288 24.04ZM51.6688 18.76L48.1888 8.48L44.7488 18.76H51.6688ZM93.7609 0.919999V29H86.9209V17.44H76.2809V29H69.4409V0.919999H76.2809V11.92H86.9209V0.919999H93.7609ZM115.979 29.28C113.339 29.28 110.912 28.6667 108.699 27.44C106.512 26.2133 104.765 24.5067 103.459 22.32C102.179 20.1067 101.539 17.6267 101.539 14.88C101.539 12.1333 102.179 9.66667 103.459 7.48C104.765 5.29333 106.512 3.58667 108.699 2.36C110.912 1.13333 113.339 0.52 115.979 0.52C118.619 0.52 121.032 1.13333 123.219 2.36C125.432 3.58667 127.165 5.29333 128.419 7.48C129.699 9.66667 130.339 12.1333 130.339 14.88C130.339 17.6267 129.699 20.1067 128.419 22.32C127.139 24.5067 125.405 26.2133 123.219 27.44C121.032 28.6667 118.619 29.28 115.979 29.28ZM115.979 23.04C118.219 23.04 120.005 22.2933 121.339 20.8C122.699 19.3067 123.379 17.3333 123.379 14.88C123.379 12.4 122.699 10.4267 121.339 8.96C120.005 7.46666 118.219 6.72 115.979 6.72C113.712 6.72 111.899 7.45333 110.539 8.92C109.205 10.3867 108.539 12.3733 108.539 14.88C108.539 17.36 109.205 19.3467 110.539 20.84C111.899 22.3067 113.712 23.04 115.979 23.04Z" fill="currentColor"/>
            </svg>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Inicio </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Productos </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contacto </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
        {!user?<div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            href="/sign-in"
          >
            Iniciar sesión
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block"
            href="/sign-up"
          >
            Regístrate
          </a>
        </div>
        :
        <div className='flex items-center gap-5'>
          <h2 className='flex gap-1 cursor-pointer text-blue-600 hover:text-blue-800' onClick={()=>setOpenCart(!openCart)}><ShoppingCart />({cart?.length})</h2>
          <UserButton />
        </div>
        }

        {openCart&&<Cart />}

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
