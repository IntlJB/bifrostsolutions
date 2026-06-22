# Bifrost Solutions SEO, cases og landingssider

## Formål

Bifrost Solutions skal bruge `https://bifrostsolutions.dk` uden `www` som eneste offentlige domæneformat. Sitet skal have en teknisk konsistent SEO-base, tre søgemålrettede landingssider og en salgsorienteret caseoplevelse med Carupgrade og Lepas Dressage.

Arbejdet må ikke indeholde opdigtede trafik-, salgs- eller performanceresultater. Cases beskriver dokumenterbare leverancer og synlige designbeslutninger.

## Omfang

Leverancen omfatter:

- Redirect fra `www.bifrostsolutions.dk` til `bifrostsolutions.dk` med bevaret sti og query-parametre.
- Canonicals, metadata, Open Graph, strukturerede data, robots og sitemap med domænet uden `www`.
- Fjernelse af `/faq`, `/om-os` og `/vision` fra sitemap, da de ikke eksisterer som routes.
- Tilføjelse af Bifrost Solutions til `/Users/jonas/Developer/SEO/config/sites.json` med GSC-property `sc-domain:bifrostsolutions.dk` og sitemap-URL.
- Tre routes: `/hjemmeside-til-mindre-virksomhed`, `/hjemmeside-paa-abonnement` og `/hjemmeside-med-hosting-og-drift`.
- En caseoversigt på `/cases`.
- Caseundersider på `/cases/carupgrade` og `/cases/lepas-dressage`.
- Optimering af store hero-, editorial- og Open Graph-billeder.
- Opdatering af navigation og interne links.
- Automatiserede tests, produktionsbuild og visuel browserkontrol.

## Designretning

### Design Read

Cases behandles som en salgsorienteret portfolio for danske virksomhedsejere. Formsproget skal være nordisk, roligt og teknisk med Bifrosts eksisterende design-DNA.

### Dials

- `DESIGN_VARIANCE: 8`
- `MOTION_INTENSITY: 6`
- `VISUAL_DENSITY: 3`

### Bevarede designtokens

- Geist og Geist Mono via `next/font`.
- Zinc-baserede lyse og mørke flader.
- Eksisterende dæmpede teal-accent.
- Pill-form på primære handlinger og 12-16 px radius på visuelle paneler.
- Store, kompakte overskrifter og generøs negativ plads.
- Systemstyret dark mode med samme visuelle hierarki i begge tilstande.
- Bifrost-logo, footer, cookieoplevelse og juridiske tekster ændres ikke.

## Informationsarkitektur

Hovednavigationen får et tydeligt link med teksten `Cases`. Det peger på `/cases`. Forsidens eksisterende caseanker kan fortsat fungere som et kort udpluk, men den nye oversigt er den primære indgang til dokumenterede projekter.

Caseoversigten linker til:

- `/cases/carupgrade`
- `/cases/lepas-dressage`

De tre landingssider linker naturligt til relevante cases og til den eksisterende kontakt-CTA. Caseundersiderne linker tilbage til oversigten og videre til den offentlige kundeside.

## Cases-oversigt

### Hero

Heroen skal passe i første viewport og bruge højst fire tekstelementer. Den består af en venstrestillet overskrift, en kort forklaring og en primær handling. Den visuelle side bruger rigtige screenshots fra Carupgrade og Lepas Dressage i en asymmetrisk collage. Der bruges ingen falsk browsergrænseflade bygget af dekorative div-elementer.

### Projektsektioner

Hvert projekt får sin egen store sektion med:

- Kundens navn og branche.
- En kort, konkret beskrivelse af opgaven.
- Tre dokumenterbare fokusområder.
- Et stort interaktivt preview.
- Link til caseundersiden.
- Link til den offentlige kundeside.

Carupgrade og Lepas Dressage bruger forskellige kompositioner, så siden ikke gentager samme split-layout. Den ene sektion kan bruge en stor bred previewflade med tekst under. Den anden kan bruge et forskudt grid med preview og projektfakta.

### Interaktiv preview

Et isoleret client component håndterer viewport-skift mellem desktop og mobil. Previewet bruger lokale, optimerede screenshots af de rigtige websites. Brugeren kan skifte viewport med tastaturbetjente knapper og panorere vertikalt i den valgte sidevisning.

Interaktionen må kun animere `transform` og `opacity`. `prefers-reduced-motion` giver øjeblikkelige skift. Previewet har en statisk fallback, reserveret billedplads og tydelige labels.

