'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../../../../apiConfig';
// import Loading from '@/components/Component/Loading';
import { TbAlertTriangle } from "react-icons/tb";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeLine } from "react-icons/ri";
import Link from "next/link"
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
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Toaster } from '@/components/ui/toaster';
import { ToastTitle, ToastDescription, ToastAction, ToastProvider, ToastClose, ToastViewport } from '@/components/ui/toast';
import { Toast } from '@/components/ui/toast';
import Background from '../../../../components/Background';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const router = useRouter();
  const { toast } = useToast()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [errorFields, setErrorFields] = useState<Record<string, string>>({});
  const [loader, setLoader] = useState<boolean>(false);
  const [eyePassword, setEyePassword] = useState('password');

//   useEffect(() => {
//     setLoader(true);
//     if (isAuthenticated()) {
//       router.push('/');
//     }
//     setLoader(false);
//   }, []);

//   useEffect(() => {
//     setLoader(true);
//     if (isNewpass()) {
//       router.push('/auth/newpass');
//     }
//     setLoader(false);
//   }, []);
  const handleOpenEye = () => {setEyePassword('text')}
  const handleCloseEye = () => {setEyePassword('password')}
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestData = { username, password };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/users/login`,
        requestData,
        {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            },
        }
      );

      if (response) {
        const data = await response.data;
        if (data.new_account) {
            Cookies.set('newtoken', data.token);
            window.location.href = '/auth/newpass';
            console.log('Login successful:', data);
        } else if (data.status) {
            Cookies.set('token', data.token);
            window.location.href = '/';
            console.log('Login successful:', data);
        } else {
            const error = await response.data;
            setErrorFields({});
            setError(error.message);
            toast({
                variant: "info",
                description: <div className='flex'>
                                <TbAlertTriangle size={20}/> 
                                <div className='ml-2'>{error.message}</div>
                            </div>,
                className: "m-1",
            })
            console.error('Login error:', error);
            Cookies.remove('token');
        }
      }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const errorfields = error.response;
            setError('');
            setErrorFields(errorfields?.data?.message || 'An error occurred'); 
            console.error(errorfields?.data?.message || 'An error occurred');
        } else {
            setError('');
            console.error('An error occurred:', error);
        }
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <Card className="md:w-[500px] z-10 m-2">
            <CardHeader className='flex flex-col items-center'>
                <CardTitle>AVega Business Automation System</CardTitle>
                <CardDescription>V3.1.0</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleLogin}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Input 
                                className=' rounded-full'
                                id="name" 
                                placeholder="Username" 
                                type='text' 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                            {errorFields.username && (
                                <div className="text-red-500 text-xs italic">{errorFields.username}</div>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className='relative'>
                                <Input 
                                    className=' rounded-full'
                                    id="password" 
                                    placeholder="Password" 
                                    type={eyePassword} 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                <div className='absolute right-1 top-1'>
                                    {eyePassword == 'password' ? 
                                        <div className='rounded-full p-2 bg-customOrange cursor-pointer text-white'onClick={handleOpenEye}><RiEyeCloseLine/></div> : 
                                        <div className='rounded-full p-2 bg-customOrange cursor-pointer text-white'onClick={handleCloseEye}><RiEyeLine/></div>
                                    }
                                </div>
                            </div>
                            {errorFields.password && (
                                <div className="text-red-500 text-xs italic">{errorFields.password}</div>
                            )}
                        </div>
                        <div className=''>
                            <Button 
                                className='w-full rounded-full' 
                                type='submit'>Login</Button>
                            <AlertDialog>
                                <AlertDialogTrigger className='text-xs font-normal text-center w-full mt-2 hover:text-customOrange'>Forgot Password?</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Forgot Password</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label>Type your Username:</Label>
                                            <Input placeholder="Username" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label>Type your Email:</Label>
                                            <Input type="password" placeholder="Email" />
                                        </div>
                                        </div>
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Submit</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  );
};

export default LoginPage;
