
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import RealTimeChat from "@/components/RealTimeChat"
import { Body } from '@/components/Landing'
// import $ from 'jquery';
// import Popper from 'popper.js';



export default function Home() {
  return (
    <div>
      <Header/>
      <Body/>
      <RealTimeChat/>
    </div>
  )
}
