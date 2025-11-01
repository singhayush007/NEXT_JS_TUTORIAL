/*Query parameter  : 

Query Parameter wo data hota hai jo usrl ke end me "?"" ke baaad bheja jaata hai.


like example : http://localhost:3000/api/search?city=paris&price=1000


Here city = key 
paris = value
price : key
1000 : value

Ye URL ke through backend ko data bhejne ka ek safe aur fast tareeka hai (sirf GET request ke liye).
*/

/*
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const price = searchParams.get("price");

  return NextResponse.json({
    message: "Search results fetched successfully!",
    city: "paris",
    price: 1000
  });
}
*/


import { NextRequest, NextResponse } from "next/server";
export async function GET(request:NextRequest) {
    let query = request.nextUrl.searchParams.get("q")
    return NextResponse.json({query})
}


export async function POST(request: NextRequest){
 const body = await request.json();
 const {name , email} = body;

 return NextResponse.json({
    message: "Data Received Successfully",
    name ,
    email ,
 })
}