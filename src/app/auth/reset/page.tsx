'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import { BsFillInfoCircleFill } from "react-icons/bs";

interface ResetPageProps {}

const ResetPage: React.FC<ResetPageProps> = () => {
    const router = useRouter();
    const { toast } = useToast()
    const [confirm, setConfirm] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');
    const [errorFields, setErrorFields] = useState<Record<string, string>>({});
    const [loader, setLoader] = useState<boolean>(false);
    const [eyePassword, setEyePassword] = useState('password');
    const [uppercaseValid, setUppercaseValid] = useState<boolean>(false);
    const [lengthValid, setLengthValid] = useState<boolean>(false);
    const [specialCharValid, setSpecialCharValid] = useState<boolean>(false);
    const [matchPassword, setMatchPassword] = useState<boolean>(false);

    const handleOpenEye = () => {setEyePassword('text')}
    const handleCloseEye = () => {setEyePassword('password')}

  
    const isSubmitDisabled =
        !lengthValid ||    
        !uppercaseValid ||    
        !specialCharValid ||    
        !matchPassword; 

    useEffect(() => {
        setLengthValid(password.length >= 10 && password.length <= 100); // for length password

        const specialCharRegex = /[!@#?]/;
        setSpecialCharValid(specialCharRegex.test(password)); // for special character

        const uppercaseRegex = /[A-Z]/;
        setUppercaseValid(uppercaseRegex.test(password)); // for valid uppercase

        setMatchPassword(password === confirm); // for match password
    }, [password, confirm]);



  return (
    <div className='flex justify-center items-center h-screen'>
        <Card className="w-[500px] z-10">
            <CardHeader className='flex flex-col items-center'>
                <CardTitle>AVega Business Automation System</CardTitle>
                <CardDescription>V3.1.0</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Input 
                                className=' rounded-full'
                                id="name" 
                                placeholder="Password" 
                                type={eyePassword} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Input 
                                className=' rounded-full'
                                id="password" 
                                placeholder="Confirm Password" 
                                type={eyePassword} 
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}/>
                        </div>
                        <div className=' text-sm bg-orange-50 text-customOrange p-3'>
                            <div className='flex items-center'>
                                <BsFillInfoCircleFill />
                                <h1 className='font-semibold ml-2'>Ensure that these requirements are met:</h1>
                            </div>
                            <ul className='list-disc ml-10 font-thin'>
                                <li className={lengthValid ? 'text-green-500' : ''}>At least 10 characters (and up to 100 characters)</li>
                                <li className={uppercaseValid ? 'text-green-500' : ''}>At least one uppercase character</li>
                                <li className={specialCharValid ? 'text-green-500' : ''}>Inclusion of at least one special character, e.g., ! @ # ?</li>
                                <li className={matchPassword ? 'text-green-500' : ''}>Password match</li>
                            </ul>
                        </div>
                        <div className=''>
                            <Button className='w-full rounded-full' type='submit' disabled={isSubmitDisabled}>Submit</Button>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  );
};

export default ResetPage;
