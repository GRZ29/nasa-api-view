import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ImageDataItem } from '@/types';
import React from 'react'
import { Badge } from '@/components/ui/badge';
import ShowDetailsCard from './ShowDetailsCard';
import { Button } from '@/components/ui/button';

type Props = { data: ImageDataItem; }

export default function CardGallery({ data }: Props) {

    const [openDetails, setOpenDetails] = React.useState<boolean>(false);

    return (
        <Card className='relative'>
            <Badge className='text-sm font-medium my-5 mr-5 absolute z-10 right-0'>{new Date(data.data[0].date_created).toDateString()}</Badge>
            <CardHeader className='relative h-48'>
                <Image
                    src={data.links[0].href}
                    alt={`${data.data[0].title}`}
                    fill
                    loading='eager'
                    priority
                    style={{ objectFit: "cover", objectPosition: 'top' }}
                    className='rounded-t'
                />
            </CardHeader>
            <CardContent className='h-44 flex flex-col justify-between'>
                <label className='mt-5'>{data.data[0].title}</label>
                <CardFooter className='m-0 p-0 '>
                    <Button onClick={() => setOpenDetails(true)}>View</Button>
                </CardFooter>

            </CardContent>
            <ShowDetailsCard data={data} open={openDetails} onOpenChange={setOpenDetails} />
        </Card>

    )
}