import { useForm, ValidationError } from '@formspree/react'
import heroImage from './assets/bifrost-hero-ios-blue.png'
import './App.css'

const services = [
  {
    title: 'Design der passer til din virksomhed',
    text: 'Du får en moderne hjemmeside med tydelig struktur, mobilvenligt layout og tekster, der gør det nemt for kunder at forstå dit tilbud. Fokus er på et professionelt førstehåndsindtryk, korte veje til kontakt og en side, der føles troværdig fra første klik.',
  },
  {
    title: 'Opsætning uden teknisk bøvl',
    text: 'Du slipper for at skulle holde styr på domæne, email, formularer og lancering selv. Vi sørger for, at de vigtige dele bliver sat rigtigt op, så din hjemmeside er klar til brug og nem at komme videre med senere.',
  },
  {
    title: 'Hurtig og stabil drift',
    text: 'Siden bygges med fokus på hastighed, stabilitet og en enkel teknisk struktur. Det betyder færre problemer i hverdagen, bedre oplevelse for besøgende og et fundament, der kan udvides når din virksomhed får brug for mere.',
  },
]

const packages = [
  {
    name: 'Design',
    price: '2.000,-',
    featured: true,
    note: 'Fast pris inkl. design, email og DNS',
    features: [
      'Responsivt webdesign',
      'Opsætning af email',
      'DNS og domænehjælp',
      'Kontaktformular',
      'Klar og professionel lancering',
    ],
  },
  {
    name: 'Design og Drift',
    price: '2.000,-',
    note: 'Opstart + 1.500,- pr. 3. måned',
    features: ['Vedligehold af siden', 'Små rettelser', 'Teknisk overblik', 'Hjælp ved fejl'],
  },
  {
    name: 'Udvidelse',
    price: 'Efter aftale',
    note: 'Når siden skal mere end standard',
    features: ['Info- eller ekstra sider', 'Særlige funktioner', 'Automatisering', 'Synlighedsforbedringer'],
  },
]

const platformBenefits = [
  {
    label: 'Hurtig domæneopsætning',
    text: 'Domænet bliver sat op, så besøgende hurtigt og stabilt lander på den rigtige hjemmeside. Det giver en mere professionel oplevelse og færre tekniske stopklodser.',
  },
  {
    label: 'Stabil lancering',
    text: 'Hjemmesiden bliver gjort klar på en måde, hvor opdateringer kan håndteres sikkert. Det gør det nemmere at rette, forbedre og videreudvikle siden uden at starte forfra.',
  },
  {
    label: 'Styr på ændringer',
    text: 'Der holdes orden i arbejdet bag siden, så ændringer kan spores og håndteres fornuftigt. Det giver mere tryghed, hvis noget skal justeres eller rulles tilbage.',
  },
  {
    label: 'Mere pålidelige beskeder',
    text: 'Kontaktformularen sættes op med fokus på, at henvendelser kommer frem og ikke drukner i unødvendig støj. Det gør siden mere brugbar som salgskanal.',
  },
  {
    label: 'Effektiv udvikling',
    text: 'Processen er skruet sammen, så små ændringer og forbedringer kan laves hurtigt uden at gå på kompromis med kvaliteten. Det holder prisen nede og tempoet oppe.',
  },
]

const seoHighlights = [
  {
    title: 'Billig opstart uden skjulte trin',
    text: 'Du får en professionel hjemmeside fra 2.000,- inkl. de vigtigste dele for at komme online. Det gør løsningen oplagt til små virksomheder, selvstændige og nye projekter, der vil i gang uden et stort startbudget.',
  },
  {
    title: 'Komplet hosting og drift',
    text: 'Hjemmesiden kan samles med drift, vedligehold og teknisk overblik, så du ikke selv skal bruge tid på opsætning, fejlretning eller små løbende justeringer.',
  },
  {
    title: 'Hjemmeside klar til kunder',
    text: 'Siden bygges med klare budskaber, kontaktformular, mobilvenligt design og struktur, der hjælper besøgende med hurtigt at forstå hvem du er, hvad du tilbyder og hvordan de kontakter dig.',
  },
]

