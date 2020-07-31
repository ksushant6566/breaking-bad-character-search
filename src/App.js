import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/charcters/CharacterGrid';
import Header from './components/ui/Header'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(()=> {
    const getCharacters = async ()=> {
      const result = await axios('https://www.breakingbadapi.com/api/characters')
      console.log(result.data)
      
      setItems(result.data)
      setIsLoading(false)
    }
    getCharacters()
  },[]);

  return (
    <div className="App">
    <Header />
    <CharacterGrid items = {items} isLoading ={isLoading} />
    </div>
  );
}

export default App;
