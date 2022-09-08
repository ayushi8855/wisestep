// import { Link } from '@chakra-ui/react'
import { Box, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
export const City = () => {
  const [data,setdata]=useState([])
  
  
  
  useEffect(()=>
  {
    getdata()
  },[])
  
    const getdata=async ()=>{
      let res = await fetch("http://localhost:3004/city")
      let data = await res.json()
      setdata(data)
  console.log(data)
    }
  const navigate =useNavigate()
  const selectedCity=(el)=>{
// console.log(e.target.value)
let id =el.target.value
console.log(id)
navigate(`/city/${id}`)
  }

  return (
   


    <Box>
    <Text fontSize="3xl">Select Your City</Text>
    <Select placeholder='Select option' w="40%" m="auto" onChange={(e)=>selectedCity(e)}>
      {data.map((e)=>(
        <option key={e.id} value={e.id}>{e.name}</option>
      ))}
  
  
    </Select>
   
      
   
   
{/* <Link >Go</Link> */}
    </Box>
    
  )
}
// -[ ] city enter —   [ ] outlet —-    -[]scooty   - [] qty
// -[ ]   -city[pune,delhi,sagar,bengaluru]    
//  –[ ] - [p-2, delhi -4 sagar - 0 bengaluru - 10 ]   —- [ p - 5 (activa)   d-2(activa) sagar -0(activa) bengaluru - 12 (activa)]
// -[ ] check availability and assigned a scooty for particular time — [] start time -[] end time 
// -[ ]  checkout by user when use is over
