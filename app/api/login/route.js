import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
  cookieStore.set('my-http-only-cookie', 'MY_SECRET_TOKEN', {
    httpOnly: true,
    path: '/',
  })
  cookieStore.set('my-http-only-cookie-refresh', 'MY_SECRET_REFRESH_TOKEN', {
    httpOnly: true,
    path: '/',
  })

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
