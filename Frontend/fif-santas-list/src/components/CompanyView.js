import React, { useState, useEffect } from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs'
import "../App.css";



const CompanyView = (props) => {
    
    
    
    
    /*
    useEffect(() => {
        console.log("Company View: ")
        console.log(props)
    }, [props])
    */
    
    
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
                    
                    <div className='CompanyNameAndOrgNr'>
                        <div className='CompanyInfoNameContainer'>
                            <h2 className='CompanyName'>{props.companyInfo[0].data.Name}</h2>
                        </div>
                        <div className='CompanyInfoOrgNrContainer'>
                            <h3>OrgNr: {props.companyInfo[0].data.OrgNr}</h3>
                        </div>
                    </div>
                    
                    <p>Rating: 2/5</p>
                    <p>Antall Anmerkninger: {12}</p>
                </div>
                
                <h2>Hendelser:</h2>
                
                <div className='CompanyEventListContainer'>
                    <div>
                        <h5>NOT IMPLEMENTED...</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyView









