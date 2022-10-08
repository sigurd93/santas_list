import React, { useState } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs'
import "../App.css";



const CompanyView = (props) => {
    
    
    
    
    
    return (
        <div className='MainContainer'>
            <div className='HeaderContainer'>
            <h1>FIF - Santas List</h1>
            <div className='CustomReturnButton' onClick={props.return}>
                <BsArrow90DegLeft size="1.5em"  />
            </div>
            </div>
            
            <div className='CompanyView'>
                <div className='CompanyInfoContainer'>
                    <p>Company Name</p>
                    <p>Average Rating</p>
                    <p>Antall Anmerkninger</p>
                </div>
                
                <h2>Hendelser:</h2>
                
                <div className='CompanyEventListContainer'>
                    <p>TEMP</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyView









