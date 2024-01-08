'use client'
import React, { useEffect, useState } from 'react'
import TableData from '@/components/table/TableData';
import { requestColumns } from '@/components/table/column/requestColumn';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Request } from '../../../../types/purchasing/requestsType';
import Loading from '../../../../components/Loading';
import { 
  fetchRequests, 
  fetchForApprovalRequests,
  fetchForItemCodingRequests,
  fetchForCanvassingRequests,
  fetchForCanvassApprovalRequests,
  fetchForPurchaseRequests
 } from '../../../../api/Purchasing/Inventory Request/inventoryRequest';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Page = () => {
  const [request, getRequest] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { All: { data } } = await fetchRequests();
        getRequest(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchVerification = async () => {
    try {
      setLoading(true);
      const { All: { data } } = await fetchRequests();
      getRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
}

  const fetchApproval = async () => {
      try {
        setLoading(true);
        const { All: { data } } = await fetchForApprovalRequests();
        getRequest(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
  }

  const fetchItemCoding = async () => {
    try {
      setLoading(true);
      const { All: { data } } = await fetchForItemCodingRequests();
      getRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  }

  const fetchCanvassing = async () => {
    try {
      setLoading(true);
      const { All: { data } } = await fetchForCanvassingRequests();
      getRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  }

  const fetchCanvassApproval = async () => {
    try {
      setLoading(true);
      const { All: { data } } = await fetchForCanvassApprovalRequests();
      getRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  }

  const fetchPurchase = async () => {
    try {
      setLoading(true);
      const { All: { data } } = await fetchForPurchaseRequests();
      getRequest(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  }

  return (
    <div>
    {loading ? <Loading/> : ''}
      <div className='md:px-5'>
          <div className='w-full my-5 border bg-white dark:bg-customBgDarkPage rounded-xl'>
              <div className='px-5 mt-5'>
                  <div className='mb-5'>
                      <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                        Materials/Services Requests
                      </h2>
                  </div>
                  <div className='flex items-center'>
                      <Button size="sm" className="h-8 bg-green-500 hover:bg-green-400">
                      <PlusCircledIcon className="mr-2 h-4 w-4" />
                        Request
                      </Button>
                      <Link href='/purchasing'>
                          <Button size="sm" className="h-8 ml-2" variant="secondary">
                              Back
                          </Button>
                      </Link>
                  </div>
                  <div className='max-w-[800px] flex justify-between'>
                    <Tabs defaultValue="verification" className="mt-5">
                      <TabsList className="flex flex-wrap h-auto gap-2 justify-start">
                        <TabsTrigger value="verification" onClick={fetchVerification}>For Verification</TabsTrigger>
                        <TabsTrigger value="approval" onClick={fetchApproval}>For Approval</TabsTrigger>
                        <TabsTrigger value="item-coding" onClick={fetchItemCoding}>For Item Coding</TabsTrigger>
                        <TabsTrigger value="canvassing" onClick={fetchCanvassing}>For Canvassing</TabsTrigger>
                        <TabsTrigger value="canvass-approval" onClick={fetchCanvassApproval}>For Canvass Approval</TabsTrigger>
                        <TabsTrigger value="purchase" onClick={fetchPurchase}>For Purchase</TabsTrigger>
                      </TabsList>
                      <TabsContent value="verification">
                        <Card className='p-3'>
                          <RadioGroup defaultValue="all" className='flex items-center'>
                            <h1 className=' text-xs font-medium'>Priority : </h1>
                            <div className="flex items-center space-x-1 mr-2">
                              <RadioGroupItem value="all" id="r1" />
                              <Label className='text-xs'>All</Label>
                            </div>
                            <div className="flex items-center space-x-1 mr-2">
                              <RadioGroupItem value="emergency" id="r2" />
                              <Label className='text-xs'>Emergency</Label>
                            </div>
                            <div className="flex items-center space-x-1 mr-2">
                              <RadioGroupItem value="high" id="r3" />
                              <Label className='text-xs'>High</Label>
                            </div>
                            <div className="flex items-center space-x-1 mr-2">
                              <RadioGroupItem value="medium" id="r4" />
                              <Label className='text-xs'>Medium</Label>
                            </div>
                            <div className="flex items-center space-x-1 mr-2">
                              <RadioGroupItem value="low" id="r5" />
                              <Label className='text-xs'>Low</Label>
                            </div>
                          </RadioGroup>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
              </div>
              <TableData data={request} columns={requestColumns} loading={loading}/>
          </div>
      </div>
    </div>
  )
}

export default Page
