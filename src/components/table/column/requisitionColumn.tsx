"use client"
 
import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Requisition } from "../../../../types/purchasing/requisitionType"
import { Badge } from "../../ui/badge"

export const requisitionColumns: ColumnDef<Requisition>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value: any) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "item_id",
        header: () => {
          return (
            <div className="max-w-[80px] text-11">
              Item Code
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold max-w-[80px]">{row.getValue("item_id")}</div>,
      },
      {
        accessorKey: "item_name",
        header: () => {
          return (
            <div className="text-11">
              Description
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("item_name")}</div>,
      },
      {
        accessorKey: "quantity",
        header: () => {
          return (
            <div className="max-w-[80px] text-11">
              Quantity
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("quantity")}</div>,
      },
      {
        accessorKey: "packaging",
        header: () => {
          return (
            <div className="text-11">
              Unit/Packaging
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left ">{row.getValue("packaging")}</div>,
      },
      {
        accessorKey: "assigned_to",
        header: () => {
          return (
            <div className="text-11">
              Assigned To
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("assigned_to")}</div>,
      },
      {
        accessorKey: "remark",
        header: () => {
          return (
            <div className="text-11">
              Remark
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left">{row.getValue("remark")}</div>,
      },
      {
        accessorKey: "request_approved_by",
        header: () => {
          return (
            <div className="text-11">
              Approved by
            </div>
          )
        },
        cell: ({ row }) => <div className="uppercase text-11 font-semibold text-left">{row.getValue("request_approved_by")}</div>,
      },
      {
        accessorKey: "status",
        header: () => {
          return (
            <div className="text-11">
              Status
            </div>
          )
        },
        cell: ({ row }) => <div className="text-11 font-semibold text-left"><Badge variant='outline'>{row.getValue("status")}</Badge></div>,
      },
      {
        id: "manage",
        header: () => {
          return (
            <div className="text-11">
              Manage
            </div>
          )
        },
        cell: ({ row }) => {
          const request = row.original
          return (
            // <DropdownMenu>
            //   <DropdownMenuTrigger asChild>
            //     <Button variant="ghost" className="h-6 w-6 p-0">
            //       <span className="sr-only">Open menu</span>
            //       <MoreHorizontal className="h-4 w-4" />
            //     </Button>
            //   </DropdownMenuTrigger>
            //   <DropdownMenuContent align="end">
            //     <DropdownMenuLabel>Actions</DropdownMenuLabel>
            //     <DropdownMenuItem
            //       onClick={() => navigator.clipboard.writeText(request.id)}
            //     >
            //       Copy payment ID
            //     </DropdownMenuItem>
            //     <DropdownMenuSeparator />
            //     <DropdownMenuItem>View customer</DropdownMenuItem>
            //     <DropdownMenuItem>View payment details</DropdownMenuItem>
            //   </DropdownMenuContent>
            // </DropdownMenu>
            <div>
              <Button size='sm' className='h-6' variant='success'>Approve</Button>
              <Button size='sm' className='h-6 ml-2' variant='destructive'>Cancel</Button>
            </div>
          )
        },
      },
      {
        id: "action",
        cell: ({ row }) => {
          const request = row.original
          return (
            <div>
              <ChevronDown/>
            </div>
          )
        },
      },
  ];