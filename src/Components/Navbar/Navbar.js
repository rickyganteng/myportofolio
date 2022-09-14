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
            <Nav.Link href='memes'>About</Nav.Link>
            <Nav.Link href='#deetsd'>Experience</Nav.Link>
            <Nav.Link href='#kontol'>Portofolio</Nav.Link>
            <Nav.Link href='#kontoll'>Contact</Nav.Link>
          </Nav>
          {/* </Col>
          </Row> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
