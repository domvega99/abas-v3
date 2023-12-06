import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Separator } from '@/components/ui/separator'
import { FaEye } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowsAlt } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { IoIosFlag } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const page = () => {
  return (
    <div className=' w-full'>
      <div className='mb-5'>
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-customOrange">
          ADMINISTRATOR DASHBOARD
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>
      <Separator/>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-5'>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaEye size='50'/></div>
          <CardDescription>Managers Dashboard</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaUser size='50'/></div>
          <CardDescription>Human Resources</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><IoIosListBox size='50'/></div>
          <CardDescription>Payroll</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaCartShopping size='50'/></div>
          <CardDescription>Purchasing</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><MdOutlineInventory size='50'/></div>
          <CardDescription>Inventory</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><MdAccountBalanceWallet size='50'/></div>
          <CardDescription>Accounting</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaArrowsAlt size='50'/></div>
          <CardDescription>Marketing & Operations</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><BsBarChart size='50'/></div>
          <CardDescription>Finance</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FiTool size='50'/></div>
          <CardDescription>Asset Management</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><HiMiniHandThumbUp size='50'/></div>
          <CardDescription>Compliance</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><IoIosFlag size='50'/></div>
          <CardDescription>Corporate Services</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaFire size='50'/></div>
          <CardDescription>IT Services</CardDescription>
        </Card>
      </div>
    </div>
  )
}

export default page
