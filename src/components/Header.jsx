import { useContext } from 'react'
import { GamesContext } from '../Context/GamesContext'

const Header = () => {

    const { games } = useContext(GamesContext)

  return (
    <>
      <header className='w-full flex flex-row gap-64'>
        <section className='bg-green-200'>
          <h1>Header</h1>
        </section>
        <ul className='flex flex-row justify-between h-40 grow'>
          {
              games.map((game) => {
                
                return (
                  <li key={game.id} className='bg-green-200'>
                    <h2>{game.state? game.title : 'En construcción'}</h2>
                    <img src='#' alt={game.name} />
                  </li>
                ) 
              })
          }
        </ul>
      </header>
    </>

  )
}

export default Header