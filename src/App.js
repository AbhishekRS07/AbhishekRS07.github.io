import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import  Projects  from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import  About  from "./components/About";
import  Github  from "./components/Github";
import TechStacks from './components/TechStacks';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Skills />
      <TechStacks/>
      <Projects/>
      <Github/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
