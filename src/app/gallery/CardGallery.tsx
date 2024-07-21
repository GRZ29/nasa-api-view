import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageDataItem } from '@/types';
import React from 'react'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Props = { data: ImageDataItem; }

export default function CardGallery({ data }: Props) {
    return (
        <Card className='relative'>
            <Badge className='text-sm font-medium my-5 mr-5 absolute z-10 right-0'>{new Date(data.data[0].date_created).toDateString()}</Badge>
            <CardHeader className='relative h-48'>
                <Image
                    src={data.links[0].href}
                    alt={`${data.data[0].title}`}
                    fill
                    priority 
                    style={{ objectFit: "cover", objectPosition: 'top' }}
                    className='rounded-t'
                />
            </CardHeader>
            <CardContent className='h-44 flex flex-col justify-between'>
                <label className='mt-5'>{data.data[0].title}</label>
                <CardFooter className='m-0 p-0 '>
                    <Button className='m-0'>View</Button>
                </CardFooter>

            </CardContent>

        </Card>

    )
}