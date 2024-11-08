import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://i.pinimg.com/originals/68/99/e7/6899e7702d83590b76057349bf122e4e.jpg" alt="Logo Dragon Ball Z" />
        <h1>Dragon Ball Z </h1>
        <p>Personajes</p>
        <NavBar/>
    </header>
  )
}

export default Header