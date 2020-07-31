import React, { useState, useEffect } from 'react'
import Character from './Character'

const CharacterGrid = ({items, isLoading}) => {
    
    const [searchedItem, setSearchedItem] = useState('')
    const [chars, setChars] = useState([]);

    useEffect( () =>{
        setChars(items)
        console.log("set");
    },[isLoading]) 

    const filter = (e)=> {
        e.preventDefault();
        
        if(searchedItem === '') {
            setChars(items);
            return;
        }

        const newChars = items.filter((item ) => {return item.name === searchedItem})
        setChars(newChars);
    }

    const onChange = (e)=> {
        setSearchedItem(e.target.value)
    }
    
    return isLoading ? <h1>Loading...</h1> : 
    
    <div>
        <form className="searchBox">
            <input onChange={onChange}  type="text" value={searchedItem}></input>
            <button  onClick={filter}>Search</button>
        </form>
        <section className="cards">
            {chars.map(item => (
                <Character item = {item} key={item.char_id} />
            ))}
        </section>

    </div>
}

export default CharacterGrid