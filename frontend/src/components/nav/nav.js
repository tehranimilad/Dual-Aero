import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./nav.css"

function Navi() {
    return (
      <div>
        <Navbar bg="white" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">
            <img
              src="https://i.ibb.co/qdhw2cw/Logo-Solo.png"
              width="65"
              height="40"
              padding-left="20px"
              alt="Aviation Business Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="nav-brand" href="#home">Dual Aero</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#parts">Parts</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Navi;

