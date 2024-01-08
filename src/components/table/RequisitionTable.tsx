"use client"
 
import React, {useState, useEffect } from "react"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { User } from "../../../types/userTypes"
import { Request } from "../../../types/purchasing/requestsType"
import { Company } from "../../../types/mastertable/company"
import { Card } from "../ui/card"

type DataType = User | Request | Company;

interface TableDataProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  loading: boolean;
}

const RequisitionTable = <T extends DataType>({ data, columns, loading, }: TableDataProps<T>) => {

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    id: true,
    email: false,
    signature: false,
    transaction_code: false,
    approved_on: false,
    approved_by: false,
    verified_on: false,
    verified_by: false,
    fax_no: false,
    created_by: false,
    created: false,
    modified_by: false,
    modified: false,
  });
  
  const [rowSelection, setRowSelection] = useState({});
  const [visibleRows, setVisibleRows] = useState<Set<string>>(new Set());

  const toggleVisibility = (rowId: string) => {
    setVisibleRows((prevVisibleRows) => {
      const newVisibleRows = new Set(prevVisibleRows);
      if (newVisibleRows.has(rowId)) {
        newVisibleRows.delete(rowId);
      } else {
        newVisibleRows.add(rowId);
      }
      return newVisibleRows;
    });
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
   
    return (
      <div className="w-full min-h-[60vh]">
        <div className="w-screen md:w-full mt-5">
          <Table className="overflow-x-auto rounded-md border bg-white dark:bg-customBgDarkPage">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="p-2">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
            {table.getRowModel().rows?.length ? (
            <>
              {table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="p-2 cursor-pointer" onClick={() => toggleVisibility(row.id)}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                  {visibleRows.has(row.id) && (
                    <TableRow>
                      <TableCell className="p-2 cursor-pointer" colSpan={12}>
                        <Card>
                          <h1>Supplier</h1>
                        </Card>
                        
                          {/* <Table className="">
                            <TableRow>
                              <TableHead>Supplier</TableHead>
                              <TableHead>Unit Price</TableHead>
                              <TableHead>Total Price</TableHead>
                              <TableHead>Time Canvassed</TableHead>
                              <TableHead>Remark</TableHead>
                              <TableHead>Approved By</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                            <TableRow>
                              <TableCell>MACHINE SHOP SERVICE CENTER FAO ROMMEL CRUZ</TableCell>
                              <TableCell>123</TableCell>
                              <TableCell>123</TableCell>
                              <TableCell>12:00</TableCell>
                              <TableCell>Remark</TableCell>
                              <TableCell>wara</TableCell>
                              <TableCell>wara</TableCell>
                            </TableRow>
                          </Table> */}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {loading ? 'Please wait' : 'No results'}
              </TableCell>
            </TableRow>
          )}
            </TableBody>
          </Table>
        </div>
      </div>
    )
}

export default RequisitionTable
