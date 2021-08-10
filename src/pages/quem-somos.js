import React from 'react';
import MainGrid from '../components/MainGrid';
import SobreBanner from '../components/Sobre';
import banner from '../assets/images/sobre.svg';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: auto;
  margin: 0 0 -130px 0;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 58px;
  letter-spacing: -0.9px;
  color: #000000;
`;

export const Subtitle = styled.p`
  max-width: 792px;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #5e6e89;
`;

const QuemSomos = () => {
  return (
    <div>
      <MainGrid>
        <Box>
          <Title>Um pouquinho de nós</Title>
          <Subtitle>
            Somos uma marca que respeita nossos clientes e sua encantadora
            individualidade. Muito se diz sobre : modelo de armação x formato de
            rosto. Não concordamos com padrões impostos. Acreditamos que o bem
            estar é o primordial. E cada um sabe o match perfeito entre você e
            seu óculos.
          </Subtitle>
        </Box>
      </MainGrid>

      <SobreBanner image={banner} />
    </div>
  );
};

export default QuemSomos;
