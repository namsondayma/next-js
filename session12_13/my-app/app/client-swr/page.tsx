"use client"

import useSWR from 'swr'
import axios from 'axios'

//viết hàm đi lấy Data
const getData=(url:string)=>
    axios.get(url)
    .then((res)=>
       res.data
    );

export default function Page() {
    const { data,error }= useSWR (
        "https://jsonplaceholder.typicode.com/users",
        getData
    );

    if(error) return <div>quá trình lấy dữ liệu thất bại</div>;
    if(!data) return <div>...đang tải dữ liệu </div>;


  return (
    <div>Fetching Data với thư viện swr
        {data.map((item:any)=>(
            <p key={item.id}>{item.name}</p>
        ))}
    </div>
  )
}
