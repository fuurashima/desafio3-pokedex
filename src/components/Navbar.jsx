import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  return (
    <nav>
      <span><img className="logo" src='src\assets\pokedexico.png'/></span>
      <div className="links">
        <NavLink to="/" className={setActiveClass} > Home </NavLink> 
        <NavLink to="/pokemon" className={setActiveClass} > Pokémon </NavLink>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
