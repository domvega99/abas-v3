"use client"
 
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Request } from "../../../../types/purchasing/requestsType"
import { Badge } from "../../ui/badge"

export const requestColumns: ColumnDef<Request>[] = [
      // {
      //   id: "select",
      //   header: ({ table }) => (
      //     <Checkbox
      //       checked={
      //         table.getIsAllPageRowsSelected() ||
      //         (table.getIsSomePageRowsSelected() && "indeterminate")
      //       }
      //       onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
      //       aria-label="Select all"
      //     />
      //   ),
      //   cell: ({ row }) => (
      //     <Checkbox
      //       checked={row.getIsSelected()}
      //       onCheckedChange={(value: any) => row.toggleSelected(!!value)}
      //       aria-label="Select row"
      //     />
      //   ),
      //   enableSorting: false,
      //   enableHiding: false,
      // },
      {
        accessorKey: "transaction_code",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="max-w-[80px] text-11 text-center cursor-pointer flex flex-col items-center"
            >
              Transaction Code
              <ArrowUpDown className="p-0 h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-center max-w-[80px]">{row.getValue("transaction_code")}</div>,
      },
      {
        accessorKey: "control_number",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="max-w-[80px] text-11 text-center cursor-pointer flex flex-col items-center"
            >
              Control No.
              <ArrowUpDown className="p-0 h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-center max-w-[80px]">{row.getValue("control_number")}</div>,
      },
      {
        accessorKey: "company",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="max-w-[80px] text-11 cursor-pointer flex items-center"
            >
              Company
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left max-w-[200px]">{row.getValue("company")}</div>,
      },
      {
        accessorKey: "vessel_office",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Vessel/Office
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left ">{row.getValue("vessel_office")}</div>,
      },
      {
        accessorKey: "department",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Department
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("department")}</div>,
      },
      {
        accessorKey: "priority",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center text-center"
            >
              Priority
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold"><Badge variant='outline'>{row.getValue("priority")}</Badge></div>,
      },
      {
        accessorKey: "requisitioner",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Requisitioner
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold text-left">{row.getValue("requisitioner")}</div>,
      },
      {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Status
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("status")}</div>,
      },
      {
        accessorKey: "date_needed",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Date Needed
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("date_needed")}</div>,
      },
      {
        accessorKey: "added_by",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Created by
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold text-left">{row.getValue("added_by")}</div>,
      },
      {
        accessorKey: "added_on",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Added on
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("added_on")}</div>,
      },
      {
        accessorKey: "verified_by",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Verified by
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("verified_by")}</div>,
      },
      {
        accessorKey: "verified_on",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Verified on
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("verified_on")}</div>,
      },
      {
        accessorKey: "approved_by",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Approved by
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold">{row.getValue("approved_by")}</div>,
      },
      {
        accessorKey: "approved_on",
        header: ({ column }) => {
          return (
            <div
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="text-11 cursor-pointer flex items-center"
            >
              Approved on
              <ArrowUpDown className="h-3" />
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold">{row.getValue("approved_on")}</div>,
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const request = row.original
     
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
                  onClick={() => navigator.clipboard.writeText(request.id)}
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