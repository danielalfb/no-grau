import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import QuemSomos from './pages/quem-somos';
import Vitrine from './pages/vitrine';
import Filtro from './pages/filtro';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quem-somos" exact component={QuemSomos} />
          <Route path="/vitrine" exact component={Vitrine} />
          <Route path="/filtro" exact component={Filtro} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
