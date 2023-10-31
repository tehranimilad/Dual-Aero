import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Homepage.css"

function Homepage() {
    return (
      <div className="App">
        <p className="slogan"> Elevate Your Expectations, Trust Dual Aero.</p>
        <Container />
            <Row>
                <div className="homepage-image" />
                
                    <p className="slogan"> Our Services</p>
            </Row>
      </div>
    );
  }
  
  export default Homepage;
  