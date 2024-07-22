"use client"

import { useApiNasaImages, useApiNasaPictureDay } from '@/hooks/nasa-api-images'
import React from 'react'
import CardGallery from './CardGallery'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import SearchGallery from './SearchGallery'
import CardGalleryLoader from './CardGalleryLoader'

type Props = {}

export default function RenderClientPage({ }: Props) {

    const searchParams = useSearchParams()

    const search = React.useMemo(() => searchParams.get('search') || '', [searchParams])

    const { data: nasaImages, isLoading, isError } = useApiNasaImages(search, {
        enabled: !!search
    })

    const data = React.useMemo(() => nasaImages || undefined, [nasaImages])

    // if (isLoading) {
    //     return <div>pending</div>
    // }

    if (isError) {
        return <div>eror</div>
    }

    return (
        <>
            <SearchGallery />
            {
                isLoading
                    ?
                    <div className='grid grid-cols-1 gap-4 w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
                        <CardGalleryLoader />
                    </div>
                    :
                    <div className='grid grid-cols-1 gap-4 w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
                        {
                            data?.collection.items.map(item => {
                                return <CardGallery data={item} key={item.href} />
                            })
                        }
                    </div>
            }
        </>
    )

}