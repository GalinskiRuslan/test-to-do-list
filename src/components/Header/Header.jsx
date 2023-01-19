import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import src from '../../img/icons8-список-задач-64.png';
import { Link } from 'react-router-dom';



const Header = () => {
  return (

    <Navbar bg="none" expand="lg"  variant="primary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link><Link className='links' to='/'><img src={src} alt="img"/></Link></Nav.Link>
          <Nav.Link><Link className='links blue' to='/tasks'>Мои задачи</Link></Nav.Link>
          <Nav.Link><Link className='links blue' to='/history'>История задач</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}
export default Header;