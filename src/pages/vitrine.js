import React from 'react';
import VitrineBanner from '../components/Banner/index.js';
import VitrineCards from '../components/VitrineCards';
import TitleSubtitleCenter from '../components/TitleSubtitle';

function Vitrine() {
  return (
    <div>
      <TitleSubtitleCenter
        title="Todos os produtos"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
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
