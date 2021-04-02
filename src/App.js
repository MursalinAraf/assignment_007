import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import MainImage from './components/MainImage/MainImage'
import Home from './components/Home/Home';
import Slider from '../src/components/Slider/Slider'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainImage />
      <Slider />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
