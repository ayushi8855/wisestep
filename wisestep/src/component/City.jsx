import React, { useEffect, useState } from 'react'

export const City = () => {
  const [data,setdata]=useState([])
  
  
  
  useEffect(()=>
  {
    getdata()
  },[])
  
    const getdata=async ()=>{
      let res = await fetch("http://localhost:3004/data")
      let data = await res.json()
      setdata(data)
  console.log(data)
    }


  return (
   


    <>
    <h1>Select Your City And State</h1>
   
      <div style={{display:"flex",margin:"auto",width:"20%",justifyContent:'space-around'}}>
      
      <div  >
    
      <select name="state" id="">
      {data.map((e)=>(
          <option>
       {e.admin_name}
          </option>
      ))}
        </select>
      </div>
      <div>
      <select name="city" id="">
      {data.map((e)=>(
          <option>
       {e.city}
          </option>
      ))}
        </select>
      </div>
      
      
    </div>
   
   
    <button>confirm</button>
    </>
    
  )
}
