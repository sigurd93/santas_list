import React, { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import "../App.css";
import "./RequestComponent.js";



const SearchView = (props) => {
    
    // State variable for input text
    const [searchInput, setSearchInput] = useState()
    
    
    const handleInput = (e) => {
        console.log("Input onChange triggered")
        setSearchInput(e.value)
    }
    
    
    
    useEffect(() => {
        console.log("Search View Props:")
        console.log(props)
    }, [props])
    
    
    
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
                    {
                        props.companies.map(company => 
                        <SearchItem 
                            key={company.id} 
                            id={company.id}
                            orgNr={company.data.OrgNr} 
                            name={company.data.Name} 
                        /> )
                    }
                </div>
            </div>            
        </div>
    )
}

export default SearchView









