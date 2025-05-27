import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
   const cookie = cookieStore.get('my-http-only-cookie-refresh')
   if (cookie?.value === 'MY_SECRET_REFRESH_TOKEN') {
      cookieStore.set('my-http-only-cookie-refresh', 'MY_SECRET_REFRESH_TOKEN_2', {
        httpOnly: true,
        path: '/',
    })
   }

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
