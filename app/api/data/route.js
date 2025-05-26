import { headers } from 'next/headers'

export async function GET(req) {
  const headersList = await headers()
  const authorization = headersList.get('x-authorization')
console.log('authorization >>>', authorization)
console.log(req)
  return new Response(JSON.stringify(authorization === 'cookie-value' ? { message: "sensitive information" } : { message: "error" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
