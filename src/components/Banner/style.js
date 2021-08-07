import styled from 'styled-components';

export const Banner = styled.div`
img {
display: block; 
margin-left: auto; 
margin-right: auto;
}

@media screen and (max-width: 768px) {
  display: none;
  }
`;

// pendência: o footer está sobrepondo a imagem e a resolução está ruim