import { Container, Nav, Navbar } from 'react-bootstrap';

// import style from './Navbar.module.css';
function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* <Row lg='2'>
            <Col> */}
          <Nav className='me-auto'>
            <Navbar.Brand href='#home'>Ricky Syahputra</Navbar.Brand>
          </Nav>
          {/* </Col>
            <Col> */}
          <Nav>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#experience'>Experience</Nav.Link>
            <Nav.Link href='#portofolio'>Portofolio</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          {/* </Col>
          </Row> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
