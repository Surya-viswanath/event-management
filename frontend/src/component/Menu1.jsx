import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu1() {
    
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" style={{display:'flex'}}>
        <Container  style={{marginLeft:'10%'}}>
       
        <Link to="#" style={{textDecoration:'none'}}><p style={{color:'black'}}><span style={{fontSize:'20px'}}>Event</span><span style={{fontSize:'20px'}}>special</span></p></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:'10%'}}>
         
            <Nav.Link href="#home" >Events</Nav.Link>
            <Nav.Link href={'/event'} >Book event</Nav.Link>
            <Nav.Link href={'/'} >Logout</Nav.Link>
           
            <Nav.Link href='#'  className='meenu'></Nav.Link>
            </Nav>
           
          
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Menu1