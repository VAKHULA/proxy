import { cookies } from 'next/headers'

export async function GET(request) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')
  console.log(cookie)
  const proxyResp = await fetch(`http://${request.nextUrl.host}/api/data`, { headers: { authorization: cookie?.value } })
   console.log(proxyResp)
  const data = await proxyResp.json()
  console.log(data)
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
