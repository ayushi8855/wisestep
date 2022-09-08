import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
export const Onecity = () => {
    const {id} = useParams()
    
  const [detail,setdetail] = useState([])
  console.log(detail)

  useEffect(()=>
  {
   getdetail() 
  },[])
  const getdetail = async ()=>
  {
    console.log("nnn" ,id)
   let res = await fetch(`http://localhost:3004/city/${id}`)
   let data = await res.json()
  
   setdetail(data.outlet)
   console.log("ooooo",detail)
  }
  return (
    <div>
        <Flex justifyContent="space-around">
        {detail.map((e)=>(

<Box>
<Text fontSize="3xl">{e.title}</Text>
<Text>{e.scoty}</Text>
<Text>Availability    {e.total_v}</Text>
</Box>
))}
        </Flex>
       
        
    </div>
  )
}
