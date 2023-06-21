import React, { useState } from 'react';
import './App.css';

const Card = ({ value, onClick }) => (
  <button className="card" onClick={onClick}>
    {value}
  </button>
);

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [revealCards, setRevealCards] = useState(false);

  const handleCardClick = (value) => {
    setSelectedCard(value);
    setRevealCards(true);
  };

  const handleReset = () => {
    setSelectedCard(null);
    setRevealCards(false);
  };

  return (
    <div className="App">
      <h1>weltenbauer. Planning Poker Yeah!</h1>
      <div className="card-container">
        <Card value="0" onClick={() => handleCardClick(0)} />
        <Card value="1" onClick={() => handleCardClick(1)} />
        <Card value="2" onClick={() => handleCardClick(2)} />
        <Card value="3" onClick={() => handleCardClick(3)} />
        <Card value="5" onClick={() => handleCardClick(5)} />
        <Card value="8" onClick={() => handleCardClick(8)} />
        <Card value="13" onClick={() => handleCardClick(13)} />
        <Card value="?" onClick={() => handleCardClick('?')} />
      </div>
      {revealCards && (
        <div className="result">
          <h2 className="selected-card">Selected Card: {selectedCard}</h2>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
