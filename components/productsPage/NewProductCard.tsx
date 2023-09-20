import React from 'react'

const NewProductCard = () => {
  return (
    <section className="py-3 w-full">
  <div className="container px-4 mx-auto">
    <div className="relative p-6 bg-gray-500 rounded-xl">
      <a className="inline-block absolute top-0 right-0 m-6 text-gray-300 hover:text-gray-200" href="#">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </a>
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg">
        <img src="https://icongr.am/octicons/archive.svg?size=128&color=ffffff" alt="products" />
      </div>
      <h4 className="text-xl text-white font-bold mb-3">Add New Products</h4>
      <p className="text-gray-300 mb-5">You can add new products to the ecommerce website by adding product information...</p>
      
      <a className="block py-4 px-12 text-center text-white font-bold text-sm leading-6 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-200" href="#">Add New Products</a>
    </div>
  </div>
</section>
  )
}

export default NewProductCard