import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

export default function CardDayLoader({ }: Props) {
    return (
        <div className='min-h-screen'>
            <div className='container p-4 pt-20 mx-auto sm:px-8 lg:pt-10'>
                <div className='grid lg:grid-cols-2 lg:gap-4'>

                    <div className='relative h-[50vh] rounded-lg mb-4 lg:mb-0'>
                        <Skeleton className="text-sm font-medium my-5 mr-5 w-full h-full" />
                    </div>

                    <div className='rounded-b-lg lg:rounded-lg'>
                        <Skeleton className="text-sm font-medium my-5 mr-5 w-full h-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}