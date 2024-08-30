import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-center">
        <Link to="/">
          <h1 className='text-3xl font-bold text-white drop-shadow-xl'>My Pokémon Card Facts</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar