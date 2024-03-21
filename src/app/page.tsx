"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Init");
    window.addEventListener('message', (event) => {
      const { type, data } = event.data;

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
    </main>
  );
}
