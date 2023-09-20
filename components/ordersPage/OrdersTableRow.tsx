import React from 'react'

const OrdersTableRow = () => {
  return (
    <tr>
                <td className="p-0">
                  <div className="flex items-center h-16 px-6">
                    <span className="text-sm text-gray-100 font-medium">Banner design</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center h-16 px-6">
                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">KICKOFF</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center h-16 px-6">
                    <span className="text-sm text-gray-100 font-medium">$16,000</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center h-16 px-6">
                    <div className="flex h-full items-center">
                      <img className="w-8 h-8 mr-3 rounded-full object-cover" src="trizzle-assets/images/avatar-men-circle-border.png" alt=""/>
                      <span className="text-sm font-medium text-gray-100">John Doe</span>
                    </div>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center h-16 px-6">
                    <span className="text-sm text-gray-100 font-medium">June 06, 2022</span>
                  </div>
                </td>
              </tr>
  )
}

export default OrdersTableRow