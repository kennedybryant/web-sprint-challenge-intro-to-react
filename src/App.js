import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Card from './components/Card';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [starWarsData, setStarWarsData] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState()

  const openCard = name => {
    setCurrentCharacter(name)
  }

  const closeCard = () => {
    setCurrentCharacter(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data)
        setStarWarsData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        starWarsData.map(chara => {
          return <Character key = {chara.name} data={chara} action={openCard}/>
        })
      }
      {
        currentCharacter && <Card charaName={currentCharacter} close={closeCard} />
      }
    </div>
  );
}

export default App;
