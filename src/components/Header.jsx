import { useContext } from 'react'
import { GamesContext } from '../Context/GamesContext'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const { games } = useContext(GamesContext)

  return (
    <>
      <header className='header'>
        <section className='header__brand brand'>
          <h1 className='brand__h1'>Los juegos de Funes</h1>
        </section>
        <ul className='header__nav nav'>
          {
              games.map((game) => {
                
                return (
                   <li key={game.id} className='nav__li li'>
                    { game.state ? <NavLink className='li__a' to={game.to}><h2 className='li__h2'>{game.title}</h2></NavLink> 
                                : <h2 className='li__h2'>'En construcción'</h2>
                    }
                    <img className='li__img' src='#' alt={game.name} />

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