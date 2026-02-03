/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
    DB_NAME: process.env.DB_NAME,
  },
}

export default nextConfig
