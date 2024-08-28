//cấu hình các method (GET,POST,PATCH,DELETE)

import { NextResponse } from "next/server";
let users=[
    {
        id:1,
        name:"hoa",
        address:"HN"
    },
    {
        id:2,
        name:"hoa",
        address:"HN"
    },
    {
        id:3,
        name:"hoa",
        address:"HN"
    },


]
export async function GET (){
    return NextResponse.json(users);


}