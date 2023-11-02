import './App.css';
import Homepage from './pages/home/Homepage';
import About from './pages/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Navi />
      <Homepage />
      <About />
    </div>
  );
}

export default App;
