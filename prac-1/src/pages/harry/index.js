import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Harry = () => {
    const [resp, setResp] = useState([])
    const [searchInput, setSearchInput] = useState(" ")
    const [filteredData,setFilteredData] = useState([])



    
    useEffect(() => {
        const filtered = filteredData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setResp(filtered)
      }, [searchInput]);
    const getData = async() => {
      const result = await axios.get('http://hp-api.herokuapp.com/api/characters')
        setResp(result.data)
        setFilteredData(result.data)

    }
    useEffect(()=> getData(),[])
    return(
        <div>
            <input placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {resp.map((resp, index)=>{
            return(
                <div style={{border:'2px solid grey', padding:'10px', margin:'10px', width:'25%', height:'600px'}} key={index}>
                    <h1>{resp.name}</h1>
                    <img src={resp.image} width='200px' height='200px'/>
                    <h2>{resp.gender}</h2>
                    <h2>{resp.house}</h2>
                    <h2>{resp.yearOfBirth}</h2>
                    <h2>{resp.species}</h2>
                </div>
            )
        })}
        </div>
        </div>
    )
}