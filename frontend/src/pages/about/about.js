import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function About() {
    return (
      <div className="App">
        <Row> 
          <p className="slogan"> Our Services</p>
          <CardGroup>
      <Card>
        <Card.Img className="pics" variant="top" src="https://assets.skiesmag.com/wp-content/uploads/2021/12/air_canada_787_yyz_parked_front_portrait-1.jpg" />
        <Card.Body>
          <Card.Title>Live Inventory</Card.Title>
          <Card.Text>
            Explore Our Extensive Catalog of Airplane Parts - Your Source for Reliable Aviation Components {' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="pics" variant="top" src="https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/r/repair-services/repair-services-commercial-aviation-color.jpg?rev=11fa6394574340dd97b87f28b76002e4" />
        <Card.Body>
          <Card.Title>Reliability</Card.Title>
          <Card.Text>
          Your Trusted Source for Reliable Aircraft Parts, Ensuring Safety and Performance.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img className="pics" variant="top" src="https://interlakemecalux.cdnwm.com/blog/img/pallet-rack-parts-safety-accessibility.1.2.jpg" />
        <Card.Body>
          <Card.Title>Wrong Part? No Problem</Card.Title>
          <Card.Text>
          Our Hassle-Free Exchange Policy ensures that even if you've ordered the incorrect part for your aircraft, we're here to make it right! Your satisfaction is our commitment. If you require an exchange for your part, don't hesitate to reach out to one of our knowledgeable team members today!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </Row>
      </div>
    );
  }
  
  export default About;
