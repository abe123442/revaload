import React from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { unstable_cache } from 'next/cache'

const getBooks = unstable_cache(
  async () => {
    const payload = await getPayloadHMR({ config })
    const books = await payload
      .find({ collection: 'books', pagination: false })
      .then(({ docs }) => docs)

    return books
  },
  ['books']
)

const Page = async () => {
  const books = await getBooks()

  return (
    <div className='ml-5'>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page