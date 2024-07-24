"use client"

import { useApiNasaImages } from '@/hooks/nasa-api-images'
import React from 'react'
import CardGallery from './CardGallery'
import { useSearchParams } from 'next/navigation'
import SearchGallery from './SearchGallery'
import CardGalleryLoader from './CardGalleryLoader'
import BoxReveal from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";

type Props = {}

export default function RenderClientPage({ }: Props) {

    const searchParams = useSearchParams()

    const search = React.useMemo(() => searchParams.get('search') || '', [searchParams])

    const { data: nasaImages, isLoading, isError } = useApiNasaImages(search, {
        enabled: !!search
    })

    const data = React.useMemo(() => nasaImages || undefined, [nasaImages])

    if (isError) {
        return <div>error</div>
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
                    : !data?.collection
                        ?
                        <div className="h-full w-full items-center justify-center overflow-hidden pt-8">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <p className="text-[3.5rem] font-semibold aaa">
                                    Nasa Gallery
                                </p>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <h2 className="mt-[.5rem] text-[1rem]">
                                    You only need to search a keyword to see if the api have something related to your keyword
                                </h2>
                            </BoxReveal>

                        </div>
                        :
                        <div className='grid grid-cols-1 gap-4 w-full 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
                            {
                                data?.collection.items.map((item,idx) => {
                                    return (
                                        <BlurFade key={item.href} delay={idx * 0.01} inView>
                                            <CardGallery data={item} key={item.href} />
                                        </BlurFade>
                                    )
                                })
                            }
                        </div>
            }
        </>
    )

}