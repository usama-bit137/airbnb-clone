import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"; 
import swimmer from "./katie.jpg"
import wedding from "./wedding.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <div className="cardSlider">
          <Card 
            title = "Life Lessons with Katie Zaferes"
            img = {swimmer}
            altImg = "swimmer"
            rating = "5.0"
            raters = "6"
            price = "$136"
            location = "USA"
          />

          <Card 
            title = "Wedding Fair with Jim-Bob Sherman"
            img = {wedding}
            altImg = "newly weds"
            rating = "4.9"
            raters = "10"
            price = "$156"
            location = "USA"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
