import './App.css';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Navi />
      <Homepage />
    </div>
  );
}

export default App;
