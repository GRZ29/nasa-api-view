import React from 'react'
import RenderClientPage from './RenderClientPage'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <React.Suspense>
                <RenderClientPage />
            </React.Suspense>
        </div>
    )
}