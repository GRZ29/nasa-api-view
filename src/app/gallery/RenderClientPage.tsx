"use client"

import { useApiNasaImages } from '@/hooks/nasa-api-images'
import React from 'react'
import CardGallery from './CardGallery'


type Props = {}

export default function RenderClientPage({ }: Props) {

    const { data: nasaImages, isPending, isError } = useApiNasaImages()

    const data = React.useMemo(() => nasaImages || undefined, [nasaImages])

    if (isPending) {
        return <div>pending</div>
    }

    if (isError) {
        return <div>eror</div>
    }

    return (
        <div className='grid grid-cols-1 gap-4 w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
            {
                data?.collection.items.map(item => {
                    // return <div key={item.href}>{item.data[0].title}</div>
                    return <CardGallery data={item} key={item.href} />
                })
            }
        </div>
    )

}