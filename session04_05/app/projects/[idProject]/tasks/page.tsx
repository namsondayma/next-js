import { log } from 'console';
import React from 'react'

export default function Task(props:any) {
    const {params}= props;
    const task =
    [
        {
            content: "hoc nextjs",
            idTask: 135,
            idProject:1,
        },
        {
            content: "hoc lap trinh",
            idTask: 155,
            idProject:2,
        }
        
    ]
    let taskFilter= task.filter((item)=>{
        return item.idProject==params.idProject
    })
    console.log("taskfilter",taskFilter);
    
  return (
    <div>
      Bai8 Danh sach co nhiem vu co du an Id: {params.idProject}
      {
        taskFilter.map((item)=>{
            return <li key={item.idTask}>{item.idTask}</li>
        })
      }
    </div>
  )
}
