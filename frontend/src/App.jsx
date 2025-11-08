import { useState } from 'react'
import Hero from './components/user/LandingPage/Hero'
import Header from './components/user/LandingPage/Header'
import CarHeader from './components/user/LandingPage/CarHeader'
import CardComponent from './components/user/LandingPage/CardComponent'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <CarHeader/>
      <CardComponent/>
    </>
  )
}

export default App
