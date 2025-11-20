"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: Icons.home,
  },
  {
    name: "Features",
    href: "/features",
    icon: Icons.features,
  },
  {
    name: "Reviews",
    href: "/reviews",
    icon: Icons.reviews,
  },
  {
    name: "About",
    href: "/about",
    icon: Icons.about,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Icons.contact,
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
    icon: Icons.privacy,
  },
  {
    name: "Terms of Service",
    href: "/terms",
    icon: Icons.terms,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-sidebar px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
            <span className="text-xl font-bold">PDF TO JPG</span>
          </Link>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex gap-x-3 p-2 text-sm font-semibold leading-6 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                          pathname === item.href
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground",
                        )}
                      >
                        <Icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
