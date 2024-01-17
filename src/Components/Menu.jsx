import { NavLink } from 'react-router-dom'

const Menu = () => {
   
  return (
    <header>
        <marquee behavior="" direction="" className="bg-black">
           <div className='d-flex gap-5 text-white align-items-center p-2 '>
           <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
            <p>Search for food</p>
           </div>
        </marquee>
        <nav className="navbar-expand-md navbar-dark bg-warning menuu" style={{"--bs-bg-opacity" : ".5"}}>
      <div className="container navbar">
        <NavLink to={"/"} className="navbar-brand">Tracker</NavLink>

            <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse ms-left" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-item nav-link nav-link-1 active" aria-current="page" href="index.html">Home</NavLink>
                    </li>
                    <li classNameName="nav-item">
                        <NavLink className="nav-item nav-link nav-link-1 active">Famous</NavLink>
                    </li>
                    <li classNameName="nav-item">
                        <NavLink className="nav-item nav-link nav-link-3" href="">About</NavLink>
                    </li>
                    <li classNameName="nav-item">
                        <NavLink className="nav-item nav-link nav-link-4" href="">Contact</NavLink>
                    </li>
                </ul> 
            </div>
        </div>
    </nav>
    </header>
  )
}

export default Menu