# GA4 og cookie-samtykke for Bifrost Solutions

## Formål

Bifrostsolutions.dk skal bruge Google Analytics 4 med målings-id `G-44LJ04547K`. Analytics må først indlæses, når brugeren aktivt har accepteret statistikcookies. Løsningen skal følge samme princip som SMJ og Carupgrade, men implementeres efter dette projekts Next.js App Router-arkitektur.

## Omfang

Løsningen omfatter:

- et globalt og tilgængeligt samtykkebanner;
- samtykkebetinget indlæsning af ét Google-tag;
- lagring og ændring af brugerens valg;
- oprydning af Google Analytics-cookies ved afvisning;
- en cookiepolitik og en privatlivspolitik;
- footerlinks til begge politikker og cookieindstillinger;
- automatiske tests af samtykkeflowet og integrationen.

Der tilføjes ingen øvrige trackingværktøjer eller marketingcookies.

## Arkitektur

En genbrugelig client-komponent placeres én gang i root-layoutet `app/layout.jsx`. Komponenten ejer samtykkestatus, banneret og den dynamiske indlæsning af Google-tagget. Dermed gælder løsningen automatisk for forsiden og alle nuværende og fremtidige App Router-sider.

Målings-id og storage-nøgle defineres centralt i komponenten. Google-tagget oprettes dynamisk i dokumentets `<head>` efter accept. Før oprettelse kontrollerer komponenten, om et tag allerede findes, så navigering og genrendering ikke kan skabe dubletter.

## Samtykkeflow

Ved første besøg vises banneret, fordi der ikke findes et gemt valg. Banneret forklarer formålet, linker til cookiepolitikken og tilbyder **Afvis** og **Accepter** med ligeværdig tilgængelighed.

- Ved accept gemmes valget, `dataLayer` og `gtag` initialiseres, og scriptet til `G-44LJ04547K` indlæses.
- Ved afvisning gemmes valget, Analytics indlæses ikke, og eventuelle `_ga`- og `_ga_*`-cookies slettes.
- Ved senere sidevisninger respekteres det gemte valg uden at vise banneret igen.
- Linket **Cookieindstillinger** i footeren nulstiller valget, rydder Analytics-cookies og åbner samtykkeflowet igen.

Samtykket gemmes i browserens local storage. Hvis local storage ikke er tilgængelig, fungerer valget stadig for den aktuelle sidevisning uden at blokere siden.

## Brugerflade og tilgængelighed

Banneret udformes som en fast bundbjælke i Bifrost Solutions' eksisterende farver og typografi. På små skærme stables indhold og handlinger uden vandret overflow.

Banneret får dialogsemantik og et tilgængeligt navn. Knapper og links kan betjenes med tastatur og får tydelige fokusmarkeringer. Fokus flyttes til en relevant handling, når banneret åbnes.

## Politik-sider og footer

Der oprettes App Router-sider på:

- `/cookiepolitik`
- `/privatlivspolitik`

Siderne bruger projektets eksisterende visuelle system, har egne metadata og beskriver Bifrost Solutions' faktiske behandling. Virksomhedsoplysningerne hentes fra projektets eksisterende indhold: CVR 46504372, telefon +45 50 65 49 00 og kontakt@bifrostsolutions.dk. Cookiepolitikken dokumenterer GA4, målings-id, formål, almindelige GA-cookies, samtykke og tilbagetrækning. Privatlivspolitikken beskriver relevante kontakt- og kundeoplysninger, formål, modtagere, opbevaring, rettigheder og sammenhængen med Analytics.

Footeren placerer links til **Cookiepolitik**, **Privatlivspolitik** og **Cookieindstillinger** nederst sammen med de eksisterende kontakt- og copyrightoplysninger. Samme footer bruges på politik-siderne, så indstillingerne altid kan genåbnes.

## Test og verifikation

Automatiske tests skal dokumentere:

- at Google-tagget ikke findes før accept;
- at accept indlæser præcis ét tag med `G-44LJ04547K`;
- at afvisning ikke indlæser tagget og rydder Analytics-cookies;
- at gemt accept respekteres ved ny indlæsning;
- at cookieindstillinger kan genåbnes;
- at root-layoutet monterer samtykkeløsningen én gang;
- at footerlinks og begge politik-sider findes.

Til sidst køres lint, tests og production build. Den byggede side kontrolleres for, at Google-tagget ikke er hardkodet til øjeblikkelig indlæsning i servergenereret HTML.
