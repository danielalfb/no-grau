import React, { useState, useEffect } from 'react';
import {
  CardTitle,
  CardText,
  CardDescription,
  Cards,
  CardFlex,
  Img,
} from './style';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function VitrineCards() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch('https://no-grau2347.herokuapp.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {data.map((product) => (
          <Col>
            <Cards>
              <Card style={{ height: '380px' }}>
                <CardFlex>
                  <Img>
                    <Card.Img variant="top" src={product.imageUrl} />
                  </Img>
                  <div>
                    <Card.Body>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.formatId}</CardText>
                      <CardDescription>{product.description}</CardDescription>
                    </Card.Body>
                  </div>
                </CardFlex>
              </Card>
            </Cards>
          </Col>
        ))}
      </Row>
      )
    </>
  );
}

export default VitrineCards;
