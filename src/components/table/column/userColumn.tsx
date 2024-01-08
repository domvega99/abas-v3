"use client"
 
import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "../../../../types/userTypes";
import { Badge } from "../../ui/badge"

export const userColumns: ColumnDef<User>[] = [
      {
        accessorKey: "id",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              User ID
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className=" text-11 font-semibold">{row.getValue("id")}</div>,
      },
      {
        accessorKey: "username",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Username
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="lowercase text-11 font-semibold">{row.getValue("username")}</div>,
      },
      {
        accessorKey: "first_name",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              First Name
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("first_name")}</div>,
      },
      {
        accessorKey: "middle_name",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Middle Name
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("middle_name")}</div>,
      },
      {
        accessorKey: "last_name",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Last Name
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("last_name")}</div>,
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Email
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="lowercase text-11 font-semibold">{row.getValue("email")}</div>,
      },
      {
        accessorKey: "role",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Role
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className=" text-11 font-semibold">{row.getValue("role")}</div>,
      },
      {
        accessorKey: "user_location",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Location
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className=" text-11 font-semibold">{row.getValue("user_location")}</div>,
      },
      {
        accessorKey: "stat",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Status
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => 
        <div className=" text-11 font-semibold">
          {row.getValue("stat") == 'Activated' ? 
            <Badge variant='success'>{row.getValue("stat")}</Badge> : <Badge variant='destructive'>{row.getValue("stat")}</Badge>
          }
        </div>,
      },
      {
        accessorKey: "signature",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Signature
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className=" text-11 font-semibold">{row.getValue("signature")}</div>,
      },
      
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const user = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-6 w-6 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(user.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
  ];