import Image from "next/image";
import { PawPrint } from "lucide-react";
import React from "react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <Link href={'/project-detail/'+product.id}>
      <div className="border border-gray-300 hover:border-blue-600 rounded-lg mt-5">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={product.attributes?.banner?.data?.attributes?.url}
            alt="banner"
            width={400}
            height={350}
            className="h-[380px] object-cover rounded-t-lg"
          />
          <div className="flex justify-between items-center bg-gray-200/45 p-3 rounded-b-lg">
            <div>
              <h2 className="text-[18px] font-medium text-blue-600 line-clamp-1">
                {product.attributes?.title}
              </h2>
              {product?.attributes?.category && (
                <h2 className="text-[14px] text-gray-600 flex items-center gap-2">
                  <PawPrint className="h-4 w-4" />
                  {product?.attributes?.category}
                </h2>
              )}
            </div>
            <h2 className="font-medium">S/. {product.attributes?.pricing}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
