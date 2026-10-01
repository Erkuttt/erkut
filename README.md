# Erkut Altındal – Portföy

React + TypeScript + Vite + Tailwind CSS ile yazılmış kişisel portföy.

## Çalıştırma
```
npm install
npm run dev
```

## Yayına alma (statik site)
`npm run build` komutu `dist/` klasörünü üretir. Bu klasörü Netlify, Vercel, Cloudflare Pages veya GitHub Pages'e yükleyebilirsin (Render ücretsiz planı siteyi uyutur, statik hostlar uyutmaz).
Render'da kalacaksan "Static Site" olarak oluştur: Build command `npm install && npm run build`, Publish directory `dist`.

## Kişiselleştirme
- `src/config.ts`: e-posta, GitHub, LinkedIn, CV ve proje bağlantıları. Boş bırakılan bağlantılar sitede gizlenir.
- İletişim formunun gerçekten e-posta göndermesi için formspree.io'da form oluştur ve adresini `VITE_FORM_ENDPOINT` ortam değişkenine yaz (örn. `.env.local`: `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx`). Tanımlı değilse form, e-posta uygulamasını hazır mesajla açar.
- CV için PDF'i `public/` klasörüne koyup `config.ts` içindeki `cv` alanını doldur.
- Paylaşım kartı için `og:image` eklemek istersen 1200x630 bir PNG'yi `public/og.png` olarak koy ve `index.html`'e `<meta property="og:image" content="https://SITEN/og.png" />` ekle.

## Demolar
- **Atmosphere Weather**: Open-Meteo API'sinden canlı veri çeker.
- **Öğrenci Sistemi / Kütüphane**: Arayüz prototipleri (gerçek veritabanı yok).
- **Neon Space Shooter**: Canvas ile yazılmış tarayıcı oyunu.
