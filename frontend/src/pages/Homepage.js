import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Homepage.css"

function Homepage() {
    return (
      <div className="App">
        <Container />
            <Row>
                <div className="homepage-image">
                <p className="slogan">Elevate Your Expectations, Trust Dual Aero</p>
                    </div>
                
            </Row>
            <Image src="https://i.pinimg.com/564x/ac/e1/8d/ace18d8f5957d6bc3706039c4b97c121.jpg" fluid />
      </div>
    );
  }
  
  export default Homepage;
  