"use client";

import { ToastContainer, toast } from '../../src'

export default function Home() {
  const wave = () => toast('Morning! Have a good day.', {
    backgroundColor: '#8329C5',
    color: '#ffffff',
  })


  return (
      <div>
          <button onClick={wave}>Say hi!</button>
          Hello World!
          <ToastContainer delay={1000} />
      </div>
  )
}
