import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card"; 
let cards = require("./cards.json"); // import JSON file
function App() {
  let cardsArray = cards.map((card) => {
    return([
      <Card 
        key = {card.key} 
        title = {card.title} 
        img = {card.img} 
        altImg = {card.altImg} 
        stats = {card.stats} 
        price = {card.price} 
        location = {card.location}
        openSpots = {card.openSpots}
      />
    ]) 
  })

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <div className="cardSlider">
          {cardsArray}
        </div>
      </header>
    </div>
  )
}

export default App;
