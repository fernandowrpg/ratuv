// Gera os ícones PNG do app sem dependências:  node tools/make-icons.js
const fs = require('fs'), path = require('path'), zlib = require('zlib');

const crcTable = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
const crc = buf => { let c = 0xffffffff; for (const b of buf) c = crcTable[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const sum = Buffer.alloc(4); sum.writeUInt32BE(crc(body));
  return Buffer.concat([len, body, sum]);
}
function png(size, rgba) {
  const head = Buffer.alloc(13); head.writeUInt32BE(size, 0); head.writeUInt32BE(size, 4); head[8] = 8; head[9] = 6;
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', head), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const heart = (x, y) => { const a = x * x + y * y - 1; return a * a * a - x * x * y * y * y <= 0; };
const crown = [[-0.62, 1.42], [-0.72, 2.2], [-0.33, 1.8], [0, 2.3], [0.33, 1.8], [0.72, 2.2], [0.62, 1.42]];
function inPoly(x, y, p) {
  let inside = false;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [xi, yi] = p[i], [xj, yj] = p[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// zoom: quanto do desenho cabe no quadro; round: cantos arredondados transparentes
function draw(size, zoom, round) {
  const out = Buffer.alloc(size * size * 4), ss = 4, r = size * 0.22;
  for (let py = 0; py < size; py++) for (let px = 0; px < size; px++) {
    let acc = [0, 0, 0, 0];
    for (let sy = 0; sy < ss; sy++) for (let sx = 0; sx < ss; sx++) {
      const u = (px + (sx + 0.5) / ss) / size, v = (py + (sy + 0.5) / ss) / size;
      let alpha = 1;
      if (round) {
        const cx = Math.max(r, Math.min(size - r, u * size)), cy = Math.max(r, Math.min(size - r, v * size));
        if (Math.hypot(u * size - cx, v * size - cy) > r) alpha = 0;
      }
      const x = (u - 0.5) * zoom, y = (0.5 - v) * zoom + 0.42;
      const glow = Math.max(0, 1 - Math.hypot(u - 0.5, v - 0.42) * 1.9);
      let c = mix([23, 16, 28], [74, 30, 62], glow);
      if (heart(x, y)) c = mix([255, 150, 184], [222, 66, 122], Math.min(1, Math.max(0, (1.25 - y) / 2.2)));
      else if (inPoly(x, y, crown)) c = mix([255, 226, 150], [222, 176, 92], Math.min(1, Math.max(0, (2.3 - y) / 0.9)));
      acc = [acc[0] + c[0] * alpha, acc[1] + c[1] * alpha, acc[2] + c[2] * alpha, acc[3] + alpha];
    }
    const i = (py * size + px) * 4, a = acc[3] || 1;
    out[i] = acc[0] / a; out[i + 1] = acc[1] / a; out[i + 2] = acc[2] / a; out[i + 3] = acc[3] / (ss * ss) * 255;
  }
  return png(size, out);
}

const dir = path.join(__dirname, '..', 'icons');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'icon-192.png'), draw(192, 4.6, true));
fs.writeFileSync(path.join(dir, 'icon-512.png'), draw(512, 4.6, true));
fs.writeFileSync(path.join(dir, 'maskable-512.png'), draw(512, 6.2, false));
console.log('Ícones gerados em', dir);
