"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { ToastContainer, toast } from '../../dist'

export default function Home() {
  const wave = () => toast('Morning! Have a good day.', {
    backgroundColor: '#8329C5',
    color: '#ffffff',
  })


  return (
      <div>
          <button onClick={wave}>Say hi!</button>
          Hello World!
          <ToastContainer />
      </div>
  )
}
