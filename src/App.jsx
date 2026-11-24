import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CompA from './components/compA'
import ParentBox from './components/ParentBox'
import CounterHistory from './components/CounterHistory'
import Timer from './components/Timer'
import SilentClickCounter from './components/SilentClickCounter'

function App() {
  return (
    <>
     <CompA/>
     <ParentBox/>
     <CounterHistory/>
     <Timer/>
     <SilentClickCounter/>
     </>
  )
}

export default App
