'use client'

export default function Home() {
  return (
    <div>
      <br/>
      <button
        onClick={async () => {
          await fetch('/api/proxy/data', { method: 'GET', credentials: 'include' })
        }}
      >
        GET DATA
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          await fetch('/api/login', { method: 'POST' })
        }}
      >
        LOGIN
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          const cookies =  await cookieStore.getAll()
          alert(JSON.stringify(cookies))
        }}
      >
        GET COOKIES
      </button>
    </div>
  );
}
