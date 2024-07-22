import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {}

export default function CardGallery({ }: Props) {

    return Array.from(new Array(40)).map((item, index) => (
        <Card className='relative' key={index}>
            {/* <Badge className='text-sm font-medium my-5 mr-5 absolute z-10 right-0'>ADD LOADER HERE</Badge> */}
            <Skeleton className="text-sm font-medium my-5 mr-5 absolute z-10 right-0 w-[250px]" />
            <CardHeader className='relative h-48'>
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            </CardHeader>
            <CardContent className='h-44 flex flex-col justify-between'>
                <label className='mt-5'><Skeleton className="h-4 w-[250px]" /></label>
                <CardFooter className='m-0 p-0 '>
                    <Skeleton className="h-4 w-[250px]" />
                </CardFooter>
            </CardContent>
        </Card>
    ))


}