## Caseundersider

Hver caseunderside følger samme informationsmodel, men får en komposition, der passer til projektet:

1. Kort hero med projektnavn, branche og primær leverance.
2. Stor rigtig desktop- eller mobilvisning.
3. Udgangspunkt og vigtigste kommunikationsopgave.
4. Design- og indholdsbeslutninger.
5. Leverede sider eller funktioner.
6. Link til det færdige website og en fælles Bifrost-kontakt-CTA.

Carupgrade beskrives som et mobilt værksted med fokus på tydelig service, proces, dækningsområde og tilbudskontakt. Lepas Dressage beskrives som opstaldning og dressurfaglighed med fokus på ro, faciliteter, priser og henvendelser om opstaldningsplads.

## Landingssider

De tre landingssider deler et fokuseret layout og genbrugelige server components, men får unik tekst, metadata, H1 og intern linkstruktur.

### Hjemmeside til mindre virksomhed

Målretter virksomhedsejeren, der har brug for en professionel og overskuelig side uden at styre flere leverandører. Siden fremhæver klar ydelsesformidling, kontaktveje, mobilvisning og dansk support.

### Hjemmeside på abonnement

Forklarer den faste pris på 399 kr. ex. moms pr. måned, fakturering hver tredje måned, ingen opstartsregning for standardløsningen og den løbende drift. Teksten må ikke skjule vilkår eller skabe kunstig hast.

### Hjemmeside med hosting og drift

Målretter behovet for én samlet leverandør. Siden beskriver hosting, SSL, teknisk drift, almindelige indholdsrettelser og support i konkrete vendinger.

## Teknisk SEO

Next.js genererer robots og sitemap fra applikationen, så dublerede statiske filer ikke kan komme ud af sync. Alle indekserbare routes får egen canonical og metadata. Sitemap indeholder kun routes, som returnerer succesfulde HTML-sider.

Strukturerede data bruger samme basisdomæne som canonicals. Open Graph-billeder og absolutte URLs peger på domænet uden `www`.

Domæneredirectet konfigureres i applikationen eller Vercel-konfigurationen og verificeres med en request mod `www`-hosten. Vercels domæneindstilling skal fortsat have apex-domænet som primært domæne.

## Billeder

Rigtige screenshots indsamles fra de offentlige kundesider i desktop- og mobilstørrelser. De lagres som optimerede lokale assets med dimensionsmetadata.

Eksisterende PNG-filer på cirka 1,4-2 MB konverteres eller rekomprimeres til passende WebP/AVIF-kvalitet, hvor formatet understøtter brugen. Open Graph-billedet bevarer 1200 x 630. `next/image` bruges med korrekte `sizes`, dimensioner og `priority` kun for det faktiske LCP-billede.

## Tilgængelighed og performance

- Preview-kontroller virker med tastatur og har synlig fokusmarkering.
- Kontrast kontrolleres i lys og mørk tilstand.
- Alle billeder får konkrete alt-tekster.
- Animation respekterer reduceret bevægelse.
- Der bruges ikke scroll listeners eller kontinuerlig React-state til pointer- eller scrollværdier.
- Mobilversionen kollapser til én kolonne under 768 px.
- Siden må ikke introducere layoutskift fra billeder eller skrifttyper.
- Lighthouse bruges som lokal indikator efter produktionsbuild.

## Test og verifikation

Automatiserede integrationstests skal kontrollere:

- Basisdomænet uden `www` i metadata, sitemap, robots og strukturerede data.
- Redirectkonfigurationen for `www`.
- At sitemap kun indeholder eksisterende routes.
- At de tre landingssider og tre case-routes eksisterer med unik metadata.
- At Cases findes i navigationen.
- At screenshots og optimerede billeder findes og bruges.
- At GSC-konfigurationen indeholder `sc-domain:bifrostsolutions.dk` og korrekt sitemap.

Efter test køres lint og produktionsbuild. Cases, landingssider og centrale responsive tilstande kontrolleres i browseren. Der kontrolleres for konsolfejl, ødelagte links, horizontal overflow, mørk tilstand og reduceret bevægelse.

## Levering

Når alle tests og kontroller er bestået, samles de godkendte ændringer i en intentionel commit og pushes til den aktuelle remote branch. Eksisterende brugerændringer må ikke overskrives eller inkluderes utilsigtet.
