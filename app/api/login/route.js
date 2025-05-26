import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
  cookieStore.set('my-http-only-cookie', 'cookie-value', {
    httpOnly: true,
    path: '/',
  })

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
