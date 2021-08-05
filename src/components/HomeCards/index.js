import React, { useEffect, useState } from 'react';
import { Box, Container, Title } from '../HomeCards/style';

export default function HomeCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://no-grau2347.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Box>
        {products &&
          products.map((product) => {
            const { id, imageUrl, name } = product;
            if (id === 185 || id === 155 || id === 125)
              return (
                <Container>
                  <img src={imageUrl} alt="Imagem do produto" />
                  <Title>{name}</Title>
                </Container>
              );
          })}
      </Box>
    </>
  );
}
