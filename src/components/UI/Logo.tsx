import React from 'react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" aria-label="Home">
      <div className="rounded border-2 border-primary-500 flex items-center justify-center w-14 h-7">
        <p className="text-primary-500">Logo</p>
      </div>
    </Link>
  )
}
