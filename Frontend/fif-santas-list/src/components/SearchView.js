import React, { useState } from 'react';
import "../App.css";
import "./RequestComponent.js";



const SearchView = () => {
    
    // State variable for input text
    const [searchInput, setSearchInput] = useState()
    
    
    const handleInput = (e) => {
        console.log("Input onChange triggered")
        setSearchInput(e.value)

      }
    
    
    
    return (
        <div className='MainContainer'>
            <div className='HeaderContainer'>
                <h1>FIF - Santas List</h1>
            </div>
            <div className='SearchView'>
                <div className='SearchInputContainer'>
                    <input className='SearchInput' type="text" value={searchInput} onChange={handleInput} placeholder="Search..."></input>
                </div>
                
                <div className='SearchListContainer'>
                    <p>TEMP</p>
                </div>
            </div>            
        </div>
    )
}

export default SearchView









