Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const targetUrl = new URL(url.pathname + url.search, "https://yewzcobizrsyfwntlemk.supabase.co");

  const newRequest = new Request(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.method !== "GET" && req.method !== "HEAD" ? req.body : null,
    redirect: "follow"
  });

  const response = await fetch(newRequest);
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("Access-Control-Allow-Origin", "*");
  return newResponse;
});
