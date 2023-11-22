import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'text-white')
  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to='/'>
          {' '}
          Home{' '}
        </NavLink>
        <NavLink className={setActiveClass} to='/pokemones'>
          {' '}
          Pokemones{' '}
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar
