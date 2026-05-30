import { useForm, ValidationError } from '@formspree/react'
import heroImage from './assets/bifrost-hero-ios-blue.png'
import './App.css'

const proofPoints = [
  'Gratis designudkast',
  'Ingen opstartsomkostninger',
  '399,- ex. moms pr. måned',
]

const benefits = [
  {
    title: 'Se siden før du beslutter dig',
    text: 'Vi laver et gratis udkast til din nye hjemmeside, så du kan mærke udtryk, struktur og indhold, før du siger ja.',
  },
  {
    title: 'Fast lav månedlig pris',
    text: 'Du betaler 399,- ex. moms pr. måned, når hjemmesiden skal online. Hosting, drift og almindelig support er inkluderet.',
  },
  {
    title: 'Alt det praktiske samlet',
    text: 'Vi hjælper med design, tekst, mobilvisning, kontaktformular, domæne, DNS og lancering, så du slipper for teknisk bøvl.',
  },
]

const processSteps = [
  ['01', 'Fortæl os om din virksomhed', 'Du sender firmanavn, branche og kontaktinfo. Har du en eksisterende side, kigger vi også på den.'],
  ['02', 'Vi designer et gratis udkast', 'Vi bygger et professionelt forslag med tekster, sektioner og visuel retning til din virksomhed.'],
  ['03', 'Du gennemgår resultatet', 'Du får mulighed for at se udkastet og vurdere, om det føles rigtigt for din virksomhed.'],
  ['04', 'Vi går live', 'Når du er tilfreds, gør vi siden klar med domæne, formular og drift til 399,- ex. moms/md.'],
]

const includedItems = [
  'Professionel hjemmeside',
  'Responsivt design til mobil og desktop',
  'Tekster og struktur tilpasset din virksomhed',
  'Kontaktformular',
  'Hosting og teknisk drift',
  'DNS- og domænehjælp',
  'Løbende support',
  'Ingen binding',
]

const faqItems = [
  {
    question: 'Koster designudkastet noget?',
    answer: 'Nej. Udkastet er gratis og uforpligtende. Du betaler først, hvis du ønsker at få hjemmesiden online.',
  },
  {
    question: 'Hvad er prisen?',
    answer: 'Prisen er 399,- ex. moms pr. måned. Løsningen er lavet til virksomheder, der vil online uden store opstartsbetalinger.',
  },
  {
    question: 'Hvad skal jeg selv levere?',
    answer: 'Du skal blot fortælle os kort om virksomheden, dine ydelser og ønsket stil. Vi kan hjælpe med både struktur og tekst.',
  },
  {
    question: 'Kan jeg få ændringer bagefter?',
    answer: 'Ja. Almindelige justeringer og løbende hjælp er en del af løsningen, så siden kan følge med din virksomhed.',
  },
]

const miniCases = [
  'Håndværker',
  'Klinik',
  'Konsulent',
  'Servicefirma',
  'Lokal butik',
  'Ny virksomhed',
]

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="logoMark">
      <path d="M8 31c6.6-10 12-15 16-15s9.4 5 16 15" />
      <path d="M9 32h30" />
      <path d="M15 29v7M24 20v16M33 29v7" />
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
        <span>Bifrostsolutions</span>
      </a>

      <nav className="navLinks" aria-label="Primær navigation">
        <a href="/#udkast">Gratis udkast</a>
        <a href="/#pris">Pris</a>
        <a href="/#proces">Proces</a>
        <a href="/#faq">FAQ</a>
      </nav>

      <a className="headerCta" href="/#kontakt">
        Få gratis design
      </a>
    </header>
  )
}

function ContactForm({ compact = false }) {
  const [state, handleSubmit] = useForm('xykvvayz')

  return (
    <form className={`leadForm ${compact ? 'leadFormCompact' : ''}`} onSubmit={handleSubmit}>
      <div>
        <p className="formKicker">Gratis designudkast</p>
        <h2>Vil du se din nye hjemmeside?</h2>
        <p>
          Udfyld formularen, så vender vi tilbage med næste skridt. Det er gratis og uden
          forpligtelser.
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
          placeholder="Skriv evt. om du har en nuværende hjemmeside, domæne eller ønsker til stil."
        ></textarea>
        <ValidationError field="message" errors={state.errors} />
      </label>

      <ValidationError errors={state.errors} />

      <button type="submit" disabled={state.submitting || state.succeeded}>
        {state.submitting ? 'Sender...' : 'Få gratis designudkast'}
      </button>

      {state.succeeded && (
        <p className="formStatus">Tak. Din henvendelse er sendt, og vi vender tilbage hurtigst muligt.</p>
      )}
    </form>
  )
}

