import { Route, Routes } from 'react-router-dom'

import Home from '../views/Home'
import Whoiswho from '../views/Whoiswho'

const Rutas = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="whoiswho" element={<Whoiswho />} />
    </Routes>
  )
}

export default Rutas