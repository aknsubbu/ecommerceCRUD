import React from 'react'
import ProductTableRow from '@/components/productsPage/ProductTableRow'

const ProductTable = () => {

    var data = [
	{
		"name": "Ulric Lancaster",
		"category": "Shoshana Hewitt",
		"price": 11,
		"qty": 2
	},
	{
		"name": "Cyrus Abbott",
		"category": "Stacey Valdez",
		"price": 16,
		"qty": 2
	},
	{
		"name": "Skyler Baldwin",
		"category": "Sasha Tran",
		"price": 11,
		"qty": 18
	},
	{
		"name": "Victoria Gamble",
		"category": "Kathleen Swanson",
		"price": 16,
		"qty": 3
	},
	{
		"name": "Phillip Dickson",
		"category": "Indira Martin",
		"price": 18,
		"qty": 18
	}
];


  return (
    <section className="py-3">
  <div className="container px-4 mx-auto">
    <div className="pt-6 pb-8 bg-gray-500 rounded-xl">
      <div className="px-6">
        <div className="mb-6">
          <h4 className="text-lg text-gray-100 font-semibold mb-6">Users</h4>
          <div className="md:flex items-center">
            <div className="relative inline-block h-14 w-full max-w-xxs py-4 px-3 mb-5 md:mb-0 md:mr-6 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
              <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-100 px-1 bg-gray-500">Role</span>
              <input className="block w-full ml-2 outline-none bg-transparent text-sm text-gray-100 font-medium" id="messagesInput1-1" placeholder="All Roles" type="search"/>
            </div>
            <div className="inline-flex items-center h-14 w-full max-w-sm py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4733 12.5267L10.9999 10.0734C11.96 8.87633 12.4249 7.35692 12.2991 5.82759C12.1733 4.29826 11.4664 2.87525 10.3236 1.85115C9.18085 0.827062 7.68914 0.279732 6.15522 0.321705C4.62129 0.363679 3.16175 0.991766 2.0767 2.07682C0.991644 3.16187 0.363557 4.62142 0.321583 6.15534C0.27961 7.68926 0.82694 9.18097 1.85103 10.3237C2.87512 11.4665 4.29814 12.1735 5.82747 12.2993C7.3568 12.4251 8.87621 11.9601 10.0733 11.0001L12.5266 13.4534C12.5886 13.5159 12.6623 13.5655 12.7436 13.5993C12.8248 13.6332 12.9119 13.6506 12.9999 13.6506C13.0879 13.6506 13.1751 13.6332 13.2563 13.5993C13.3376 13.5655 13.4113 13.5159 13.4733 13.4534C13.5934 13.3291 13.6606 13.163 13.6606 12.9901C13.6606 12.8172 13.5934 12.651 13.4733 12.5267ZM6.33327 11.0001C5.41029 11.0001 4.50804 10.7264 3.74061 10.2136C2.97318 9.7008 2.37504 8.97197 2.02183 8.11925C1.66862 7.26653 1.57621 6.32821 1.75627 5.42297C1.93634 4.51773 2.38079 3.6862 3.03344 3.03356C3.68608 2.38091 4.5176 1.93646 5.42285 1.75639C6.32809 1.57633 7.2664 1.66874 8.11913 2.02195C8.97185 2.37516 9.70068 2.9733 10.2135 3.74073C10.7262 4.50816 10.9999 5.41041 10.9999 6.33339C10.9999 7.57107 10.5083 8.75805 9.6331 9.63322C8.75793 10.5084 7.57095 11.0001 6.33327 11.0001Z" fill="#3D485B"></path>
              </svg>
              <input className="block w-full ml-2 outline-none bg-transparent text-sm text-gray-100 font-medium" id="messagesInput1-1" placeholder="Search user..." type="search"/>
            </div>
          </div>
        </div>
        <div className="w-full pb-6 overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="text-left">
                <th className="p-0">
                  <div className="flex items-center h-11 py-3 px-6 rounded-l-xl bg-gray-600">
                    <input type="checkbox" value="" id=""/>
                    <label className="ml-2 text-xs text-gray-300 font-semibold">NAME</label>
                  </div>
                </th>
                <th className="p-0">
                  <div className="flex items-center h-11 py-3 px-6 bg-gray-600">
                    <span className="text-xs text-gray-300 font-semibold">CATEGORY</span>
                  </div>
                </th>
                <th className="p-0">
                  <div className="flex items-center h-11 py-3 px-6 bg-gray-600">
                    <span className="text-xs text-gray-300 font-semibold">PRICE</span>
                  </div>
                </th>
                <th className="p-0">
                  <div className="flex items-center h-11 py-3 px-6 bg-gray-600">
                    <span className="text-xs text-gray-300 font-semibold">QTY</span>
                  </div>
                </th>
                <th className="p-0">
                  <div className="flex items-center h-11 py-3 px-6 rounded-r-xl bg-gray-600"></div>
                </th>
              </tr>
            </thead>
            <tbody>
                {/* start of row */}
                    {data.map((prodInfo, index) => (
        <ProductTableRow key={index} prodInfo={prodInfo} />
                    ))}
                {/* end of row */}

            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between px-6 pt-8 border-t border-gray-400">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-400">
              <span>Showing  </span>
              <span className="px-px text-gray-200">1  </span>
              <span>to  </span>
              <span className="px-px text-gray-200">10  </span>
              <span>of 20 results</span>
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <div className="flex flex-wrap items-center -m-1.5">
            <div className="w-auto p-1.5"><a className="inline-flex items-center h-9 py-1 px-4 text-xs text-gray-400 font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200" href="#">Previous</a></div>
            <div className="w-auto p-1.5"><a className="inline-flex items-center h-9 py-1 px-4 text-xs text-blue-50 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200" href="#">Next</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ProductTable