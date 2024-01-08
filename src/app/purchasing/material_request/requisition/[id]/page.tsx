'use client'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { IoClose } from 'react-icons/io5'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { requisitionColumns } from '@/components/table/column/requisitionColumn'
import { fetchSingleRequests } from '../../../../../../api/Purchasing/Inventory Request/inventoryRequest'
import { Requisition } from '../../../../../../types/purchasing/requisitionType'
import TableData from '@/components/table/TableData'
import RequisitionTable from '@/components/table/RequisitionTable'
import { useParams } from 'next/navigation'
import Loading from '../../../../../../components/Loading'


const SingleRequest = () => {
    const { id } = useParams<{ id: string }>();
    const [request, setRequest] = useState<Requisition[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const requestData = await fetchSingleRequests(id as string);
            if (requestData !== null) {
              setRequest(requestData);
            }
            setLoading(false);
          } catch (error) {
            console.error('Error fetching request data:', error);
            setLoading(false);
          }
        };
        fetchData();
      }, [id]);
  return (
    <div>
    {loading ? <Loading/> : ''}
      <div className='md:p-5'>
          <div className='bg-white rounded-xl border p-5'>
            <div className='flex items-center'>
                <Link href='/purchasing'>
                    <Button size="sm" className="h-8" variant="secondary">
                        Back
                    </Button>
                </Link>
            </div>
            <div className='mt-2 p-2 border-b'>
                <div className='flex items-center justify-between'>
                    <h1>Transaction Code: 31032 | Control No. 330 - Avega Bros. Integrated Shipping Corp. (1 items)</h1>
                    <Button size="sm" className="h-6" variant='destructive'>
                        Cancel Request
                    </Button>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <h1 className='text-11 font-medium text-zinc-400 mt-5'>Requested by 1 for M/v Ligaya V. with Plate No.WEL611 made on 8 June 2017 10:35</h1>
                    <div className='flex items-center justify-between mt-5'>
                        <Button size='sm' className='h-6' variant='info'>View Purchase Request</Button>
                        <div>
                            <Button size='sm' className='h-6' variant='success'>Approve Selected Items</Button>
                            <Button size='sm' className='h-6 ml-2' variant='warning'>Edit</Button>
                        </div>
                    </div>
                </div>
                <RequisitionTable data={request} columns={requisitionColumns} loading={loading}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SingleRequest
