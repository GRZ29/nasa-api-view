"use client"

import Image from 'next/image';
import { useApiNasaPictureDay } from '@/hooks/nasa-api-images'
import React from 'react'

type Props = {}

export default function RenderClientPage({ }: Props) {

    const { data, isLoading } = useApiNasaPictureDay()

    if (isLoading) {
        return <div>is loading</div>
    }
    return (
        <>
            {!data ? <> no data </> : <div className='min-h-screen'>
                <div className='container p-4 pt-20 mx-auto sm:px-8 lg:pt-10'>

                    <div className='grid lg:grid-cols-2 lg:gap-4'>
                        {data.media_type === 'video' ? (
                            <div className='relative h-[50vh] mb-4 lg:mb-0'>
                                <iframe
                                    src={data?.url}
                                    title={data?.title}
                                    width='560'
                                    height='349'
                                    className='absolute top-0 left-0 w-full rounded-t-lg lg:rounded-lg'
                                    frameBorder='0'
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className='relative h-[50vh] rounded-lg mb-4 lg:mb-0 lg:h-auto focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-400'>
                                <a
                                    href={data?.hdurl}
                                    className='rounded-lg focus:ring-0 focus:ring-offset-0 focus:ring-transparent'
                                >
                                    <Image
                                        src={data?.url}
                                        alt={data?.title}
                                        className='object-contain object-center rounded-lg lg:object-top'
                                        fill
                                        priority={true}
                                        loading='eager'
                                        quality={100}
                                    />
                                </a>
                                <div className='hidden lg:sticky lg:block lg:top-10'>
                                
                            </div>
                            </div>
                        )}

                        <div className='p-4 bg-card rounded-b-lg sm:p-8 lg:rounded-lg'>
                            <p className='pt-2 lg:pt-0'>{data?.date}</p>
                            <h1 className='py-2 text-4xl font-medium glow'>
                                {data?.title}
                            </h1>
                            {data?.copyright ? (
                                <h2 className='text-lg'>{`Credit: ${data.copyright}`}</h2>
                            ) : null}
                            <p className='pt-2 text-xl leading-relaxed'>
                                {data?.explanation}
                            </p>
                        </div>
                    </div>

                </div>
            </div>}
        </>
    )

}