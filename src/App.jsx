import react from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Rutas from './routes/Rutas'

function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Rutas/>
        </Layout>
      </BrowserRouter>
  )
}

export default App
