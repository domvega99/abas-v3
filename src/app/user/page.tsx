'use client'
import React, { useEffect, useState } from 'react'
import TableData from '../../../components/TableData'
import axios from 'axios';

const page = () => {
  const [data, setData] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/purchasing-purchase-orders', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log(response.data)
      } catch (error) {
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <TableData/> */}
      <table className='w-full border border-solid'>
                  <thead className='text-sm text-neutral-500'>
                      <tr>
                          <td className='pl-2'>User ID</td>
                          <td>Username</td>
                          <td>First Name</td>
                          <td>Middle Name</td>
                          <td>Last Name</td>
                          <td>Role</td>
                          <td>Location</td>
                          <td>Status</td>
                          <td>Manage</td>
                      </tr>
                  </thead>
                  {/* <tbody className="text-sm text-neutral-950 border">
                      {data && data.map((item) => (
                      <tr className=' hover:bg-slate-500 hover:text-white border cursor-pointer h-10'>
                          <td className='pl-2'>{item.requisition-transaction-code}</td>
                          <td>{item.company}</td>
                          <td>{item.first_name}</td>
                          <td>{item.middle_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.role}</td>
                          <td>{item.user_location}</td>
                          <td className='flex'><div className='mt-2 border rounded-md font-semibold text-xs px-3'>{item.stat}</div></td>
                          <td>
                            <button onClick={(e) => { e.stopPropagation(); handleToggle(item.id); }} className='font-semibold px-2 py-1 rounded-md text-xs hover:bg-slate-900'>•••</button>
                            {open === user.id && (
                              <div className='absolute shadow-2xl bg-slate-500 text-white py-1 mt-1 rounded-md'>
                                <ul>
                                  <li className='hover:bg-slate-900 px-2 cursor-pointer'>Reset Password</li>
                                  <li className='hover:bg-slate-900 px-2 cursor-pointer'>Activate</li>
                                  <li className='hover:bg-slate-900 px-2 cursor-pointer'>Deactivate</li>
                                </ul>
                              </div>
                            )}
                          </td>
                      </tr>
                      ))}
                  </tbody> */}
              </table>
    </div>
  )
}

export default page
