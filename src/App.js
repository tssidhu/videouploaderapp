import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload your file
        </p>
        <input type="file" accept="video/*" capture="environment" />
      </header>
    </div>
  );
}

export default App;
