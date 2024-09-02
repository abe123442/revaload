import { revalidateTag } from 'next/cache'
import type { CollectionConfig } from 'payload'
import { revalidateBooks } from './Books/revalidateBooks'

export const Books: CollectionConfig = {
  slug: 'books',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    }
  ],
  hooks: {
    afterOperation: [revalidateBooks]
  }
}
