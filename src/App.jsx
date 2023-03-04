import react from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import GamesContextProvider from './Context/GamesContext'
import Layout from './layout/Layout'
import Rutas from './routes/Rutas'

function App() {

  return (
      <BrowserRouter>
        <GamesContextProvider>
          <Layout>
            <Rutas/>
          </Layout>
        </GamesContextProvider>
      </BrowserRouter>
  )
}

export default App
