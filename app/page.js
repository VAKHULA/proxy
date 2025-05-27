'use client'

export default function Home() {
  return (
    <div>
      <br/>
      <button
        onClick={async () => {
          let data = await fetch('/api/proxy/data', { method: 'GET', credentials: 'include' })
          data = await data.json()
          alert(JSON.stringify(data.data))
        }}
      >
        GET DATA
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          let data = await fetch('/api/login', { method: 'POST' })
          data = await data.json()
          alert(JSON.stringify(data))
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
      <br/><br/>
      <button
        onClick={async () => {
          let data = await fetch('/api/get_token', { method: 'GET' })
          data = await data.json()
          alert(JSON.stringify(data))
        }}
      >
        GET TOKEN
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          await fetch('/api/delete', { method: 'GET' })
          const cookies =  await cookieStore.getAll()
          alert(JSON.stringify(cookies))
        }}
      >
        CLEAR COOKIES
      </button>
    </div>
  );
}
