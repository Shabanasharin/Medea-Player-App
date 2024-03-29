import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
              <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'White'}}>
              <i className="fa-solid fa-list-check me-3"></i> {' '}
                Media Player
              </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header