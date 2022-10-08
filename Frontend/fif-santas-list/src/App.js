import React, { useState } from 'react';
import './App.css';

import SearchView from './components/SearchView';
import SearchItem from './components/SearchItem';
import CompanyView from './components/CompanyView';




function App() {
  
  // Local data variable with data from MongoDB
  const [data, setData] = useState()
  // State variable for input text
  const [searchInput, setSearchInput] = useState()
  // State variable for managing displayed view
  const [selectedView, setSelectedView] = useState()
  
  
  const [tempData, setTempData] = useState( [
    {
      Name: "Mega Consulting",
      OrgNr: 1001
    },
    {
      Name: "Example Industries",
      OrgNr: 1002
    },
    {
      Name: "Groundbreaking Technologies",
      OrgNr: 1003
    },
  ])
  
  
  
  
  const SwitchView = () => {
    switch(selectedView) {
      case "company":
        console.log("Switching to company view")
        return (
          <CompanyView />
        )
      default:
        console.log("Switching to search view")
        return (
          <SearchView />
        )
    }
  }
  
  
  
  
  
  const searchUpdate = () => {
    console.log("Function: searchUpdate()")
  }
  
  
  const handleInput = (e) => {
    console.log("Input onChange triggered")
    setSearchInput(e.value)
  }
  
  
  
  return (
    <div className="App">
        {SwitchView()}
    </div>
  );
  
}




export default App;
