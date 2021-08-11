import React from 'react';
import VitrineBanner from '../components/Banner/index.js';
import VitrineCards from '../components/VitrineCards';
import TitleSubtitleCenter from '../components/TitleSubtitle';
import banner from '../assets/images/banner.svg';

function Vitrine() {
  return (
    <div>
      <TitleSubtitleCenter
        title="Todos os produtos"
        subtitle="Aqui você encontra a armação ideal .A armação ideal para você é você que escolhe. Nosso lema é usar o que você se sente bem. Quem dita a sua moda aqui é você.  "
      />
      <div>
        <VitrineCards />
      </div>
      <div>
        <VitrineBanner image={banner} />
      </div>
    </div>
  );
}

export default Vitrine;
