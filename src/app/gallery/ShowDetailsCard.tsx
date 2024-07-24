import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ImageDataItem } from "@/types";
import React from "react";

interface Props {
    data: ImageDataItem;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ShowDetailsCard({ data, open, onOpenChange }: Props) {

    const item = React.useMemo(() => data.data[0] || '', [data])

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="!max-w-full w-full md:w-9/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 overflow-y-auto" aria-describedby={undefined}>
                <SheetHeader>
                    <SheetTitle className="flex"><label className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">{item.title}</label> </SheetTitle>
                    <div className="flex flex-col lg:flex-row pt-8">
                        <div className="relative w-full min-h-[300px] max-w-[700px] mb-10 md:min-h-[500px] lg:min-h-[500px] xl:min-h-[500px] 2xl:min-h-[500px] max-h-[600px] aaa">
                            <Image
                                src={data.links[0].href}
                                alt={`${data.data[0].title}`}
                                fill
                                className='rounded-t bbb object-contain'
                                quality={100}
                            />
                        </div>
                        <div className="lg:ml-6 text-left">
                            <Badge className="mb-4">{new Date(item.date_created).toDateString()}</Badge><br/>
                            Center: <Badge className="mb-4">{item.center}</Badge>
                            <br />
                            Nasa ID: <Badge className="mb-4">{item.nasa_id}</Badge>
                            <br />
                            Secondary Creator: <Badge className="mb-4">{item.secondary_creator}</Badge>
                            <br />
                            Media Type: <Badge className="mb-4">{item.media_type}</Badge>
                            <br />
                            Description: <p className="max-w-[700px]">{item.description}</p>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet >
    )
}