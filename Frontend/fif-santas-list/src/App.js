import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import SearchView from './components/SearchView';
import SearchItem from './components/SearchItem';
import CompanyView from './components/CompanyView';





function App() {
  
  // Local data variable with data from MongoDB

    
    const [data, setData] = useState()
    // State variable for input text
    const [searchInput, setSearchInput] = useState()
    // State variable for managing displayed view
    const [selectedView, setSelectedView] = useState("company")
    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        axios.get('http://localhost:3001/')
            .then(res => {
                const company = res.data;
                setData({company});
                const test = JSON.parse(company)
                console.log(test);
            } )
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
  
  
  const [tempEventData, setTempEventData] = useState(
    [
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "12345",
              "StudentOrg": "Beta",
              "Dato": "10/3/2022",
              "Contact": {
                  "name": "Bølle Bøllesen"
              },
              "Mark": [
                  {
                  "Severity": "5",
                  "Comment": "Did heftig Bølling"
              }
          ],
              "Rating": 3,
              "Comment": "ikke very nice",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "123",
              "StudentOrg": "Beta",
              "Dato": "12/5/2022",
              "Contact": {
                  "name": "Frode Fjøsnisse"
              },
              "Mark": [
              {
                  "Severity": "1",
                  "Comment": "Lukta fjøs"
              }
          ],
              "Rating": 4,
              "Comment": "Very nice",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "123",
              "StudentOrg": "Beta",
              "Dato": "23/1/2022",
              "Contact": {
                  "name": "Frode Fjøsnisse"
              },
              "Mark": [
          ],
              "Rating": 5,
              "Comment": "Very nice",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "12345",
              "StudentOrg": "Beta",
              "Dato": "2/3/2022",
              "Contact": {
                  "name": "Birger Basketak"
              },
              "Mark": [
              {
                  "Severity": "3",
                  "Comment": "Betalte for sent"
              }
          ],
              "Rating": 4,
              "Comment": "Bra faglig opplegg",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "1234",
              "StudentOrg": "Beta",
              "Dato": "14/3/2022",
              "Contact": {
                  "name": "Torvaldsen Svingen"
              },
              "Mark": [
          ],
              "Rating": 5,
              "Comment": "Very nice",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "1",
              "StudentOrg": "Beta",
              "Dato": "13/4/2022",
              "Contact": {
                  "name": "Fredrik Fredspipe"
              },
              "Mark": [
  
          ],
              "Rating": 3,
              "Comment": "Litt lite faglig relevant",
              "Type": "Bedpress"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "12",
              "StudentOrg": "Beta",
              "Dato": "9/1/2022",
              "Contact": {
                  "name": "Clippy"
              },
              "Mark": [
  
          ],
              "Rating": 5,
              "Comment": "Nå kan jeg endelig bruke word",
              "Type": "Kurs"
      
          }
      },
      {
          "packet_type": "event",
          "data": {
              "OrgNr": "12",
              "StudentOrg": "Beta",
              "Dato": "10/3/2022",
              "Contact": {
                  "name": "Billiam Porter"
              },
              "Mark": [
          ],
              "Rating": 3,
              "Comment": "Ble mye vindusnakk",
              "Type": "Sosialt Arrangement"
          }
      },
    ]
  )
  
  const [tempCompanyData, setTempCompanyData] = useState(
    [
      {
        "packet_type": "company",
        "id": 1,
        "data": {
            "Name": "Bølle Consultants",
            "OrgNr": "12345"
      }
      },
      {
        "packet_type": "company",
        "id": 2,
        "data": {
            "Name": "Linus Media Group",
            "OrgNr": "1234"
        }
      },
      {
        "packet_type": "company",
        "id": 3,
        "data": {
            "Name": "Tv2",
            "OrgNr": "123"
        }
      },
      {
        "packet_type": "company",
        "id": 4,
        "data": {
            "Name": "Mikromyk",
            "OrgNr": "12"
        }
      },
      {
        "packet_type": "company",
        "id": 5,
        "data": {
            "Name": "Grimstad Skorstein Fabrikk",
            "OrgNr": "1"
        }
      }
    ]
  )
  
  
  
  
  
  const searchUpdate = () => {
    console.log("Function: searchUpdate()")
  }
  
  
  const SwitchView = () => {
    switch(selectedView) {
      case "company":
        console.log("Switching to company view")
        return (
          <CompanyView return={ReturnToSearch} />
        )
      default:
        console.log("Switching to search view")
        return (
          <SearchView companies={data} />
        )
    }
  }
  
  
  const ReturnToSearch = () => {
    setSelectedView()
  }
  
  
  
  
  
  return (
    <div className="App">
        {SwitchView()}
    </div>
  );
  
}




export default App;
