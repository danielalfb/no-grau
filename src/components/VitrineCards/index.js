import React, { useState, useEffect } from 'react';
import {
  Box,
  CardTitle,
  CardText,
  CardDescription,
  CardFlex,
  Img,
} from './style';

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

  function Format(props) {
    const format = props.format;

    switch (format) {
      case 1:
        return 'Redondo';
      case 2:
        return 'Quadrado';
      case 3:
        return 'Aviador';
      case 4:
        return 'Retangular';
      case 5:
        return 'Oval';

      default:
        return 'Sem formato';
    }
  }

  return (
    <>
      <Box>
        {data &&
          data.map((product) => {
            const { id, imageUrl, name, formatId, description } = product;
            if (id !== '')
              return (
                <CardFlex>
                  <Img>
                    <img src={imageUrl} alt="Imagem do óculos" />
                  </Img>
                  <div>
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                      <Format format={formatId} />
                    </CardText>
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
