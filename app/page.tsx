//'use client'

import Contact from './components/Contact'
import About from "./components/About"
import FavouriteProjects from "./components/FavouriteProjects"

export default function Home() {
  return (

    <>
      {/*
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        */}

        <main className="container mx-auto px-10 py-32">

          <About />

          <FavouriteProjects />

          <Contact />

        </main>
    </>

  )
}
