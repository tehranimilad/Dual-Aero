import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Homepage.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Homepage() {
    return (
      <div className="App">
        <div className="slogan-div">
        <p className="slogan"> Elevate Your Expectations, Trust Dual Aero.</p>
        </div>
        <Container />
            <Row>
                <div className="homepage-image" />
            </Row>
      </div>
    );
  }
  
  export default Homepage;
  