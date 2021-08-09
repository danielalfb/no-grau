import React from 'react';
import Button from '../components/Button';
import HomeCard from '../components/HomeCards';
import HomeCarousel from '../components/HomeCarousel';
import MainGrid from '../components/MainGrid';
import TitleSubtitleCenter from '../components/TitleSubtitle';

export default function Home() {
  return (
    <>
      <MainGrid>
        <HomeCarousel />
        <TitleSubtitleCenter
          title="Dá só uma olhada!"
          subtitle="Selecionamos com cuidado e amor alguns dos modelos mais queridinhos de todes!"
        />
        <HomeCard />
        <Button link="/home" title="Veja Mais!" />
      </MainGrid>
    </>
  );
}