const infoItems = [
  {
    category: 'Guide',
    title: 'Hvad får du med en starter-hjemmeside til 2.000,-?',
    excerpt:
      'Du får en enkel, professionel hjemmeside med design, email, DNS-hjælp, kontaktformular og lancering. Pakken er lavet til mindre virksomheder, der vil online hurtigt uden at betale for en stor specialløsning fra dag ét.',
    time: '3 min',
  },
  {
    category: 'Teknik',
    title: 'Hvorfor opsætningen bag hjemmesiden betyder noget',
    excerpt:
      'En flot hjemmeside er kun halvdelen af arbejdet. Den tekniske opsætning påvirker hastighed, stabilitet, kontaktformularer og hvor nemt siden kan udvides senere, når virksomheden vokser.',
    time: '4 min',
  },
  {
    category: 'Kontakt',
    title: 'Gør det nemt for kunder at tage næste skridt',
    excerpt:
      'En god hjemmeside skal ikke bare se pæn ud. Den skal hjælpe besøgende med hurtigt at forstå dit tilbud, finde dine kontaktmuligheder og sende en henvendelse uden friktion.',
    time: '3 min',
  },
]

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="logoMark">
      <path className="logoArch" d="M8 30c6.4-9.4 12.1-14 16-14s9.6 4.6 16 14" />
      <path className="logoDeck" d="M7 32h34" />
      <path className="logoPost" d="M14 28v7M24 20v15M34 28v7" />
      <path className="logoRiver" d="M13 38c3-2 6-2 9 0s6 2 9 0" />
    </svg>
  )
}

function Nav() {
  return (
    <nav className="navbar" aria-label="Primær navigation">
      <a className="brand" href="/" aria-label="Bifrostsolutions forside">
        <span className="brandMark">
          <LogoMark />
        </span>
        <span>Bifrostsolutions</span>
      </a>
      <div className="navLinks">
        <a href="/#services">Ydelser</a>
        <a href="/#packages">Pris</a>
        <a href="/#platform">Fordele</a>
        <a href="/#info">Info</a>
        <a href="/#contact">Kontakt</a>
      </div>
      <a className="navCta" href="/#contact">
        Start for 2.000,-
      </a>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerTop">
        <a className="brand footerBrand" href="/" aria-label="Bifrostsolutions forside">
          <span className="brandMark">
            <LogoMark />
          </span>
          <span>Bifrostsolutions</span>
        </a>
        <div className="footerLinks">
          <a href="/privatlivspolitik">Privatlivspolitik</a>
          <a href="/cookiepolitik">Cookiepolitik</a>
        </div>
      </div>
      <p className="footerCompany">Bifrostsolutions · CVR 46504372</p>
    </footer>
  )
}

