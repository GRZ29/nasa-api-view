import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {}

const formSchema = z.object({
    search: z.string().min(2, {
        message: "Search must be at least 2 characters.",
    }),
})

export default function SearchGallery({ }: Props) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const search = React.useMemo(() => searchParams.get('search') || '', [searchParams])

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: search,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.push(pathname + '?' + createQueryString('search', values.search))
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full">
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormControl>
                                <Input placeholder="Search into nasa gallery" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className='ml-5' type="submit">Search</Button>
            </form>
        </Form>
    )
}