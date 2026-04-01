Te egy senior SEO-specialista és frontend fejlesztő vagy. Az alábbiakban megkapod egy magyar nonprofit alapítvány weboldalának összes HTML fájlját, a sitemap.xml-t és a style.css-t. Végezd el az összes alábbi javítást minden fájlban, majd add vissza a teljes, javított fájlokat egyenként.

---

## GLOBÁLIS CSERE (minden fájlban)

1. Cseréld le az összes "nimble-stroopwafel-a2c104.netlify.app" stringet erre: "www.tartopontalapitvany.hu"
2. Cseréld le az összes "about.html#bank-info" linket erre: "/rolunk#bank-info"
3. Cseréld le az összes "index.html#services" linket erre: "/szolgaltatasaink"
4. Cseréld le az összes "index.html#media" linket erre: "/media"
5. Cseréld le az összes "index.html#support" linket erre: "/tamogatas"
6. Minden footer-ben a telefon és email legyen kattintható link:
   - +36 70 617 8989 → <a href="tel:+36706178989">+36 70 617 8989</a>
   - info@tartopontalapitvany.hu → <a href="mailto:info@tartopontalapitvany.hu">info@tartopontalapitvany.hu</a>
7. Minden fájlban add hozzá a <head>-be: <meta name="theme-color" content="#5DADE2">
8. Minden logo img taghez add: width="60" height="60" (nav logo) vagy width="80" height="80" (footer logo)
9. Minden dekoratív SVG-hez add: aria-hidden="true"
10. Instagram link minden fájlban legyen: https://www.instagram.com/tartopontalapitvany (az igsh paraméter nélkül)

---

## OLDALONKÉNTI JAVÍTÁSOK

### index.html (főoldal)
- <title>: "TartóPont Alapítvány – Komplex Segítség Különleges Családoknak"
- <meta name="description">: "Komplex támogatás fogyatékkal élő, SNI és tartósan beteg gyermeket nevelő budapesti családoknak. Mentálhigiénés segítség, szülőklubok, sorstársi közösség."
- <link rel="canonical">: https://www.tartopontalapitvany.hu/
- og:url: https://www.tartopontalapitvany.hu/
- A <section class="hero"> nyitó tagje után közvetlenül add hozzá:
  <h1 class="visually-hidden">TartóPont Alapítvány – Fogyatékkal Élő és SNI Gyermeket Nevelő Családok Támogatása Budapesten</h1>
- JSON-LD: cseréld a "@type": "Organization" és "LocalBusiness" értékeket erre: "@type": "NGO", add hozzá az email mezőt: "email": "info@tartopontalapitvany.hu", a geo koordinátákat javítsd: "latitude": 47.5627, "longitude": 19.0348
- A hero logo képhez add: width="250" height="250"
- A family-support.jpg képhez add: width="600" height="400" loading="lazy"

### rolunk.html (about.html)
- <title>: "Rólunk | TartóPont Alapítvány – Küldetésünk és Adataink"
- <meta name="description">: "Ismerje meg a TartóPont Alapítvány küldetését, csapatát és hivatalos adatait. Fogyatékkal élő és SNI gyermeket nevelő budapesti családokért dolgozunk."
- <link rel="canonical">: https://www.tartopontalapitvany.hu/rolunk
- og:url: https://www.tartopontalapitvany.hu/rolunk
- JSON-LD: cseréld "@type": "Organization"-t erre: "@type": "NGO", add hozzá: "taxID": "19435699-2-41", "foundingDate": "2026", founder: {"@type":"Person","name":"Kutai Kinga","jobTitle":"Kuratórium Elnöke"}
- BreadcrumbList JSON-LD URL-jeit javítsd az új domainre

### contact.html (kapcsolat.html)
- <title>: "Kapcsolat | TartóPont Alapítvány Budapest – Írjon Nekünk"
- <meta name="description">: "Lépjen kapcsolatba a TartóPont Alapítvánnyal! 1038 Budapest, Gyepes utca 7. Tel: +36 70 617 8989. Email: info@tartopontalapitvany.hu"
- <link rel="canonical">: https://www.tartopontalapitvany.hu/kapcsolat
- og:url: https://www.tartopontalapitvany.hu/kapcsolat
- A meglévő JSON-LD-ben cseréld a LocalBusiness-t ContactPage-re a következő struktúra szerint:
  {"@context":"https://schema.org","@graph":[{"@type":"ContactPage","name":"Kapcsolat – TartóPont Alapítvány","url":"https://www.tartopontalapitvany.hu/kapcsolat","mainEntity":{"@type":"NGO","name":"TartóPont Alapítvány","telephone":"+36706178989","email":"info@tartopontalapitvany.hu","address":{"@type":"PostalAddress","streetAddress":"Gyepes utca 7.","addressLocality":"Budapest","postalCode":"1038","addressCountry":"HU"},"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"17:00"}}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Főoldal","item":"https://www.tartopontalapitvany.hu/"},{"@type":"ListItem","position":2,"name":"Kapcsolat","item":"https://www.tartopontalapitvany.hu/kapcsolat"}]}]}
