import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {


//   const secretKey = process.env.DATABASE_URL || 'No secret key found';
  const secretKey =  'test';
  return new Response(JSON.stringify({ message: `Using secret key: ${secretKey}` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