function PolicyPage({ type }) {
  const isPrivacy = type === 'privacy'

  return (
    <main>
      <Nav />
      <section className="policyPage">
        <span className="eyebrow">{isPrivacy ? 'Privatliv' : 'Cookies'}</span>
        <h1>{isPrivacy ? 'Privatlivspolitik' : 'Cookiepolitik'}</h1>
        {isPrivacy ? (
          <div className="policyContent">
            <p>
              Når du kontakter Bifrostsolutions via formular, email eller telefon, bruger vi
              dine oplysninger til at besvare din henvendelse og håndtere dialogen om dit
              projekt.
            </p>
            <p>
              Vi indsamler kun de oplysninger, du selv sender, typisk navn, email,
              telefonnummer og besked. Oplysningerne bruges ikke til nyhedsbreve eller
              markedsføring uden særskilt samtykke.
            </p>
            <p>
              Oplysninger deles ikke med uvedkommende. Du kan altid kontakte os for indsigt,
              rettelse eller sletning af dine oplysninger.
            </p>
          </div>
        ) : (
          <div className="policyContent">
            <p>
              Hjemmesiden bruger kun nødvendige tekniske funktioner for at siden kan vises og
              fungere korrekt.
            </p>
            <p>
              Der anvendes ikke marketingcookies eller skjult tracking i denne version af siden.
            </p>
            <p>
              Hvis der senere tilføjes statistik, annoncering eller tredjepartsfunktioner,
              opdateres cookiepolitikken, så det tydeligt fremgår hvad der bruges og hvorfor.
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
  const [state, handleSubmit] = useForm('xykvvayz')

  return (
    <main>
      <Nav />

      <section className="heroSection" id="top">
        <div className="heroCopy">
          <span className="eyebrow">Webdesign, email, DNS og lancering</span>
          <h1>En professionel hjemmeside fra 2.000,- inkl. det tekniske.</h1>
          <p>
            Bifrostsolutions hjælper små virksomheder med en flot, hurtig og driftssikker
            hjemmeside, hvor design, email, DNS og lancering er tænkt med fra starten.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">
              Få en starter-hjemmeside
            </a>
            <a className="secondaryButton" href="#packages">
              Se hvad der er med
            </a>
          </div>
          <div className="stats" aria-label="Nøgletal">
            <div>
              <strong>2.000,-</strong>
              <span>fast starterpris</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>opsætning inkluderet</span>
            </div>
            <div>
              <strong>DNS</strong>
              <span>domæne gjort klar</span>
            </div>
          </div>
        </div>

        <div className="heroVisual" aria-label="Illustration af webdesign, DNS og email">
          <img src={heroImage} alt="Lyst website-dashboard med design, DNS og emailpaneler" />
          <div className="statusPanel">
            <span className="pulse"></span>
            Klar til lancering
            <strong>2.000,-</strong>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionIntro">
          <span className="eyebrow">Ydelser</span>
          <h2>En hjemmesidepakke med både udtryk og opsætning.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title} style={{ '--delay': `${index * 80}ms` }}>
              <span className="cardIndex">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection" id="packages">
        <div className="sectionIntro">
          <span className="eyebrow">Fast starterpris</span>
          <h2>Start enkelt. Udvid når behovet opstår.</h2>
          <p>Alle priser er inkl. moms.</p>
        </div>
        <div className="packageGrid">
          {packages.map((item) => (
            <article className={`packageCard ${item.featured ? 'featured' : ''}`} key={item.name}>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p className="packageNote">{item.note}</p>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section platformSection" id="platform">
        <div className="sectionIntro">
          <span className="eyebrow">Fordele bag løsningen</span>
          <h2>Professionel opsætning forklaret i almindeligt sprog.</h2>
          <p>
            Du behøver ikke kende værktøjerne bag. Det vigtigste er, at siden bliver hurtig,
            stabil, nem at opdatere og mere pålidelig i hverdagen.
          </p>
        </div>
        <div className="benefitGrid">
          {platformBenefits.map((benefit) => (
            <article className="benefitCard" key={benefit.label}>
              <h3>{benefit.label}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section seoSection" id="billig-hjemmeside">
        <div className="sectionIntro">
          <span className="eyebrow">Billig hjemmeside og komplet drift</span>
          <h2>En enkel vej til en professionel hjemmeside med fast opstartspris.</h2>
          <p>
            Bifrostsolutions hjælper virksomheder, der søger en billig hjemmeside uden at gå på
            kompromis med det professionelle udtryk. Du får webdesign, teknisk opsætning,
            kontaktformular, email, DNS, lancering og mulighed for komplet hosting og drift.
          </p>
        </div>
        <div className="seoGrid">
          {seoHighlights.map((item) => (
            <article className="seoCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section blogSection" id="info">
        <div className="sectionIntro">
          <span className="eyebrow">Info</span>
          <h2>Korte forklaringer til dig der vil online uden bøvl.</h2>
        </div>
        <div className="blogGrid">
          {infoItems.map((item) => (
            <article className="blogCard" key={item.title} tabIndex="0">
              <div className="blogMeta">
                <span>{item.category}</span>
                <span>{item.time}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <span className="bridgeHover" aria-hidden="true">
                <span className="bridgeArch"></span>
                <span className="bridgeDeck"></span>
                <span className="bridgePost postOne"></span>
                <span className="bridgePost postTwo"></span>
                <span className="bridgePost postThree"></span>
              </span>
              <a href="#contact" aria-label={`Spørg om: ${item.title}`}>
                Spørg om dette
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactCopy">
          <span className="eyebrow">Kontakt</span>
          <h2>Vil du have en hjemmeside til 2.000,-?</h2>
          <p>
            Skriv kort hvad din virksomhed laver, og om du allerede har domæne og email.
            Så vender vi tilbage med næste skridt.
          </p>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>
            Navn
            <input name="name" type="text" placeholder="Dit navn" required />
            <ValidationError field="name" errors={state.errors} />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="din@email.dk" required />
            <ValidationError field="email" errors={state.errors} />
          </label>
          <label>
            Telefonnummer
            <input name="phone" type="tel" placeholder="12 34 56 78" />
            <ValidationError field="phone" errors={state.errors} />
          </label>
          <label>
            Hvad har du brug for?
            <select name="need" defaultValue="starter">
              <option value="starter">Starter-hjemmeside til 2.000,-</option>
              <option value="setup">Opsætning og lancering</option>
              <option value="contact">Email og kontaktformular</option>
              <option value="redesign">Redesign af eksisterende side</option>
            </select>
          </label>
          <label>
            Besked
            <textarea name="message" rows="5" placeholder="Skriv lidt om projektet" required></textarea>
            <ValidationError field="message" errors={state.errors} />
          </label>
          <ValidationError errors={state.errors} />
          <button type="submit" disabled={state.submitting || state.succeeded}>
            {state.submitting ? 'Sender...' : 'Send besked'}
          </button>
          {state.succeeded && <p className="formStatus">Tak. Din besked er sendt - vi vender tilbage hurtigst muligt.</p>}
        </form>
      </section>

      <Footer />
    </main>
  )
}

function App() {
  if (window.location.pathname === '/privatlivspolitik') {
    return <PolicyPage type="privacy" />
  }

  if (window.location.pathname === '/cookiepolitik') {
    return <PolicyPage type="cookies" />
  }

  return <HomePage />
}

export default App
