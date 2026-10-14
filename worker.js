// Cloudflare Worker (gratis): sigue la redireccion de un link corto de Maps y devuelve la URL larga.
export default {
  async fetch(req) {
    const h = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
    try {
      let cur = new URL(new URL(req.url).searchParams.get('u'));
      for (let i = 0; i < 6; i++) {
        if (!/^(maps\.app\.goo\.gl|goo\.gl|g\.co|(www\.)?google\.[a-z.]+)$/.test(cur.hostname)) break;
        const r = await fetch(cur, { redirect: 'manual', headers: { 'User-Agent': 'Mozilla/5.0' } });
        const loc = r.headers.get('Location');
        if (!loc) break;
        cur = new URL(loc, cur);
        if (/0x[0-9a-f]+:0x[0-9a-f]+/i.test(cur.href)) break;
      }
      return new Response(JSON.stringify({ url: cur.href }), { headers: h });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 400, headers: h });
    }
  }
};
