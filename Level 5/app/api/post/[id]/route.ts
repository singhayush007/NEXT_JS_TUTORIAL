import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // ❗️Important: await lagao kyunki params Promise hai
  const { id } = await context.params;

  return NextResponse.json({
    postId: id,
    message: `Post ID is ${id}`,
  });
}
