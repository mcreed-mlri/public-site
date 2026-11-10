// Tiny local preview server (no dependencies).
// Run: node scripts/serve.mjs   then open http://localhost:8788
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, normalize, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = normalize(fileURLToPath(new URL("..", import.meta.url)));
const PORT = Number(process.env.PORT) || 8788;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (p.endsWith("/")) p += "index.html";
    const file = normalize(join(ROOT, p));
    // Stay inside the site folder, and never serve dotfiles such as .git.
    if (!file.startsWith(ROOT) || /(^|[\\/])\./.test(file.slice(ROOT.length))) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    if ((await stat(file)).isDirectory()) throw new Error("directory");
    res.writeHead(200, {
      "Content-Type": TYPES[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(PORT, "127.0.0.1", () => console.log(`Public site preview: http://localhost:${PORT}`));
