"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react"; // Icono de pago exitoso

const PaymentConfirm = () => {
  const router = useRouter();

  const handleRedirect = () => {
    // Redirige a la página principal
    router.push("/"); // Ajusta la ruta si es necesario
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-green-500 mb-4">
          ¡Pago exitoso!
        </h1>
        <p className="text-gray-700 mb-6">
          Tu pago ha sido procesado correctamente. ¡Gracias por tu compra!
        </p>
        <button
          onClick={handleRedirect}
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-md"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirm;
