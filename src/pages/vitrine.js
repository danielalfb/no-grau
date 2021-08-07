import React from 'react';
import VitrineBanner from '../components/Banner/index.js';
import VitrineCards from '../components/VitrineCards';
import { Subtitle, Title } from '../components/VitrineStyle';

function Vitrine() {
  return (
    <div>
      <Title>Todos os produtos</Title>
      <br />
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Subtitle>
      <div>
        <VitrineCards />
      </div>
      <div>
        <VitrineBanner />
      </div>
    </div>
  );
}

export default Vitrine;
