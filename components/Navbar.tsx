import React from 'react'
import Theme from './Theme'
import { Button } from '@/components/ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Link from 'next/link'
import { RiAdminFill } from "react-icons/ri";
import { SiWindows11 } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { Sidebar } from './Sidebar'
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineInventory } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaArrowsAlt } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { IoIosFlag } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { HiServerStack } from "react-icons/hi2";
import { BiSolidError } from "react-icons/bi";
import { BsFillDatabaseFill } from "react-icons/bs";
import { BsFillSdCardFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoIosListBox } from "react-icons/io"

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-start md:justify-end items-center mx-2'>
            <Menubar className='flex flex-row-reverse justify-between md:justify-end w-full md:flex-row items-center border-0 my-3'>
                <MenubarMenu>
                    <MenubarTrigger>
                        <FiMenu size={20}/>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>
                        <Theme/>
                    </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <Link href='/'>
                        <MenubarTrigger className='relative'>
                            <IoNotificationsOutline size={18}/>
                            <div className='w-2 h-2 rounded-full bg-customOrange absolute top-1 right-3'></div>
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <div className='hidden md:block'>
                        <MenubarTrigger className='cursor-pointer'>
                            <FaRegClock size={18}/>
                            <p className='hidden md:block text-xs font-normal ml-2'>Nov 30, 2023 (Thu) | 10:16:31 AM</p>
                        </MenubarTrigger>
                    </div>
                </MenubarMenu>
                <MenubarMenu>
                    <Link href='/'>
                        <MenubarTrigger className='cursor-pointer'>
                            <IoMdHome size={18}/>
                            <p className='hidden md:block text-xs font-normal ml-2'>Home</p>
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <div className='hidden md:block'>
                        <MenubarTrigger className=' cursor-pointer'>
                            <SiWindows11 size={18}/>
                            <p className='hidden md:block text-xs font-normal ml-2'>Subsystems</p>
                        </MenubarTrigger>
                    </div>
                    <MenubarContent>
                        <MenubarItem>
                            <FaEye />
                            <p className='ml-5'>Managers Dashboard</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaUser />
                            <p className='ml-5'>Human Resources</p>
                        </MenubarItem>
                        <MenubarItem>
                            <IoIosListBox />
                            <p className='ml-5'>Payroll</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaCartShopping />
                            <p className='ml-5'>Purchasing</p>
                        </MenubarItem>
                        <MenubarItem>
                            <MdOutlineInventory />
                            <p className='ml-5'>Inventory</p>
                        </MenubarItem>
                        <MenubarItem>
                            <MdAccountBalanceWallet />
                            <p className='ml-5'>Accounting</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaArrowsAlt />
                            <p className='ml-5'>Marketing & Operations</p>
                        </MenubarItem>
                        <MenubarItem>
                            <BsBarChart />
                            <p className='ml-5'>Finance</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FiTool />
                            <p className='ml-5'>Asset Management</p>
                        </MenubarItem>
                        <MenubarItem>
                            <HiMiniHandThumbUp />
                            <p className='ml-5'>Compliance</p>
                        </MenubarItem>
                        <MenubarItem>
                            <IoIosFlag />
                            <p className='ml-5'>Corporate Services</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaFire />
                            <p className='ml-5'>IT Services</p>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <div className='hidden md:block'>
                        <MenubarTrigger className='cursor-pointer'>
                            <RiAdminFill size={18}/> 
                            <p className='hidden md:block text-xs font-normal ml-2'>Administrator</p>
                        </MenubarTrigger>
                    </div>
                    <MenubarContent>
                        <MenubarItem>
                            <HiServerStack />
                            <p className='ml-5'>Server Info</p>
                        </MenubarItem>
                        <MenubarItem>
                            <BiSolidError />
                            <p className='ml-5'>System Logs</p>
                        </MenubarItem>
                        <MenubarItem>
                            <BsFillDatabaseFill />
                            <p className='ml-5'>Master Tables</p>
                        </MenubarItem>
                        <MenubarItem>
                            <BsFillSdCardFill />
                            <p className='ml-5'>Database Encoding</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaFilter />
                            <p className='ml-5'>Database Manual Query</p>
                        </MenubarItem>
                        <MenubarItem>
                            <FaUserGroup />
                            <p className='ml-5'>User Accounts</p>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className=' rounded-full h-10 md:w-10 md:flex md:justify-center md:items-center cursor-pointer'>
                        <Avatar className=' w-8 h-8'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <h1 className=' font-bold text-customOrange ml-2 text-xs md:hidden'>HELLO, DOMINIC V.</h1>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <div>
                                <p>Username: dvega</p>
                                <p>Email: dominic.vega@vegabros.com</p>
                                <p>Location: Tayud</p>
                            </div>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <IoIosMail />
                            <p className='ml-5'>Webmail</p>
                        </MenubarItem>
                        <MenubarItem>
                            <IoMdGlobe />
                            <p className='ml-5'>Website</p>
                        </MenubarItem>
                        <MenubarItem>
                            <IoMdChatboxes />
                            <p className='ml-5'>Viber Chatbot</p>
                        </MenubarItem>
                        <MenubarItem>
                            <IoNotificationsSharp />
                            <p className='ml-5'>Subscribe to SMS Notification</p>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Button className='w-full h-8'>
                                <MdLogout />
                                <p className='ml-5'>Logout</p>
                            </Button>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    </div>
  )
}

export default Navbar
