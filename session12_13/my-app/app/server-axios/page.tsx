import React from 'react'
import axios from 'axios'
 

async function getData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data
    
}
getData();
export default async function page() {
    const users=await getData();
  return (
    <div>
        Tìm nạp dữ liệu server bằng axios
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
      
    </div>
  )
}
