# About
- Simple application of revalidateTag on data fetched from a payload collection

# Setup
- Rename .env.example to .env
- Spin up the docker container with `docker compose up -d`
- Start the nextjs app using `pnpm build && pnpm start`, or `pnpm dev` for a development environment

# Revalidation
- We will be working with revalidating changes to the `Books` collection
- Go to /admin to initialise default user on CMS, and manage books via CRUD operations
