import './App.css';
import Wheel from './containers/main';
import configData from "./config.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{configData.TITLE}</h1>
        <Wheel />
      </header>
    </div>
  );
}

export default App;
