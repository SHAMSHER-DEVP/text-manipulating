import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Nv() {
    let [tcbg,setTcbg]=useState({
      color:"white",
      backgroundColor:"green"
    });
    document.body.style.backgroundColor=tcbg.backgroundColor;
    document.body.style.color=tcbg.color;
    let white=()=>{
      setTcbg({color:"black",backgroundColor:"white"})
    }
    let green=()=>{
      setTcbg({color:"white",backgroundColor:"green"})
    }
    let blue=()=>{
      setTcbg({color:"white",backgroundColor:"#0000fca1"})
    }
    let gray=()=>{
      setTcbg({color:"white",backgroundColor:"grey"})
    }
  return (
   <>
      
        <Navbar  expand="sm" className=" mb-3  md-mg bg-info "  sticky='top' >
        {/* bg-body-tertiary */}
          <Container fluid>
            <Navbar.Brand href="#">Text-Manipulating</Navbar.Brand>
            <Navbar.Toggle aria-controls={`my-nv`} />
            <Navbar.Offcanvas
            className="h-50"
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Manipulating
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link className=' me-5  my-0'>
                <div className="d-flex gap-3     ">
                
                  <p className=' rounded rounded-circle hw bg-success outline-none m-0 ' onClick={green}></p>
                  <p className=' rounded rounded-circle hw bg-light outline-none m-0' onClick={white}></p>
                  <p className=' rounded rounded-circle hw bg-primary outline-none m-0' onClick={blue}></p>
                  <p className=' rounded rounded-circle hw bg-secondary outline-none m-0' onClick={gray}></p>
                </div> 
                  </Nav.Link> 
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   </>
  )
}

export default Nv