import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({children}) => {


  return (
    <>
      <main className='h-full bg-stone-800 mx-72 '>
        <Header />
          { children }
        <Footer />
      </main>
    </> 
  )
}

export default Layout