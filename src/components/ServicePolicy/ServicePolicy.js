import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./ServicePolicy.css";
const ServicePolicy = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Our Service POlicy</h2>
            <div className='service container mt-5 mb-5'>
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://media.istockphoto.com/photos/plane-trucks-are-flying-towards-the-destination-with-the-brightest-picture-id859526476?k=20&m=859526476&s=612x612&w=0&h=izxGlw9MzMS4lhyyV9mb5F-3BJ55xGjcsF3jZ9tWHkc=" />
  <Card.Body>
    <Card.Title>CARGO</Card.Title>
    <Card.Text>
      
Consignments may be tracked by feeding the Car system code and the Air Waybill number in the boxes below..
    </Card.Text>
    <Button variant="primary">READ MORE</Button>
  </Card.Body>
</Card>
        </div>

        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/couple-dealer-selling-cars-look-260nw-1579747456.jpg" />
  <Card.Body>
    <Card.Title>LOGISTIC</Card.Title>
    <Card.Text>
      
Consignments may be tracked by feeding the airline code and the Air Waybill number in the boxes below..
    </Card.Text>
    <Button variant="primary">READ MORE</Button>
  </Card.Body>
</Card>
        </div>

        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.aglexpresscargo.com/wp-content/uploads/2019/01/air-cargo1.jpg" />
  <Card.Body>
    <Card.Title>STORAGE</Card.Title>
    <Card.Text>
      Every company's all car available in our Car warehouse.
    </Card.Text>
    <Button variant="primary">READ MORE</Button>
  </Card.Body>
</Card>
        </div>
        </div>
        <hr className='container'></hr>
        </div>
    );
};

export default ServicePolicy;