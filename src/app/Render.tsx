"use client"

import React from 'react'
import { useApiNasaImages } from '@/hooks/nasa-api-images'
import { ImagesData } from '@/types'
type Props = {}

export default function Render({ }: Props) {

    const { data: nasaImages, isPending, isError } = useApiNasaImages()

    const data = React.useMemo(() => nasaImages || undefined, [nasaImages]) 

    if (isPending) {
        return <div>pending</div>
    }

    if (isError){
        return <div>eror</div>
    }

    return (
        <div>{data?.collection.href}</div>
    )
}