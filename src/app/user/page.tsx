'use client'
import React, { useEffect, useState } from 'react'
import TableData from '../../components/table/TableData'
import axios from 'axios';
import { data } from '../../../api/userData';
import { empData } from '../../../api/employeeData';
import { userColumns  } from "@/components/table/column/userColumn"
import { empColumns  } from "@/components/table/column/empColumn"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { User } from '../../../types/userTypes';
import Loading from '../../../components/Loading';
import { fetchUsers } from '../../../api/User/userApi';

const page = () => {
  const [userData, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <Loading/> : ''}
      <div className='w-full my-5'>
        <div className='px-5'>
          <div className='my-2'>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight">
              User Accounts
            </h2>
          </div>
          <div className='flex items-center'>
            <Button size="sm" className="h-8 bg-green-500 hover:bg-green-400">
              <PlusCircledIcon className="mr-2 h-4 w-4" />
              User
            </Button>
            <Button size="sm" className="h-8 ml-2" variant="secondary">
              Refresh
            </Button>
          </div>
        </div>
          <TableData data={userData} columns={userColumns} loading={loading}/>
      </div>
    </div>
  )
}

export default page
