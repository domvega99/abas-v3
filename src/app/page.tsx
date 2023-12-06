import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Separator } from '@/components/ui/separator'
import { FaEye } from "react-icons/fa6";
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
          <CardDescription>Managers' Dashboard</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaEye size='50'/></div>
          <CardDescription>Managers' Dashboard</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaEye size='50'/></div>
          <CardDescription>Managers' Dashboard</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaEye size='50'/></div>
          <CardDescription>Managers' Dashboard</CardDescription>
        </Card>
        <Card className='p-5 flex flex-col justify-center items-center hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
          <div><FaEye size='50'/></div>
          <CardDescription>Managers' Dashboard</CardDescription>
        </Card>
      </div>
    </div>
  )
}

export default page
