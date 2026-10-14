# Review Link Maker

Genera el link de reseña de Google Maps (`https://search.google.com/local/writereview?placeid=...`) sin API key y sin costo. Pensado para celular.

## Uso en el celular
1. Abrí el negocio en la app de Google Maps y tocá **Compartir → Copiar enlace**.
2. Abrí la web y tocá **Pegar y generar**. El link de reseña queda copiado.

**Android, aún más rápido:** instalá la web como app (botón "Instalar"). Después aparece en el menú *Compartir* de Google Maps: compartís el negocio y el link se genera solo.

## Resolver de links cortos (una sola vez, gratis)
La app de Maps comparte links cortos `maps.app.goo.gl`. Para leerlos hace falta un mini servicio:
1. Creá una cuenta gratis en <https://dash.cloudflare.com> → Workers & Pages → Create → Worker.
2. Pegá el contenido de `worker.js` y publicá (Deploy).
3. Copiá la URL del worker (`https://xxx.workers.dev`) y pegala en **Ajustes** de la web.

Con la URL larga de Maps (desde el navegador de escritorio) no hace falta el worker.
