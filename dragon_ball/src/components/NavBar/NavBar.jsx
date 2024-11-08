import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 250}} variant="contained">Inicio</Button>
        </Link>
        <Link to={"/character/Alien"}>
          <Button sx={{marginTop: 4, width: 250}} variant="contained">No Humanos</Button>  
        </Link>
        <Link to={"/character/Human"}>
          <Button sx={{marginTop: 4, width: 250}} variant="contained">Humanos</Button>
        </Link>
        <Link to={"/details"}>
          <Button sx={{marginTop: 4, width: 250}} variant="contained">Acerca De</Button>
        </Link>
    </nav>
  )
}

export default NavBar