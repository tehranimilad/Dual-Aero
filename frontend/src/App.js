import './App.css';
import Homepage from './pages/home/Homepage';
import About from './pages/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Navi />
      <div id="home">
      <Homepage />
      </div>
      <div id="about">
      <About />
      </div>
    </div>
  );
}

export default App;
