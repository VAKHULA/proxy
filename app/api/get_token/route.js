import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')

  return new Response(JSON.stringify({ token: cookie?.value }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
