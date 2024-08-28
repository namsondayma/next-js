"use client"
import React from 'react'

export default function page(props:any) {
  const {params} = props;

  return (
    <div>
      Trang chi tiết có dự án ID : {params.idProject}
    </div>
  )
}
