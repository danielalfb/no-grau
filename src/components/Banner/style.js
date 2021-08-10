import styled from 'styled-components';

export const Banner = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 10px auto;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// pendência: o footer está sobrepondo a imagem e a resolução está ruim
