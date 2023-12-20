import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function Sidebar() {
  return (
    <div className="min-h-screen h-full bg-sidebarColor dark:bg-black hidden lg:block w-64">
      <div className="space-y-4 w-full">
        <div className="">
            <div className="p-5 flex justify-center">
              <h1 className=" text-2xl font-extrabold text-customOrange">AV ABAS V3</h1>
            </div>
            <div className=' flex justify-between items-start p-5'>
                <div className="">
                    <p className="mb-2 text-sm font-normal tracking-tight">Welcome!</p>
                    <p className=" italic font-medium">Dominic Anuta Vega</p>
                    <Badge>Administrator</Badge>
                </div>
                <div className=" cursor-pointer">
                    <FiMenu size={25}/>
                </div>
            </div>
            <Separator/>
            <div className="space-y-1">
                <Button variant="secondary" className="w-full justify-start">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                    >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                    </svg>
                    Listen Now
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                    >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
                    Browse
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                    >
                    <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                    <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                    <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                    </svg>
                    Radio
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}