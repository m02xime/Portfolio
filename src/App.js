import './App.css';
import './components/Nav.css';
import './components/Footer.css';
import './components/Project.css';
import { Helmet } from 'react-helmet'
import Home from './components/pages/Home';
import NotFound from './components/pages/404';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from "./components/ParticleBackground";
import { BrowserRouter as Router, Route , Switch  } from 'react-router-dom';
import Cursor from './components/Cursor';
function App() {

  return (
    <Router>
      <Helmet>
          <title>Maxime-KB</title>
        </Helmet>
      <Cursor />
      <ScrollToTop />
      <Navbar />
      <div className="App">
        <header className="App-header">
          <ParticleBackground className="Particlesbacground" />
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route path="/Contact" exact component={Contact}></Route>
          <Route exact component={NotFound} />
          </Switch>
        </header>
        <Footer />
      </div>

    </Router>


  );
}

export default App;
