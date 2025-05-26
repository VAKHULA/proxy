import { cookies } from 'next/headers'

export async function GET(req) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')
  const proxyResp = await fetch(`${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}`, { headers: { authorization: cookie?.value } })
  const data = await proxyResp.json()

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
