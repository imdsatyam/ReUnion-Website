import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Challages from './Components/Challanges';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Challages />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
