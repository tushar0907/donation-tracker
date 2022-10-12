import React from 'react'
import {useSelector} from 'react-redux'

function RecordTable() {
      const {donatedCreators}=useSelector(state => state.user)
      return (
            <div className='flex w-96 justify-center items-start h-full'>
                  <table className='w-full justify-between'>
                        <tr className='border border-gray-300'>
                              <th className='border-r border-gray-500 bg-gray-100'>Creator ID</th>
                              <th className='border-r border-gray-500 bg-gray-100'>Currency</th>
                              <th className='border-r border-gray-500 bg-gray-100'>Amount</th>
                              <th className='border-r border-gray-500 bg-gray-100'>Name</th>
                              <th className='border-r border-gray-500 bg-gray-100'>Message</th>
                        </tr>
                        {donatedCreators?.map(data => (
                              <tr className='w-full border'>
                                    <td className='text-center'>{data.creatorId}</td>
                                    <td className='text-center'>{data.currency}</td>
                                    <td className='text-center'>{data.amount}</td>
                                    <td className='text-center'>{data.name}</td>
                                    <td className='text-center'>{data.comment}</td>
                              </tr>
                        ))}

                  </table>
            </div>
      )
}

export default RecordTable
