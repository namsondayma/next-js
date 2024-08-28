"use client"


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
    const pathname = usePathname()
    console.log(pathname);
    
  return (
    <div>
      <Link className={`${pathname === "/" ? "text-red-600" : ""}`} href="/">Home</Link>
      <Link  className={`${pathname === "/about" ? "text-red-600" : ""}`} href="/contact">About</Link>
      <Link  className={`${pathname === "/contact" ? "text-red-600" : ""}`} href="/contact">Contact</Link>
      <Link  className={`${pathname === "/login" ? "text-red-600" : ""}`} href="/contact">Login</Link>
    </div>
  )
}
