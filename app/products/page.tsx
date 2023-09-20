"use client"
import React from 'react'
import SideBar from '@/components/sideBar'
import ProductTable from '@/components/productsPage/ProductTable';
import NewProductCard from '@/components/productsPage/NewProductCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Products = () => {
  return (
    
    <div className='flex flex-row'>
        <div>
            <SideBar/>
        </div>
        <div className='p-10 justify-center w-full'>
            <div>
                <NewProductCard/>
            </div>
            <div>
                <ProductTable/>
            </div>
        </div>
    </div>
    
  )
}

export default Products