import { cookies } from 'next/headers'

export async function GET(req) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')
  console.log('>>>', `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000'}/api/data`)
  const proxyResp = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000'}/api/data`, { headers: { authorization: cookie?.value } })
  const data = await proxyResp.json()

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
