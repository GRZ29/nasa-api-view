// import { MainNavItem, SidebarNavItem } from "types/nav"
import { Icons } from "@/components/icons"

export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
    label?: string
  }
  
  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[]
  }
  
  export interface MainNavItem extends NavItem {}
  
  export interface SidebarNavItem extends NavItemWithChildren {}

export interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
}