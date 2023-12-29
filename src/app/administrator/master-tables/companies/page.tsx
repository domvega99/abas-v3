'use client'
import React, { useEffect, useState } from 'react'
import TableData from '@/components/table/TableData'
import { Company } from '../../../../../types/mastertable/company'
import { fetchCompanies } from '../../../../../api/Master Table/company'
import Loading from '../../../../../components/Loading'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { companyColumns } from '@/components/table/column/companyColumn'
import Link from 'next/link'

const Page = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const company = await fetchCompanies();
            setCompanies(company);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            {loading ? <Loading/> : ''}
            <div className='px-5'>
                <div className='w-full my-5 border bg-white dark:bg-customBgDarkPage rounded-xl'>
                    <div className='p-5'>
                        <div className='mb-5'>
                            <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                                Companies
                            </h2>
                        </div>
                        <div className='flex items-center'>
                            <Button size="sm" className="h-8 bg-green-500 hover:bg-green-400">
                            <PlusCircledIcon className="mr-2 h-4 w-4" />
                                Company
                            </Button>
                            <Link href='/administrator/master-tables'>
                                <Button size="sm" className="h-8 ml-2" variant="secondary">
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <TableData data={companies} columns={companyColumns} loading={loading}/>
                </div>
            </div>
        </div>
    )
}

export default Page
