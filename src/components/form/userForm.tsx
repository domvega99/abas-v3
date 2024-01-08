import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const UserForm = () => {
  return (
    <div>
      <Card>
        <CardHeader>
            <CardTitle>User</CardTitle>
            <CardDescription>
                Make changes to your account here. Click save when you're done.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
        <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
        </div>
        </CardContent>
        <CardFooter>
        <Button>Save changes</Button>
        </CardFooter>
    </Card>
    </div>
  )
}

export default UserForm
