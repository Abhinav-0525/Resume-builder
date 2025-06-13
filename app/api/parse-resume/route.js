import { NextRequest } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!(file instanceof Blob)) {
    return new Response(JSON.stringify({ error: "Invalid file" }), { status: 400 });
  }

  const affindaForm = new FormData();
  affindaForm.append("file", file);
//   Optional: specify workspace
  affindaForm.append("workspace", "HQTBgfjN");

  const response = await fetch("https://api.affinda.com/v2/documents", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: affindaForm,
  });

  const data = await response.json();
  console.log(data);

  const identifier = data.identifier;

  if (!identifier) {
    return new Response(JSON.stringify({ error: "Failed to get identifier" }), { status: 500 });
  }

  let parsedData = null;
  const maxTries = 5;
  for (let i = 0; i < maxTries; i++) {
    const docRes = await fetch(`https://api.affinda.com/v2/documents/${identifier}`, {
        method:"GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    const docJson = await docRes.json();

    if (docJson?.ready) {
      parsedData = docJson.data;
      break;
    }

    await new Promise((res) => setTimeout(res, 4000));
  }

  if (!parsedData) {
    return new Response(
      JSON.stringify({ error: "Document not ready. Try again later." }),
      { status: 202 }
    );
  }
  console.log(parsedData);
  
  return new Response(JSON.stringify(parsedData));
}
