export async function POST(req: Request) {
  const body = await req.json();

  console.log("This what I received:", body);

  return new Response("OK");
}
