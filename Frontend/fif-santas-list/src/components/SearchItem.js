import React, { useEffect } from 'react'



const SearchItem = (props) => {
    
    
    
    
    useEffect(() => {
        console.log("Search Item: ")
        console.log(props)
    }, [props])
    
    
    return (
        <div className='SearchItem'>
            <div className='SearchItemNameContainer'>
                <h3>{props.name}</h3>
            </div>
            <div className='SearchItemOrgNrContainer'>
                <h3>OrgNr: {props.orgNr}</h3>
            </div>
        </div>
    )
}

export default SearchItem