function Hero() {
  return (
    <section className="hero" id="udkast">
      <div className="heroContent">
        <p className="eyebrow">Professionelle hjemmesider til danske virksomheder</p>
        <h1>Få et gratis designudkast til din nye hjemmeside</h1>
        <p className="heroText">
          Bifrostsolutions designer og opsætter din hjemmeside, så du kan se resultatet, før
          du beslutter dig. Kom online for kun 399,- ex. moms pr. måned.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="#kontakt">
            Få gratis design
          </a>
          <a className="secondaryButton" href="#pris">
            Se prisen
          </a>
        </div>

        <div className="proofList" aria-label="Fordele">
          {proofPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>

      <ContactForm compact />
    </section>
  )
}

function Benefits() {
  return (
    <section className="section">
      <div className="sectionHeader">
        <p className="eyebrow">En nemmere vej online</p>
        <h2>Hjemmesider uden lange processer og store startbetalinger</h2>
      </div>

      <div className="benefitGrid">
        {benefits.map((item) => (
          <article className="featureCard" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function PriceSection() {
  return (
    <section className="priceSection" id="pris">
      <div className="priceCopy">
        <p className="eyebrow">Fast pris</p>
        <h2>Kom online for kun 399,- ex. moms pr. måned</h2>
        <p>
          Vi har gjort det overskueligt at få en moderne hjemmeside. Du slipper for dyre
          opstartspakker og betaler først, når du ønsker at bruge løsningen.
        </p>
      </div>

      <article className="priceCard">
        <span className="priceLabel">Hjemmesidepakke</span>
        <strong>399,-</strong>
        <p>ex. moms pr. måned</p>
        <a className="primaryButton" href="#kontakt">
          Få gratis design
        </a>
      </article>
    </section>
  )
}

function IncludedSection() {
  return (
    <section className="section includedSection">
      <div className="sectionHeader">
        <p className="eyebrow">Det får du</p>
        <h2>Alt det din hjemmeside skal bruge</h2>
        <p>
          Vi sørger for både design, indhold og teknik, så hjemmesiden er klar til at
          repræsentere din virksomhed professionelt.
        </p>
      </div>

      <div className="includedGrid">
        {includedItems.map((item) => (
          <div className="includedItem" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section processSection" id="proces">
      <div className="sectionHeader">
        <p className="eyebrow">Sådan fungerer det</p>
        <h2>Fire enkle trin fra idé til online hjemmeside</h2>
      </div>

      <div className="processGrid">
        {processSteps.map(([number, title, text]) => (
          <article className="processCard" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExamplesSection() {
  return (
    <section className="examplesSection">
      <div className="examplesImage">
        <img src={heroImage} alt="Eksempel på moderne hjemmesideopsætning fra Bifrostsolutions" />
      </div>
      <div className="examplesCopy">
        <p className="eyebrow">Til mange brancher</p>
        <h2>En professionel side, der passer til din virksomhed</h2>
        <p>
          Uanset om du sælger ydelser, bookinger eller rådgivning, bygger vi siden med et
          klart budskab, tydelige kontaktveje og et udtryk, der føles troværdigt for dine kunder.
        </p>
        <div className="caseTags">
          {miniCases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section faqSection" id="faq">
      <div className="sectionHeader">
        <p className="eyebrow">Ofte stillede spørgsmål</p>
        <h2>Det korte svar, før vi tager snakken</h2>
      </div>

      <div className="faqGrid">
        {faqItems.map((item) => (
          <article className="faqItem" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contactSection" id="kontakt">
      <div className="contactCopy">
        <p className="eyebrow">Kontakt</p>
        <h2>Få et gratis udkast til din nye hjemmeside</h2>
        <p>
          Send os lidt info om din virksomhed. Vi hjælper dig med en moderne hjemmeside, der
          er nem at komme i gang med og enkel at holde kørende.
        </p>
        <div className="contactFacts">
          <span>399,- ex. moms/md.</span>
          <span>Hosting inkluderet</span>
          <span>Ingen binding</span>
        </div>
      </div>

      <ContactForm />
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
          <span>Bifrostsolutions</span>
        </a>
        <p>Bifrostsolutions hjælper danske virksomheder med professionelle hjemmesider til en fast lav månedlig pris.</p>
      </div>

      <div className="footerLinks">
        <a href="/privatlivspolitik">Privatlivspolitik</a>
        <a href="/cookiepolitik">Cookiepolitik</a>
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
      <Benefits />
      <PriceSection />
      <IncludedSection />
      <ProcessSection />
      <ExamplesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function App() {
  const path = window.location.pathname

  if (path === '/privatlivspolitik') {
    return <PolicyPage type="privacy" />
  }

  if (path === '/cookiepolitik') {
    return <PolicyPage type="cookies" />
  }

  return <HomePage />
}

export default App
