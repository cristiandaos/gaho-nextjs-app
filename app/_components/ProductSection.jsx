"use client"
import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import GlobalApi from '@/app/_utils/GlobalApi';

function ProductSection() {
    
  const [productList, setProductList]=useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, [])
  const getLatestProducts_=()=>{
    GlobalApi.getLatestProducts().then(resp=>{
        console.log(resp.data.data);
        setProductList(resp.data.data);
    })
  }

const filterProductList=(category)=>{
  const result=productList.filter(item=>item.attributes.category==category);
  return result;
}

  return productList&&(
    <div className='px-10 md:px-20'>
      <h2 className="font-extrabold text-[40px] my-3 text-gray-800 mt-5 text-center">
        Nuevos <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 bg-clip-text text-transparent">productos</span>
      </h2>
      <ProductList productList={productList}/>
      {/* Para perros */}
      <h2 className="font-bold text-[30px] my-3 text-gray-800">
        Para <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 bg-clip-text text-transparent">perros</span>
      </h2>
      <ProductList productList={filterProductList('Perros')}/>
      {/* Para gatos */}
      <h2 className="font-bold text-[30px] my-3 text-gray-800">
        Para <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 bg-clip-text text-transparent">gatos</span>
      </h2>
      <ProductList productList={filterProductList('Gatos')}/>
    </div>
  )
}

export default ProductSection
