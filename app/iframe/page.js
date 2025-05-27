'use server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const cookie = cookieStore.get('my-http-only-cookie')
  const cookieValue = cookie?.value
  return (
    <div className="container">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("message", (event) => {
              console.log("Message from parent:", event.data);
              event.source.postMessage({ action: "answer", data: '${cookieValue}' });
            });
          `
        }}
      />
    </div>
  )
}