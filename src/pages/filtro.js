import React from 'react';
import Filter from '../components/Filter';
import styled, { createGlobalStyle } from 'styled-components';
import MainGrid from '../components/MainGrid';

const GlobalStyle = createGlobalStyle`
 
  body {
    background-color: #f4f4f4;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Filtro = () => {
  return (
    <>
      <GlobalStyle />
      <MainGrid>
        <Container>
          <Filter />
        </Container>
      </MainGrid>
    </>
  );
};

export default Filtro;
