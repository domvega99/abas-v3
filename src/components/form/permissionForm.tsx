import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'

const PermissionForm = () => {
  return (
    <div>
        {/* <div className='p-1 w-full'>
            <div className='bg-blue-50 p-2'>
                Module
            </div>
            <div className='border p-1'>
                Sub-module
                <div>
                    Group
                    <div>
                        Permission
                    </div>
                </div>
            </div>
        </div> */}
        <Card className='pb-2'>
            <div className='flex justify-between flex-wrap'>
                <CardHeader>
                    <CardTitle>Permission</CardTitle>
                    <CardDescription>
                        Make changes to your account permission here. Click save when you're done.
                    </CardDescription>
                </CardHeader>
                <div className='p-5'>
                    <Button variant='info' className='h-8'>Module</Button>
                    <Button variant='success' className='h-8 ml-2'>Save</Button>
                </div>
            </div>
            <Accordion type="single" collapsible className="w-full " defaultValue='item-1'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-blue-50 px-5 py-2 text-lg dark:bg-customBgDarkPage'>Purchasing</AccordionTrigger>
                    <AccordionContent className='p-3'>
                        <div>
                            <h1 className='ml-2 font-semibold text-base text-gray-500'>Inventory Requests</h1>
                            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-2 mx-2'>
                                <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                    <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                        <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                    <div className='flex items-center justify-between text-xs'>
                                        <h1 className='text-gray-500'>Add</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                </Card>
                                <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                    <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                        <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                    <div className='flex items-center justify-between text-xs'>
                                        <h1 className='text-gray-500'>Add</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <h1 className='ml-2 font-semibold text-base text-gray-500 '>Purchasing Reports</h1>
                            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-2 mx-2'>
                                <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                    <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                        <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                    <div className='flex items-center justify-between text-xs'>
                                        <h1 className='text-gray-500'>Add</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                </Card>
                                <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                    <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                        <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                    <div className='flex items-center justify-between text-xs'>
                                        <h1 className='text-gray-500'>Add</h1>
                                        <Checkbox></Checkbox>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-blue-50 px-5 py-2 text-lg dark:bg-customBgDarkPage'>Human Resources</AccordionTrigger>
                    <AccordionContent className='p-3'>
                        <h1 className=' text-center font-semibold text-base text-gray-500'>Employees</h1>
                        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-2 mx-2'>
                            <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                    <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                    <Checkbox></Checkbox>
                                </div>
                                <div className='flex items-center justify-between text-xs'>
                                    <h1 className='text-gray-500'>Add</h1>
                                    <Checkbox></Checkbox>
                                </div>
                            </Card>
                            <Card className='p-2 hover:shadow-lg dark:hover:shadow-gray-400 cursor-pointer'>
                                <div className='flex items-center justify-between border-b mb-1 pb-1'>
                                    <h1 className='text-gray-500'>Materials/Services Requests</h1>
                                    <Checkbox></Checkbox>
                                </div>
                                <div className='flex items-center justify-between text-xs'>
                                    <h1 className='text-gray-500'>Add</h1>
                                    <Checkbox></Checkbox>
                                </div>
                            </Card>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    </div>
  )
}

export default PermissionForm
