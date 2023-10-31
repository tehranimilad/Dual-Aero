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
              src="https://i.ibb.co/WW4Gx7W/Dual-Aero-Skinny.png"
              width="70"
              height="50"
              padding-left="20px"
              alt="Aviation Business Bootstrap logo"
            />
          </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Navi;

