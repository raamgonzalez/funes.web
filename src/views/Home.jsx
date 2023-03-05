import React from 'react'
import Presentation from '../components/Presentation'
import Statistics from '../components/Statistics'

const Home = () => {
  return (
    <>
      <section className='home'>
        <Presentation/>
        <Statistics/>
      </section>
    </>
  )
}

export default Home