import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  h1 {
    font-size: 2.5em;
  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [starWarsData, setStarWarsData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        // console.log(res.data)
        setStarWarsData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <StyledApp className="App">
      <h1 className="Header">StarWars Characters API</h1>
      {
        starWarsData.map((chara, index) => {
          return <Character key = {index} info={chara} />
        })
      }
    </StyledApp>
  );
}

export default App;
