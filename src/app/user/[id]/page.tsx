'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import UserForm from '@/components/form/userForm'
import PermissionForm from '@/components/form/permissionForm'
import AccountForm from '@/components/form/accountForm'

const SingleUser = () => {

  return (
    <div>
      {/* {loading ? <Loading/> : ''} */}
      <div className='md:mx-5 my-5 p-5 rounded-lg bg-white dark:bg-customBgDarkPage min-h-[500px]'>
        <div className='flex w-full'>
        <Tabs defaultValue="basic" className='w-full'>
          <TabsList className="grid grid-cols-3 md:w-1/3">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="permission">Permission</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <UserForm/>
          </TabsContent>
          <TabsContent value="permission">
            <PermissionForm/>
          </TabsContent>
          <TabsContent value="account">
            <AccountForm/>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
