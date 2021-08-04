import React from 'react';
import Footer from '../components/Footer';
import HomeCarousel from '../components/HomeCarousel';
import MainGrid from '../components/MainGrid';
import TitleSubtitleCenter from '../components/TitleSubtitle';

export default function Home() {
  return (
    <>
      <MainGrid>
        <HomeCarousel />;
        <TitleSubtitleCenter
          title="Dá só uma olhada!"
          subtitle="Selecionamos com cuidado e amor alguns dos modelos mais queridinhos de todes!"
        />
      </MainGrid>
      <Footer />
    </>
  );
}
