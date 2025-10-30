"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
type Props = {}

const page = (props: Props) => {
const router = useRouter()

  return (
    <div>
      Global Page
      <ul>
        <Link href={"/"}><li>Home</li></Link>
      <Link href={"/about"}><li>About</li></Link>
      <Link href={"/contact"}><li>Contact</li></Link>
      </ul>
      <button onClick={()=>router.push("/about")}>
        Go to About
      </button>
      </div>
  )
}

export default page