- A telefon kártyában: <p><a href="tel:+36706178989" ...>+36 70 617 8989</a></p>

### media.html
- <title>: "Média | TartóPont Alapítvány – Sajtómegjelenések és Videók"
- <meta name="description">: "A TartóPont Alapítvány sajtómegjelenései, interjúi és videói. SNI és fogyatékkal élő gyermeket nevelő családok ügyéért."
- <link rel="canonical">: https://www.tartopontalapitvany.hu/media
- og:url: https://www.tartopontalapitvany.hu/media
- Ha nincs H1 tag az oldalon (csak logo kép van hero-ban), add hozzá: <h1 class="visually-hidden">TartóPont Alapítvány – Média megjelenések</h1>
- JSON-LD-ben add hozzá a BreadcrumbList-et: [Főoldal → Média]
- A nav-ban a Média link legyen active (class="nav-link active")

### szolgaltatasaink.html
- <title>: "Szolgáltatásaink | TartóPont Alapítvány – Mentálhigiénés Támogatás SNI Családoknak"
- <meta name="description">: "Mentálhigiénés tanácsadás, szülőklubok, sorstársi közösségek és gyakorlati segítség fogyatékkal élő gyermeket nevelő szülőknek Budapesten."
- <link rel="canonical">: https://www.tartopontalapitvany.hu/szolgaltatasaink
- og:url: https://www.tartopontalapitvany.hu/szolgaltatasaink
- Ha nincs H1 tag az oldalon, add hozzá: <h1 class="visually-hidden">TartóPont Alapítvány Szolgáltatásai – SNI és Fogyatékkal Élő Gyermeket Nevelő Családoknak</h1>
- JSON-LD-ben add hozzá a BreadcrumbList-et: [Főoldal → Szolgáltatásaink]
- A nav-ban a Szolgáltatásaink link legyen active

### tamogatas.html
- <title>: "Támogatás | TartóPont Alapítvány – Adományozás SNI Gyermekekért"
- <meta name="description">: "Támogassa az SNI és fogyatékkal élő gyermeket nevelő budapesti családokat! Adományozzon a TartóPont Alapítványnak – bankszámlaszám: 11742056-21459007."
- <link rel="canonical">: https://www.tartopontalapitvany.hu/tamogatas
- og:url: https://www.tartopontalapitvany.hu/tamogatas
- Ha nincs H1 tag az oldalon, add hozzá: <h1 class="visually-hidden">Támogassa a TartóPont Alapítványt – Adományozás SNI és Fogyatékkal Élő Gyermeket Nevelő Családokért</h1>
- JSON-LD-ben add hozzá a BreadcrumbList-et: [Főoldal → Támogatás]
- A nav-ban a Támogatás gomb legyen active

---

## SITEMAP.XML – teljes csere

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.tartopontalapitvany.hu/</loc><lastmod>2026-04-01</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.tartopontalapitvany.hu/rolunk</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.tartopontalapitvany.hu/szolgaltatasaink</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.tartopontalapitvany.hu/media</loc><lastmod>2026-04-01</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.tartopontalapitvany.hu/kapcsolat</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.tartopontalapitvany.hu/tamogatas</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
</urlset>

---

## ROBOTS.TXT – hozd létre ezt a fájlt

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Crawl-delay: 1

Sitemap: https://www.tartopontalapitvany.hu/sitemap.xml

---

## STYLE.CSS – add a fájl végére

/* SEO: Vizuálisan rejtett H1 */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* CLS megelőzés */
img { max-width: 100%; height: auto; }

/* Akadálymentesség */
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
  outline: 3px solid #5DADE2;
  outline-offset: 2px;
}

---

Add vissza minden fájlt teljes egészében a javításokkal. Ne hagyj ki egyetlen sort sem az eredeti tartalmakból.
