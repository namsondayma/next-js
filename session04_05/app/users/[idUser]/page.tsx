'use client'
import React from 'react'
/*
trong next Js chia làm 
  1.client component
  2.server component
*/


export default function UserDetail(props:any) {
  console.log("giá trị props",props);
  const {params} = props;

  
  return (
    <div>USER ID :{params.idUser}

      
    </div>
  )
}
