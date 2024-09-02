import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
      <div>Index</div>
      <Link href={'/books'}>Books</Link>
    </>
  )
}

export default Page