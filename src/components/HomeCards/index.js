import React from 'react';
import { Box, Container, Title } from '../HomeCards/style';

const products = [
  {
    id: 155,
    name: 'No Grau 6 (miope suave)',
    description:
      'Para os mais discretos. Nosso modelo cai bem em qualquer ocasião.',
    imageUrl:
      'https://image-tool.eotica.com.br/?d=eo&w={width}&q=75&f=catalog/product/r/a/ray_ban_rx5387___transparente___5629_54_0.jpg',
    formatId: 2,
    materialId: 1,
    colorId: 2,
    createdAt: '2021-07-27T16:47:59.000Z',
    updatedAt: '2021-07-27T16:47:59.000Z',
  },
  {
    id: 125,
    name: 'No Grau 3 (Olá Harry)',
    description:
      'Nossa armação foi feita para homenagerar o bruxinho mais amado dos anos 2000.\r\nDizem que ao colocar esses óculos, a mágica acontece. \r\nBom, eu não deixaria de testar... vai que né ?',
    imageUrl:
      'https://image-tool.eotica.com.br/?d=eo&w={width}&q=75&f=catalog/product/l/e/lema21-tim-preto-c4-48-1_1.jpg',
    formatId: 1,
    materialId: 1,
    colorId: 3,
    createdAt: '2021-07-27T16:47:34.000Z',
    updatedAt: '2021-07-27T16:47:34.000Z',
  },
  {
    id: 185,
    name: 'No Grau 9 (tartaruga voadora)',
    description:
      'Nosso modelo aviador que faz até animal marinho querer voar. Confortavel para todas as horas',
    imageUrl:
      'https://image-tool.eotica.com.br/?d=eo&w={width}&q=75&f=catalog/product/c/a/carrera_2002t_v___tartaruga___2ik_51_0.jpg',
    formatId: 3,
    materialId: 1,
    colorId: 1,
    createdAt: '2021-07-27T16:48:19.000Z',
    updatedAt: '2021-07-27T16:48:19.000Z',
  },
];

export default function HomeCard() {
  //   const [products, setProducts] = useState([]);

  //   try {
  //     fetch('https://no-grau2347.herokuapp.com/products', {
  //       mode: 'no-cors',
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then(setProducts);
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  return (
    <>
      <Box>
        {products.map((product) => (
          <Container>
            <img src={product.imageUrl} alt="Imagem do produto" />
            <Title>{product.name}</Title>
          </Container>
        ))}
      </Box>
    </>
  );
}
