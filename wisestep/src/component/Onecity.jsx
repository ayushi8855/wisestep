import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
export const Onecity = () => {
    const {id} = useParams()
    
  const [detail,setdetail] = useState([])
  const [city,setcity]=useState([])
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
   setcity(data.name)
   console.log("ooooo",detail)
  }
  return (
    <div>
      <Text fontSize="3xl" >{city}</Text>
        <Flex justifyContent="space-around">
        {detail.map((e)=>(

<Box border="3px solid blue" w="15%" bg="#F1F1F1">
<Text fontSize="3xl">{e.title}</Text>
<Text>{e.scoty}</Text>
<Text>Availability    {e.total_v}</Text>
<Button bg="#3CCF4E" disabled={e.total_v<=0 ? true: false} >Book Your SCOOTY</Button>
</Box>
))}
   
        </Flex>
       
        
    </div>
  )
}
