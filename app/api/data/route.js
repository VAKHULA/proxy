import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()
  const authorization = headersList.get('x-authorization')

  return new Response(JSON.stringify(authorization === 'MY_SECRET_TOKEN' ? { message: "sensitive information" } : { message: "error" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
