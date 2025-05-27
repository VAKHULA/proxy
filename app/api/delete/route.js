import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  cookieStore.delete('my-http-only-cookie')

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
