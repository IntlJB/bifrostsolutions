import { useEffect, useMemo, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'

const FORM_ID = 'xykvvayz'
const siteUrl = 'https://bifrostsolutions.dk'

const seoPages = {
  '/': {
    title: 'Billig hjemmeside med hosting og drift | Bifrostsolutions',
    description:
      'Få en professionel hjemmeside med gratis designudkast, hosting, SSL, support og drift til 399,- ex. moms pr. måned. Ingen binding.',
  },
  '/faq': {
    title: 'FAQ om hjemmesider, hosting og fast pris | Bifrostsolutions',
    description:
      'Svar på de mest almindelige spørgsmål om gratis designudkast, hosting, support, domæne, pris, binding og lancering hos Bifrostsolutions.',
  },
  '/om-os': {
    title: 'Om Bifrostsolutions | Hjemmesider uden teknisk bøvl',
    description:
      'Bifrostsolutions hjælper danske virksomheder med stabile, professionelle og billige hjemmesider, hvor design, hosting og drift er samlet ét sted.',
  },
  '/vision': {
    title: 'Vores vision | Stabile billige hjemmesider til danske virksomheder',
    description:
      'Vores vision er at gøre professionelle hjemmesider mere tilgængelige: stabil drift, gennemsigtig pris og webdesign, små virksomheder kan stole på.',
  },
  '/privatlivspolitik': {
    title: 'Privatlivspolitik | Bifrostsolutions',
    description: 'Læs hvordan Bifrostsolutions behandler oplysninger, når du kontakter os via formular, email eller telefon.',
  },
  '/cookiepolitik': {
    title: 'Cookiepolitik | Bifrostsolutions',
    description: 'Læs Bifrostsolutions cookiepolitik og hvordan hjemmesiden bruger nødvendige tekniske funktioner.',
  },
}

const primaryNav = [
  ['Løsning', '/#loesning'],
  ['Pris', '/#pris'],
  ['FAQ', '/faq'],
  ['Om os', '/om-os'],
  ['Vision', '/vision'],
]

const trustItems = [
  'Gratis og uforpligtende designudkast',
  'Hosting, SSL og drift inkluderet',
  'Ingen binding eller skjulte opstartsgebyrer',
]

const heroMetrics = [
  ['399,-', 'ex. moms pr. måned'],
  ['0,-', 'for designudkastet'],
  ['24t', 'typisk svarramme'],
]

const solutionCards = [
  {
    title: 'Webdesign der skaber tillid',
    text: 'Vi bygger en hjemmeside, der hurtigt forklarer din værdi, føles professionel og gør det nemt for kunder at kontakte dig.',
  },
  {
    title: 'Hosting og drift samlet',
    text: 'Du får hosting, SSL, DNS-hjælp og teknisk opsætning i samme løsning, så du ikke skal holde styr på flere leverandører.',
  },
  {
    title: 'Mobil først, ikke bagefter',
    text: 'Siden designes til at være let at læse, hurtig at scanne og nem at bruge på mobil, hvor mange kunder møder dig først.',
  },
  {
    title: 'Support fra et menneske',
    text: 'Når der skal ændres tekst, billeder, telefonnummer eller sektioner, skriver du til os. Vi holder det konkret og forståeligt.',
  },
]

const bridgeSteps = [
  ['Input', 'Du fortæller om virksomheden, målgruppen og dine vigtigste ydelser.'],
  ['Udkast', 'Vi omsætter det til en første visuel retning, før du betaler noget.'],
  ['Launch', 'Vi finpudser, tester mobilvisning, kobler domæne på og sender siden online.'],
  ['Drift', 'Vi passer på hosting, SSL og løbende tekniske justeringer bagefter.'],
]

const processSteps = [
  ['01', 'Vi lærer virksomheden at kende', 'Du behøver ikke komme med en færdig plan. Vi spørger ind til branche, kunder og budskab, så siden bygges på noget konkret.'],
  ['02', 'Du får et gratis udkast', 'Vi viser retning, struktur og udtryk, før du binder dig til noget. Du ser kvaliteten, før du beslutter dig.'],
  ['03', 'Vi finpudser og lancerer', 'Når du er tilfreds, gør vi siden klar med formular, mobilvisning, hosting, SSL og domæneopsætning.'],
  ['04', 'Vi passer på siden', 'Efter lancering holder vi den kørende, så din virksomhed står professionelt frem hver dag.'],
]

const includedItems = [
  'Skræddersyet webdesign',
  'Gratis designudkast',
  'Mobilvenlig opsætning',
  'Kontaktformular',
  'Hosting og teknisk drift',
  'SSL-certifikat',
  'DNS- og domænehjælp',
  'Løbende support',
  'Ingen binding',
  'Op til 6 undersider',
  'Tekststruktur og sparring',
  'Klar launch-hjælp',
]

const detailTabs = [
  {
    id: 'design',
    label: 'Design',
    title: 'En side der føles som din virksomhed',
    text: 'Vi starter med det vigtigste: hvem du hjælper, hvad du tilbyder, og hvorfor kunden skal vælge dig. Designet bliver bygget op omkring tydelig kommunikation, stærke førsteindtryk og sektioner, der leder mod kontakt.',
    points: ['Tydelig hero og CTA', 'Branchetilpasset struktur', 'Tekst der forklarer værdien'],
  },
  {
    id: 'hosting',
    label: 'Hosting',
    title: 'Drift uden teknisk støj',
    text: 'Hosting, SSL, DNS og teknisk opsætning er ikke noget, du skal koordinere med flere steder. Vi samler det hele, så du har én kontakt og en hjemmeside, der er nem at forstå.',
    points: ['SSL inkluderet', 'DNS- og domænehjælp', 'Stabil teknisk opsætning'],
  },
  {
    id: 'support',
    label: 'Support',
    title: 'Små rettelser skal ikke blive store projekter',
    text: 'Når din virksomhed ændrer sig, skal hjemmesiden kunne følge med. Vi hjælper med almindelige justeringer, tekstændringer og praktiske rettelser, så siden bliver ved med at være aktuel.',
    points: ['Dansk kontakt', 'Praktiske rettelser', 'Klar dialog uden fagjargon'],
  },
]

const audienceCards = [
  ['Håndværkere', 'Vis dine ydelser, områder og kontaktmuligheder tydeligt, så lokale kunder hurtigt kan tage fat.'],
  ['Klinikker', 'Skab ro og tillid med overskuelige behandlinger, priser, åbningstider og en nem kontaktvej.'],
  ['Konsulenter', 'Forklar din ekspertise, cases og tilgang, så beslutningstagere hurtigt forstår værdien.'],
  ['Nystartede', 'Kom professionelt online uden stor opstartsbetaling, og byg videre når virksomheden vokser.'],
]

const proofItems = [
  ['Hurtig at forstå', 'Besøgende skal forstå din ydelse på få sekunder. Derfor arbejder vi med klare overskrifter og korte beslutningsveje.'],
  ['Bygget til kontakt', 'CTA’er, formularer og kontaktinformation placeres, så kunden aldrig skal lede efter næste skridt.'],
  ['Klar på mobil', 'Layout, knapper, tekststørrelser og spacing planlægges til små skærme fra starten.'],
]

const faqItems = [
  {
    question: 'Koster designudkastet noget?',
    answer: 'Nej. Designudkastet er gratis og uforpligtende. Formålet er, at du kan se en konkret retning for din hjemmeside, før du beslutter dig. Hvis du ikke ønsker at gå videre, betaler du ikke noget.',
  },
  {
    question: 'Hvad er prisen?',
    answer: 'Prisen er 399,- ex. moms pr. måned og faktureres hver 3. måned. Det dækker en basisside med op til 6 undersider, hosting, teknisk drift og almindelig support. Har du brug for et større projekt, aftaler vi omfanget sammen.',
  },
  {
    question: 'Er der binding?',
    answer: 'Nej. Løsningen er uden binding. Du bliver hos os, fordi siden fungerer, ikke fordi du er låst fast i en lang aftale.',
  },
  {
    question: 'Hvad skal jeg selv levere?',
    answer: 'Du skal fortælle kort om virksomheden, dine ydelser, hvem dine kunder er, og om der er en bestemt stil, du kan lide. Har du logo, billeder eller eksisterende tekst, kan vi bruge det. Ellers hjælper vi med struktur og formuleringer fra bunden.',
  },
  {
    question: 'Kan I hjælpe med domæne og DNS?',
    answer: 'Ja. Vi hjælper med at koble dit domæne korrekt på hjemmesiden og sørger for den tekniske opsætning omkring DNS, SSL og hosting. Har du allerede et domæne, tager vi udgangspunkt i det.',
  },
  {
    question: 'Hvor hurtigt kan siden komme online?',
    answer: 'Det afhænger af hvor hurtigt materiale og godkendelser lander, men en enkel virksomhedsside kan typisk komme hurtigt fra udkast til launch. Vi holder processen konkret, så du hele tiden ved, hvad næste skridt er.',
  },
  {
    question: 'Kan jeg få ændret tekst og billeder efter launch?',
    answer: 'Ja. Almindelige rettelser og praktiske justeringer er en del af supporten. Hvis du senere ønsker større nye sektioner eller ekstra funktioner, aftaler vi omfanget tydeligt på forhånd.',
  },
  {
    question: 'Passer løsningen til en helt ny virksomhed?',
    answer: 'Ja. Faktisk er løsningen bygget til virksomheder, der vil professionelt online uden en stor opstartsbetaling. Du får hjælp til både retning, struktur, design, hosting og drift.',
  },
  {
    question: 'Er hjemmesiden SEO-venlig?',
    answer: 'Ja. Vi arbejder med tydelige overskrifter, beskrivende sidetitler, meta-beskrivelser, intern linking, mobilvenligt layout og struktureret indhold. SEO er ikke magi, men en god teknisk og indholdsmæssig base gør en stor forskel.',
  },
  {
    question: 'Hvad hvis jeg allerede har en hjemmeside?',
    answer: 'Så kan vi bruge den som udgangspunkt. Vi kan hjælpe med at gentænke struktur, tekst, design og teknisk opsætning, så siden bliver mere professionel, hurtigere at forstå og nemmere at vedligeholde.',
  },
  {
    question: 'Ejer jeg mit domæne?',
    answer: 'Ja, dit domæne bør altid være dit. Vi kan hjælpe med opsætningen, men løsningen er tænkt, så det praktiske er gennemsigtigt og nemt at forstå.',
  },
  {
    question: 'Kan jeg få flere undersider?',
    answer: 'Ja. Basispakken dækker op til 6 undersider. Hvis du har brug for mere, aftaler vi det åbent, før arbejdet går i gang, så prisen og omfanget er tydeligt.',
  },
]

const aboutValues = [
  ['Gennemsigtighed', 'Du skal vide, hvad du får, hvad det koster, og hvad næste skridt er. Ingen teknisk tåge og ingen overraskelser.'],
  ['Stabilitet', 'En hjemmeside skal være flot, men den skal også være rolig, driftssikker og nem at holde opdateret.'],
  ['Nærhed', 'Vi bygger til danske virksomheder, der vil have en konkret løsning og en kontakt, der svarer menneskeligt.'],
]

const visionPillars = [
  ['Billigt uden at føles billigt', 'Små virksomheder skal kunne få en professionel hjemmeside uden en stor startregning eller lange bindinger.'],
  ['Drift som standard', 'Hosting, SSL og praktisk vedligehold bør ikke være ekstra forvirring. Det skal være en naturlig del af løsningen.'],
  ['Mere ro for ejeren', 'Når hjemmesiden er enkel at forstå og nem at få hjælp til, kan ejeren fokusere på kunderne i stedet for teknikken.'],
]

function usePageSeo(path) {
  useEffect(() => {
    const page = seoPages[path] || seoPages['/']
    document.title = page.title

    const setMeta = (selector, attr, value) => {
      const tag = document.head.querySelector(selector)
      if (tag) tag.setAttribute(attr, value)
    }

    const canonical = `${siteUrl}${path === '/' ? '/' : path}`
    setMeta('meta[name="description"]', 'content', page.description)
    setMeta('meta[property="og:title"]', 'content', page.title)
    setMeta('meta[property="og:description"]', 'content', page.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', page.title)
    setMeta('meta[name="twitter:description"]', 'content', page.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
  }, [path])
}

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="logoMark">
      <path d="M8 31c6.6-10 12-15 16-15s9.4 5 16 15" />
      <path d="M9 32h30" />
      <path d="M15 29v7M24 20v16M33 29v7" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="checkIcon">
      <path d="m20 6-11 11-5-5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="arrowIcon">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function Nav() {
  return (
    <header className="siteHeader">
      <a className="brand" href="/" aria-label="Bifrostsolutions forside">
        <span className="brandMark">
          <LogoMark />
        </span>
        <span>Bifrost <em>Solutions</em></span>
      </a>

      <nav className="navLinks" aria-label="Primær navigation">
        {primaryNav.map(([label, href]) => (
          <a href={href} key={label}>{label}</a>
        ))}
      </nav>

      <a className="headerCta" href="/#kontakt">
        Gratis udkast
        <ArrowIcon />
      </a>
    </header>
  )
}

function LeadForm() {
  const [state, handleSubmit] = useForm(FORM_ID)

  return (
    <form className="leadForm" onSubmit={handleSubmit}>
      <div>
        <p className="eyebrow">Gratis designudkast</p>
        <h2>Se din nye hjemmeside før du beslutter dig</h2>
        <p>
          Send lidt info om din virksomhed. Vi vender tilbage med næste skridt,
          uden binding og uden opstartsomkostning.
        </p>
      </div>

      <label>
        Firma
        <input name="company" type="text" placeholder="Dit firmanavn" required />
        <ValidationError field="company" errors={state.errors} />
      </label>

      <label>
        Branche
        <input name="industry" type="text" placeholder="Fx tømrer, klinik eller konsulent" required />
        <ValidationError field="industry" errors={state.errors} />
      </label>

      <div className="formRow">
        <label>
          Navn
          <input name="name" type="text" placeholder="Dit navn" required />
          <ValidationError field="name" errors={state.errors} />
        </label>

        <label>
          Telefon
          <input name="phone" type="tel" placeholder="12 34 56 78" required />
          <ValidationError field="phone" errors={state.errors} />
        </label>
      </div>

      <label>
        E-mail
        <input name="email" type="email" placeholder="din@email.dk" required />
        <ValidationError field="email" errors={state.errors} />
      </label>

      <label>
        Kort besked
        <textarea
          name="message"
          rows="4"
          placeholder="Skriv gerne om din nuværende hjemmeside, domæne eller ønskede stil."
        />
        <ValidationError field="message" errors={state.errors} />
      </label>

      <ValidationError errors={state.errors} />

      <button type="submit" disabled={state.submitting || state.succeeded}>
        {state.submitting ? 'Sender...' : 'Få gratis designudkast'}
        <ArrowIcon />
      </button>

      {state.succeeded && (
        <p className="formStatus">Tak. Din henvendelse er sendt, og vi vender tilbage hurtigst muligt.</p>
      )}
    </form>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="heroImage" src="/aurora-launch-hero.png" alt="" aria-hidden="true" />
      <div className="heroShade" />

      <div className="heroInner">
        <div className="heroCopy">
          <p className="eyebrow">Billig hjemmeside med hosting inkluderet</p>
          <h1>Din hjemmeside. <span>Vores drift.</span></h1>
          <p className="heroText">
            Bifrostsolutions bygger stabile, professionelle hjemmesider til danske virksomheder
            med design, hosting, support og drift samlet i én enkel løsning.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#kontakt">
              Få et gratis udkast
              <ArrowIcon />
            </a>
            <a className="secondaryButton" href="#pris">Se fast pris</a>
          </div>

          <div className="trustList" aria-label="Fordele">
            {trustItems.map((item) => (
              <span key={item}><CheckIcon /> {item}</span>
            ))}
          </div>
        </div>

        <aside className="heroPanel" aria-label="Kort over løsningen">
          <div className="panelTopline">
            <span className="liveDot" />
            Hosting inkluderet
          </div>
          <h2>Alt det praktiske samlet ét sted.</h2>
          <p>
            Fra første udkast til stabil drift. Du får en hjemmeside, der ser skarp ud,
            forklarer din virksomhed tydeligt og bliver passet teknisk bagefter.
          </p>
          <div className="statusGrid">
            <span>SSL OK</span>
            <span>DNS hjælp</span>
            <span>Mobilklar</span>
            <span>Support</span>
          </div>
        </aside>
      </div>

      <div className="metricRail" aria-label="Nøgletal">
        {heroMetrics.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function BridgeSection() {
  return (
    <section className="section bridgeSection" id="loesning">
      <div className="sectionHeader splitHeader">
        <div>
          <p className="eyebrow">Hvordan løsningen hænger sammen</p>
          <h2>Én bro fra idé til online virksomhed.</h2>
        </div>
        <p>
          Det smarte er ikke kun designet. Det smarte er, at design, hosting, support,
          domæneopsætning og drift ikke ligger spredt i fem forskellige systemer.
        </p>
      </div>

      <div className="bridgeFlow" aria-label="Fra input til drift">
        {bridgeSteps.map(([title, text], index) => (
          <article className="bridgeNode" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section className="section solutionSection">
      <div className="sectionHeader">
        <p className="eyebrow">Alt det en mindre virksomhed faktisk har brug for</p>
        <h2>En professionel hjemmeside uden teknisk bøvl.</h2>
        <p>
          Vi bygger til virkeligheden: kunder på mobil, ejere med travle dage, og virksomheder
          der vil se professionelle ud uden at skulle blive webeksperter.
        </p>
      </div>

      <div className="solutionGrid">
        {solutionCards.map((card, index) => (
          <article className="solutionCard" key={card.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function TabsSection() {
  const [activeTab, setActiveTab] = useState(detailTabs[0].id)
  const current = useMemo(() => detailTabs.find((item) => item.id === activeTab), [activeTab])

  return (
    <section className="section tabsSection">
      <div className="tabsShell">
        <div className="tabsCopy">
          <p className="eyebrow">Broen mellem idé og online</p>
          <h2>Design, hosting og support arbejder sammen.</h2>
          <p>
            Når siden både skal sælge, være nem at bruge og stå stabilt online, skal indhold,
            teknik og drift tænkes som én samlet oplevelse.
          </p>
        </div>

        <div className="tabsPanel">
          <div className="tabButtons" role="tablist" aria-label="Løsningsområder">
            {detailTabs.map((item) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === item.id}
                className={activeTab === item.id ? 'active' : ''}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <article className="tabContent">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <ul>
              {current.points.map((point) => (
                <li key={point}><CheckIcon /> {point}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  return (
    <section className="section audienceSection">
      <div className="sectionHeader splitHeader">
        <div>
          <p className="eyebrow">Bygget til danske virksomheder</p>
          <h2>Især når du vil online uden en stor startregning.</h2>
        </div>
        <p>
          En hjemmeside skal ikke være et prestigeprojekt. Den skal hjælpe kunder med at forstå
          dig, stole på dig og tage kontakt.
        </p>
      </div>

      <div className="audienceGrid">
        {audienceCards.map(([title, text]) => (
          <article className="audienceCard" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section processSection" id="proces">
      <div className="sectionHeader">
        <p className="eyebrow">Processen</p>
        <h2>Simpelt. Roligt. Online.</h2>
        <p>
          Du får en proces, hvor beslutningerne er tydelige, næste skridt er konkret,
          og teknikken ikke stjæler fokus fra din forretning.
        </p>
      </div>

      <ol className="processList">
        {processSteps.map(([number, title, text]) => (
          <li key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function ProofSection() {
  return (
    <section className="section proofSection">
      <div className="proofPanel">
        <div>
          <p className="eyebrow">Detaljerne der gør siden bedre</p>
          <h2>Wow-effekten skal også kunne bruges.</h2>
          <p>
            Det visuelle udtryk skal fange opmærksomheden, men det må aldrig stå i vejen
            for læsbarhed, kontakt og mobiloplevelsen. Derfor designer vi med klare signaler,
            stærke kontraster og små interaktioner, der hjælper brugeren videre.
          </p>
        </div>
        <div className="proofGrid">
          {proofItems.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PriceSection() {
  return (
    <section className="section priceSection" id="pris">
      <div className="priceCard">
        <div className="priceCopy">
          <p className="eyebrow">Transparent pris</p>
          <h2>Én fast pris. Alt det vigtige inkluderet.</h2>
          <p>
            Du slipper for en stor opstartsbetaling og får i stedet en fast,
            overskuelig løsning til en professionel hjemmeside med hosting og drift.
          </p>
          <a className="primaryButton" href="#kontakt">
            Kom i gang
            <ArrowIcon />
          </a>
        </div>

        <div className="priceBox">
          <p>Månedlig pakke</p>
          <div className="priceDisplay">
            <span>DKK</span>
            <strong>399</strong>
            <span>/ md. ex. moms</span>
          </div>
          <small>Faktureres hver 3. måned · Gratis designudkast · Ingen binding</small>
        </div>
      </div>

      <ul className="includedList">
        {includedItems.map((item) => (
          <li key={item}><CheckIcon /> {item}</li>
        ))}
      </ul>
    </section>
  )
}

function FaqList({ expanded = false }) {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0].question)
  const visibleItems = expanded ? faqItems : faqItems.slice(0, 6)

  return (
    <div className="faqList">
      {visibleItems.map((item) => {
        const isOpen = openQuestion === item.question

        return (
          <article className={`faqItem ${isOpen ? 'open' : ''}`} key={item.question}>
            <button type="button" onClick={() => setOpenQuestion(isOpen ? '' : item.question)}>
              {item.question}
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            <p>{item.answer}</p>
          </article>
        )
      })}
    </div>
  )
}

function FaqSection() {
  return (
    <section className="section faqSection" id="faq">
      <div className="faqIntro">
        <p className="eyebrow">Spørgsmål og svar</p>
        <h2>Det korte svar, før vi tager snakken.</h2>
        <p>
          Her er de spørgsmål, de fleste stiller først. Mangler du noget, så skriv,
          og vi svarer konkret.
        </p>
        <a className="textLink" href="/faq">Se alle spørgsmål</a>
      </div>

      <FaqList />
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contactSection" id="kontakt">
      <div className="contactCopy">
        <p className="eyebrow">Tag det første skridt</p>
        <h2>Klar til en hjemmeside du er stolt af?</h2>
        <p>
          Send os lidt info om din virksomhed. Vi vender tilbage med en tydelig proces
          og et gratis udkast, så du kan mærke kvaliteten før du beslutter dig.
        </p>
        <div className="contactFacts">
          <span>399,- ex. moms/md.</span>
          <span>Faktureres hver 3. måned</span>
          <span>Ingen binding</span>
        </div>
      </div>

      <LeadForm />
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footerBrand" href="/" aria-label="Bifrostsolutions forside">
          <span className="brandMark">
            <LogoMark />
          </span>
          <span>Bifrost <em>Solutions</em></span>
        </a>
        <p>Professionelle hjemmesider til danske virksomheder. Fast pris, ingen binding og drift du kan regne med.</p>
      </div>

      <div className="footerLinks">
        <a href="/faq">FAQ</a>
        <a href="/om-os">Om os</a>
        <a href="/vision">Vision</a>
        <a href="/privatlivspolitik">Privatlivspolitik</a>
        <a href="/cookiepolitik">Cookiepolitik</a>
        <a href="/#kontakt">Kontakt</a>
      </div>

      <p className="footerCompany">Bifrostsolutions · CVR 46504372 · Kontakt nr. +45 50 65 49 00</p>
    </footer>
  )
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="pageHero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

function FaqPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="FAQ"
        title="Svar på spørgsmål om hjemmesider, hosting og drift."
        text="Her finder du de praktiske svar om pris, proces, domæne, binding, support, SEO og hvad der sker efter lancering."
      />
      <section className="section faqPageSection">
        <FaqList expanded />
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}

function AboutPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="Om os"
        title="Vi bygger hjemmesider til virksomheder, der vil have ro på teknikken."
        text="Bifrostsolutions er skabt til danske virksomheder, som gerne vil professionelt online uden store opstartsgebyrer, lange bindinger og teknisk forvirring."
      />
      <section className="section editorialSection">
        <div className="editorialGrid">
          <div>
            <p className="eyebrow">Hvorfor vi findes</p>
            <h2>Mange mindre virksomheder mangler ikke ambition. De mangler en nem vej online.</h2>
          </div>
          <div className="editorialCopy">
            <p>
              For mange bliver en hjemmeside hurtigt et projekt med for mange valg:
              hosting, domæne, platform, design, formularer, sikkerhed, opdateringer og leverandører.
              Vi samler det i én løsning, så det bliver lettere at komme i gang.
            </p>
            <p>
              Vores arbejde handler om at gøre din virksomhed tydelig. Ikke at fylde siden
              med tekniske ord, men at bygge en digital base, der forklarer hvem du er,
              hvad du tilbyder, og hvorfor kunder trygt kan kontakte dig.
            </p>
          </div>
        </div>
        <div className="valueGrid">
          {aboutValues.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  )
}

function VisionPage() {
  return (
    <main>
      <Nav />
      <PageHero
        eyebrow="Vision"
        title="Stabile, billige hjemmesider skal være tilgængelige for flere."
        text="Vores vision er at gøre det nemmere for små og lokale virksomheder at få en professionel hjemmeside, der både ser godt ud og bliver passet ordentligt."
      />
      <section className="section visionSection">
        <div className="visionStatement">
          <p className="eyebrow">Det vi arbejder hen imod</p>
          <h2>En hjemmeside skal være en tryg base, ikke endnu en teknisk byrde.</h2>
          <p>
            Vi tror på stabile løsninger, faste priser og ærlig kommunikation. Små virksomheder
            fortjener hjemmesider, der føles professionelle, men stadig er til at betale og forstå.
          </p>
        </div>
        <div className="visionGrid">
          {visionPillars.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <PriceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function PolicyPage({ type }) {
  const isPrivacy = type === 'privacy'

  return (
    <main>
      <Nav />
      <section className="policyPage">
        <p className="eyebrow">{isPrivacy ? 'Privatliv' : 'Cookies'}</p>
        <h1>{isPrivacy ? 'Privatlivspolitik' : 'Cookiepolitik'}</h1>
        {isPrivacy ? (
          <div className="policyContent">
            <p>
              Når du kontakter Bifrostsolutions via formular, email eller telefon, bruger vi
              dine oplysninger til at besvare din henvendelse og håndtere dialogen om dit projekt.
            </p>
            <p>
              Vi indsamler kun de oplysninger, du selv sender, typisk firma, branche, navn,
              email, telefonnummer og besked.
            </p>
            <p>
              Oplysninger deles ikke med uvedkommende. Du kan altid kontakte os for indsigt,
              rettelse eller sletning af dine oplysninger.
            </p>
          </div>
        ) : (
          <div className="policyContent">
            <p>Hjemmesiden bruger nødvendige tekniske funktioner for at siden kan vises korrekt.</p>
            <p>Der anvendes ikke marketingcookies eller skjult tracking i denne version af siden.</p>
            <p>
              Hvis der senere tilføjes statistik, annoncering eller tredjepartsfunktioner,
              opdateres cookiepolitikken.
            </p>
          </div>
        )}
        <a className="secondaryButton policyBack" href="/">
          Tilbage til forsiden
        </a>
      </section>
      <Footer />
    </main>
  )
}

function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <BridgeSection />
      <SolutionSection />
      <TabsSection />
      <AudienceSection />
      <ProcessSection />
      <ProofSection />
      <PriceSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function App() {
  const path = window.location.pathname
  usePageSeo(path)

  if (path === '/faq') return <FaqPage />
  if (path === '/om-os') return <AboutPage />
  if (path === '/vision') return <VisionPage />
  if (path === '/privatlivspolitik') return <PolicyPage type="privacy" />
  if (path === '/cookiepolitik') return <PolicyPage type="cookies" />

  return <HomePage />
}

export default App
