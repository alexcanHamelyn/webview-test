"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState('');
  const [data, setData] = useState('DEFAULT_VALUE');
  const [result, setResult] = useState('');
  useEffect(() => {
    window.addEventListener('message', (event) => {
      const { type, data } = event.data;

      if (type && data) {
        setType(type);
        setData(data);
      }
    });
  }, []);

  const handleClick = async () => {
    try {
      axios.defaults.headers.common["H-shop-token"] = data;
      // 9788499087122
      const res = await axios.get("https://webview-test-kappa.vercel.app/api/product");
      setResult(res.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.log(error)
        alert("Unexpected error");
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-5xl">Hamelyn Test</h1>
      <hr />
      <div className="mt-10">
        <button onClick={handleClick} className="px-3 py-1 bg-green-600 rounded-full text-lg">Get 9788499087122 Product</button>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-1/2"><pre><code>{JSON.stringify(result, null, 2)}</code></pre></div>
      </div>
    </main>
  );
}
