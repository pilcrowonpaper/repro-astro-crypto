import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      "crypto.getRandomValues": !!crypto.getRandomValues,
      "crypto.randomUUID": !!crypto.randomUUID,
      "crypto.subtle": !!crypto.subtle,
    }, null, 2)
  );
};
