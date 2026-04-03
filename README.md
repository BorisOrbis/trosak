# Troškovi

Osobni tracker troškova i prihoda — progresivna web aplikacija (PWA) na hrvatskom jeziku.

**🔗 [borisorbis.github.io/trosak](https://borisorbis.github.io/trosak)**

---

## Što je ovo?

Jednostavna, brza i privatna aplikacija za praćenje osobnih financija. Radi u pregledniku, instalira se na mobitel kao app, ne zahtijeva registraciju ni internet — svi podaci ostaju lokalno na uređaju.

## Mogućnosti

- Unos troškova i prihoda po kategorijama
- Postavljanje budžeta po kategoriji s vizualnim indikatorom
- Pregled povijesti po mjesecima s pretraživanjem
- Ponavljajući troškovi (automatski unos)
- Predlošci za brzi unos
- Grafovi — raspodjela po kategorijama, trendovi, dnevni pregled
- Export podataka u CSV i XLSX
- Import / export cijele baze (JSON backup)
- Prilagodba kategorija i veličine fonta
- Tamna i svijetla tema
- Instalacija na Android i iOS (PWA)
- Radi offline

## Tehnologije

- Vanilla HTML / CSS / JavaScript — bez frameworka, bez dependencija
- Service Worker za offline rad i caching
- localStorage za pohranu podataka
- Chart.js za grafove
- GitHub Pages za hosting

## Instalacija na mobitel

**Android (Chrome):** Otvori link → izbornik `⋮` → *Dodaj na početni zaslon*

**iOS (Safari):** Otvori link → tipka `⎙ Dijeli` → *Dodaj na početni zaslon*

## Lokalni razvoj

```bash
git clone https://github.com/BorisOrbis/trosak.git
cd trosak
# Otvori index.html u pregledniku ili pokreni lokalni server:
npx serve .
```

## Struktura

```
trosak/
├── index.html      # Cijela aplikacija (single-file)
├── sw.js           # Service Worker
├── manifest.json   # PWA manifest
├── icon-192.png
└── icon-512.png
```

## Privatnost

Svi podaci pohranjuju se isključivo na tvom uređaju (`localStorage`). Ništa se ne šalje na server.

---

*Napravljeno za osobnu upotrebu.*
