"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { docsConfig } from "@/config/docs"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
                <Icons.logo className="h-6 w-6" />
                <span className="hidden font-bold lg:inline-block">
                    {siteConfig.name}
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                {docsConfig.mainNav?.map(
                    (item) =>
                        item.href && (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn("transition-colors hover:text-foreground/80")}
                            >
                                {item.title}
                            </Link>
                        )
                )}
            </nav>
        </div>
    )
}