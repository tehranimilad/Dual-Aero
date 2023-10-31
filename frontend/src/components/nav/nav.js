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
            {/* <img
              src="https://i.pinimg.com/564x/ac/e1/8d/ace18d8f5957d6bc3706039c4b97c121.jpg"
              width="100"
              height="80"
              alt="Aviation Business Bootstrap logo"
            /> */}
          </Navbar.Brand>
                <Navbar.Brand href="#home">Dual Aero</Navbar.Brand>
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

