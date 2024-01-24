import { NextRequest, NextResponse } from "next/server"
export async function GET() {
  return NextResponse.json({
    response: 'This is root route',
  });
}