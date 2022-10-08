import React, { useState } from 'react';
import './App.css';

import SearchView from './components/SearchView';
import SearchItem from './components/SearchItem';
import CompanyView from './components/CompanyView';
import { BsFillHandIndexFill } from 'react-icons/bs';




function App() {
  
  // Local data variable with data from MongoDB
  const [data, setData] = useState()
  // State variable for managing displayed view
  const [selectedView, setSelectedView] = useState()
  // temporary storage variable for company ID
  const [companyID, setcompanyID] = useState()
  
  
  // Temporary data until database is up and running
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
  
  // temporary data until database is up and running
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
  
  
  
  
  const DisplayCompany = (id) => {
    setcompanyID(id)
    setSelectedView("company")
  }
  
  
  
  const searchUpdate = () => {
    // Search functionality should be created through a separate filter component
    // Existing search packages might be available through node modules
    console.log("Function: searchUpdate()")
  }
  
  // Switch case for displaying search view or company info
  const SwitchView = () => {
    switch(selectedView) {
      case "company":
        console.log("Switching to company view")
        return (
          <CompanyView return={ReturnToSearch} companyInfo={tempCompanyData.filter(company => company.id == companyID)} />
        )
      default:
        console.log("Switching to search view")
        return (
          <SearchView companies={tempCompanyData} displayCompany={DisplayCompany} />
        )
    }
  }
  
  // Function for returning to search from company info.
  // Alternative would be to change the header to a navbar with corrensponding view buttons
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
