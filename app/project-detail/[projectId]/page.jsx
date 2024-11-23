"use client"
import Breadcrumb from "@/app/_components/Breadcrumb";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from "react";
import ProductList from "@/app/_components/ProductList";
import { usePathname } from "next/navigation";

function ProjectDetail({ params }) {

  // Use to get to Url Path
  const path=usePathname();
  const [productDetail, setProductDetail] = useState();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Project Id", path);
    getProductById_();
  }, [])

  const getProductById_ = () => {
    GlobalApi.getProductById(params?.projectId).then(resp => {
      const product = resp.data.data;
      setProductDetail(product);

      if (product) {
        getProductListByCategory(product.attributes.category);
      }
    });
  }

  const getProductListByCategory = (category) => {
    GlobalApi.getProductByCategory(category)
      .then(resp => {
        console.log(resp);
        setProductList(resp.data.data);
      });
  }

  return (
    <div className='p-5 py-12 px-10 md:px-48'>
      <Breadcrumb path={path} />
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5 justify-evenly'>
        <ProjectBanner product={productDetail} />
        <ProjectInfo product={productDetail} />
      </div>
      {productList.length > 0 && (
        <div className='mt-20'>
          <h2 className="font-extrabold text-[40px] my-3 text-gray-800 mt-5">
              Productos <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 bg-clip-text text-transparent">similares</span>
          </h2>
          <ProductList productList={productList} />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
