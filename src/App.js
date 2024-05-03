import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Navbar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Connect} from './components/Connect';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills/>
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
