import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { prompt } = params;
  console.log(
    `http://api.wolframalpha.com/v1/conversation.jsp?appid=36XE94-3GX5KV7YAA&i=${prompt}`
  );
  const response = await fetch(
    `http://api.wolframalpha.com/v1/conversation.jsp?appid=36XE94-3GX5KV7YAA&i=${prompt}`
  );
  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}

// export async function GET(request, { params }) {
//   const { prompt } = params;
//   console.log(
//     `http://api.wolframalpha.com/v1/conversation.jsp?appid=36XE94-3GX5KV7YAA&i=${prompt}`
//   );
//   const response = await fetch(
//     `https://www.wolframalpha.com/api/v1/llm-api?appid=36XE94-3GX5KV7YAA&input=${prompt}`
//   );
//   const data = await response.json();
//   return NextResponse.json(data, { status: 200 });
// }
