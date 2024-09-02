'use server'

import { revalidateTag } from "next/cache"
import type { CollectionAfterOperationHook } from "payload"

export const revalidateBooks: CollectionAfterOperationHook<any> = ({ operation, req: { payload } }) => {
  payload.logger.info(`Hook triggered on operation: ${operation}`)
  const ops = ["create", "delete", "deleteByID", "update", "updateByID"]

  if (ops.includes(operation)) {
    payload.logger.info("Revalidating tag: books...")
    revalidateTag('books')
  }
}