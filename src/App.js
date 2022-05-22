import './App.css';
import Noise from './sketches/Noise';
import Cat from './sketches/Cat';
import Design from './sketches/Design';

function App() {
  const project = window.location.pathname;
  return (
    <div className="App">
      <header className="App-header">
          <Cat />
          <Design />
          <Noise />
      </header>
    </div>
  );
}

export default App;
