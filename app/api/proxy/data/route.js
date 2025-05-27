import { cookies } from 'next/headers'

export async function GET(request) {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')

  const proxyResp = await fetch(`http://${request.nextUrl.host}/api/data`, { headers: { 'x-authorization': cookie?.value } })
  const data = await proxyResp.json()

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
