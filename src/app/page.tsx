"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState('');
  const [data, setData] = useState('');
  const [user, setUser] = useState('');
  useEffect(() => {
    window.addEventListener('message', (event) => {
      const { user } = event.data;

      // setType(type);
      // setData(data);
      setUser(user);
      // Aquí puedes manejar el tipo de mensaje y los datos recibidos

    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Hamelyn Test</h1>
      <hr />
      <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
    </main>
  );
}
