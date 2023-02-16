import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Jobs } from './components/Jobs';
import { About } from './components/About';
import { Projects } from './components/Projects';

import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Jobs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
