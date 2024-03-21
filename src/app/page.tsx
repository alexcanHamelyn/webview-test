"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    console.log("Init");
    window.addEventListener('message', (event) => {
      const { type, data } = event.data;

      setType(type);
      setData(data);
      console.log(type);
      console.log(data);
      // Aquí puedes manejar el tipo de mensaje y los datos recibidos
      if (type === 'miTipoDeMensaje') {
        console.log('Datos recibidos:', data);
        // Haz lo que necesites con los datos recibidos
      }
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Hamelyn Test</h1>
      <hr />
      <pre><code>{JSON.stringify(type, null, 2)}</code></pre>
      <hr />
      <pre><code>{JSON.stringify(data, null, 2)}</code></pre>
    </main>
  );
}
