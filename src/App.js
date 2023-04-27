import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Card />
      </header>
    </div>
  );
}

export default App;
