

import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>TS Amazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>Cart</a>
            <a href="/login" className='nav-link'>Login</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
           <Outlet/>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All rigth reserved</div>
      </footer>
    </div>
  )
}

export default App