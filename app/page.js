'use client'

import { useEffect, useRef } from "react";

export default function Home() {
  const state = useRef()

  useEffect(() => {
    const iframe = document.createElement('iframe')

    iframe.onload = () => {
      iframe.contentWindow.postMessage({ action: "init" });
    };

    window.addEventListener("message", (event) => {
      console.log("Message from iframe:", event.data);
      state.current = event.data?.data
      // iframe.remove()
    });

    iframe.src = 'http://localhost:3000/iframe'
    document.body.appendChild(iframe);
  }, [])

  return (
    <div className="container">
       <script
         // dangerous script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener("message", (event) => {
              console.log("dangerous user script can read this:", event.data);
            });
          `
        }}
      />
      <article style={{ margin: '0 auto', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '99vh' }}>
        <button
        onClick={async () => {
          let data = await fetch('/api/proxy/data', { method: 'GET', credentials: 'include' })
          data = await data.json()
          alert(JSON.stringify(data.data))
        }}
      >
        GET SENSITIVE DATA
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          let data = await fetch('/api/login', { method: 'POST' })
          data = await data.json()
          alert(JSON.stringify(data))
        }}
      >
        LOGIN (set http only cookies on server)
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          const cookies =  await cookieStore.getAll()
          alert(JSON.stringify(cookies,null, '  '))
        }}
      >
        READ ALL COOKIES
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
      <br/><br/>
      <button
        onClick={async () => {
          let data = await fetch('/api/get_token', { method: 'GET' })
          data = await data.json()
          alert(JSON.stringify(data))
        }}
      >
        GET TOKEN FROM API
      </button>
      <br/><br/>
      <button
        onClick={async () => {
          alert( state.current)
        }}
      >
        GET TOKEN FROM IFRAME
      </button>
      <br/><br/>
      <a href='https://github.com/VAKHULA/proxy'>https://github.com/VAKHULA/proxy</a>
      </article>
    </div>
  );
}
