import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const AccountForm = () => {
  return (
    <div className=''>
      <Card className=''>
        <CardHeader>
            <CardTitle className='flex justify-between'>
              <div>
                Account
              </div>
              <div className='text-xs text-green-500 py-1 px-2 border rounded-full'>
                Activated
              </div>
            </CardTitle>
            <CardDescription>
                Make changes to your account here. Click save when you are done.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className='flex flex-col gap-2'>
                <div className='p-2 border rounded-md flex items-center justify-between'>
                    <div>
                        <h1 className='text-md font-semibold'>Reset Password</h1>
                        <p className='text-11 font-medium text-gray-500'>Make your password reset here.</p>
                    </div>
                    <Button size='sm' className='h-8 text-xs rounded-full'>Reset Password</Button>
                </div>
                <div className='p-2 border rounded-md flex items-center justify-between'>
                    <div>
                        <h1 className='text-md font-semibold'>Account Status</h1>
                        <p className='text-11 font-medium text-gray-500'>Make changes your status here.</p>
                    </div>
                    <Button size='sm' className='h-8 text-xs rounded-full'>Deactivate</Button>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountForm
