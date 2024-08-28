import { log } from 'console';
import React from 'react'

export default function Post(props:any) {
    const {params}= props;
    const post =
    [
        {
            content: "hoc nextjs",
            idPost: 135,
            idUser:1,
        },
        {
            content: "hoc lap trinh",
            idPost: 155,
            idUser:2,
        }
        
    ]
    let postFilter= post.filter((item)=>{
        return item.idPost==params.idPost
    })
    console.log("postfilter",postFilter);
    
  return (
    <div>
     Bai7  Danh sách của UserId: {params.idPost}
      {
        postFilter.map((item)=>{
            return <li key={item.idPost}>{item.content}</li>
        })
      }
    </div>
  )
}
