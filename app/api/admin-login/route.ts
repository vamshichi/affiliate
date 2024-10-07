import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  if (
    username === process.env.NEWS_USERNAME &&
    password === process.env.NEWS_PASSWORD
  ) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}