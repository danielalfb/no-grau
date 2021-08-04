import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import HomeCarousel from '../components/HomeCarousel';
import MainGrid from '../components/MainGrid';

function Home() {
  return (
    <>
      <MainGrid>
        <HomeCarousel />
      </MainGrid>
      <Footer />
    </>
  );
}

export default Home;
