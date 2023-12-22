'use client'
import React, { useEffect, useState } from 'react'
import TableData from '../../../components/TableData'
import axios from 'axios';
import { User } from '../../../types/userTypes';
import { data } from '../../../api/userData';

const page = () => {
  // const [userData, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<{ users: User[] }>(
  //         'http://localhost:8080/api/users',
  //         {
  //           withCredentials: true,
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       setUsers(response.data.users);
  //       console.log(response.data.users);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='w-full'>
        <TableData data={data}/>
    </div>
  )
}

export default page
