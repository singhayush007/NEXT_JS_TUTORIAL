import { NextRequest, NextResponse } from "next/server";

// GET RESQUEST
export async function GET() {
  return NextResponse.json({
    name: "Ayush",
    age: 22,
  });
}

// POST REQUEST

export async function POST(request: NextRequest) {
  let { name, age } = await request.json();
  return NextResponse.json({
    name,
    age,
  });
}



