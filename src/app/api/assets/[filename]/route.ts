import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('File not found', { status: 404 });
}
