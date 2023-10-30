import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function Homepage() {
    return (
      <div className="App">
        <h1>Welcome to Dual Aero</h1>
        <Container>
            <Row>
                <Image src="https://images.seattletimes.com/wp-content/uploads/2023/06/06172023_transonic-illo_200022.jpg?d=1536x864" fluid />
            </Row>
        </Container>
        
            <Image src="https://i.pinimg.com/564x/ac/e1/8d/ace18d8f5957d6bc3706039c4b97c121.jpg" fluid />
      </div>
    );
  }
  
  export default Homepage;
  