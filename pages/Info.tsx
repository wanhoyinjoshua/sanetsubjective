import React from 'react'
import { useRouter } from 'next/navigation';
const Info = () => {
  const router = useRouter();
  function handleConvert(){

    router.push("/")

  }
  return (
    <div>Info

<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleConvert}>Start Simulation</button>

    </div>
  )
}

export default Info