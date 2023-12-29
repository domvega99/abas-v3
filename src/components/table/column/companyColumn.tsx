"use client"
 
import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { FaPen } from "react-icons/fa";
import { Pen } from "lucide-react";
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
import { Badge } from "../../ui/badge"
import { Company } from "../../../../types/mastertable/company"

export const companyColumns: ColumnDef<Company>[] = [
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Name
              <ArrowUpDown className="h-3"/>
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("name")}</div>,
      },
      {
        accessorKey: "address",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Address
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold max-w-[450px]">{row.getValue("address")}</div>,
      },
      {
        accessorKey: "telephone_no",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Tel. No.
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("telephone_no")}</div>,
      },
      {
        accessorKey: "fax_no",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Fax No.
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("fax_no")}</div>,
      },
      {
        accessorKey: "company_tin",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Tin
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("company_tin")}</div>,
      },
      {
        accessorKey: "abbreviation",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Abbreviation
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("abbreviation")}</div>,
      },
      {
        accessorKey: "is_top_20000",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Is top 20000?
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => 
            <div className="text-11 font-semibold">{row.getValue("is_top_20000")}</div>,
      },
      {
        accessorKey: "created_by",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Created by
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("created_by")}</div>,
      },
      {
        accessorKey: "created",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Created on
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("created")}</div>,
      },
      {
        accessorKey: "modified_by",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Modified by
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("modified_by")}</div>,
      },
      {
        accessorKey: "modified",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="flex items-center text-11 cursor-pointer"
            >
              Modified on
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("modified")}</div>,
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
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => 
            <div className="text-11 font-semibold flex">
                {row.getValue("stat") == "Active" ? 
                <div className="rounded-full bg-green-50 text-green-600 font-bold px-2 dark:bg-customBgDarkGreenStatus">Active</div> :
                <div className="rounded-full bg-red-50 text-red-600 font-bold px-2 dark:bg-customBgDarkRedStatus">Inactive</div>}
            </div>,
      },
      {
        id: "actions",
        enableHiding: false,
        header: () => {
            return (
              <div className="flex items-center text-11 cursor-pointer">
                Manage
              </div>
            )
          },
        cell: ({ row }) => {
          const user = row.original
          return (
            <div className="flex bg-customOrange rounded-md p-1 text-white items-center justify-center max-w-[30px]">
                <Pen className="h-3 w-3"/>
            </div>
          )
        },
      },
  ];