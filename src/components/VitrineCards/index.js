import React, { useState, useEffect } from 'react';
import {
  Box,
  CardTitle,
  CardText,
  CardDescription,
  CardFlex,
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
  function Material(props) {
    const material = props.material;

    switch (material) {
      case 1:
        return 'Acetato';
      case 2:
        return 'Metálico';

      default:
        return 'S/I';
    }
  }

  function Color(props) {
    const color = props.color;

    switch (color) {
      case 1:
        return 'Preto';
      case 2:
        return 'Transparente';
      case 3:
        return 'Tartaruga';

      default:
        return 'S/I';
    }
  }

  return (
    <>
      <Box>
        {data &&
          data.map((product) => {
            const { id, imageUrl, name, formatId, materialId, colorId, description } = product;
    
            if (id !== '')
              return (
                <CardFlex>
                  <div>
                    <img src={imageUrl} alt="Imagem do óculos" />
                  </div>
                  <div>
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                      <Material material={materialId} /> |{' '}
                      <Format format={formatId} /> | <Color color={colorId} />
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
