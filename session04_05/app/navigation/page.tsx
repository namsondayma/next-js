import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
      <Link href={"/navigation/home"}>Home</Link>
      <Link href={"/navigation/about"}>About</Link>
      <Link href={"/navigation/contact"}>Contact</Link>
      <Link href={"/navigation/login"}>Login</Link>
      
    </div>
  )
}
