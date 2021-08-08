import React, { useState, useEffect } from 'react';
import { Box, CardTitle, CardText, CardDescription, CardFlex, Img } from './style';
function VitrineCards() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch('https://no-grau2347.herokuapp.com/products')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Box>
        {data &&
          data.map((product) => {
            const { id, imageUrl, name, formatId, description } = product;
            if (id !== " ")
              return (
                <CardFlex>
                  <Img>
                  <img src={imageUrl} alt="Imagem do óculos" />
                  </Img>
                  <div>
                  <CardTitle>{name}</CardTitle>
                  <CardText>{formatId}</CardText>
                  <CardDescription>{description}</CardDescription>
                  </div>
                </CardFlex>
              );
          })}
      </Box>
    </>
  );
}

export default VitrineCards;
