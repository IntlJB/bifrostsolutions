import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'

const marqueeItems = [
  'Gratis designudkast',
  'Dansk support',
  'Fast månedspris',
  'Ingen binding',
  'Hosting inkluderet',
  'SSL og drift',
]

const serviceItems = [
  ['01', 'Professionelt design', 'En hjemmeside der føles gennemarbejdet, tillidsvækkende og tilpasset din branche fra første skærmbillede.'],
  ['02', 'Hosting og drift', 'Vi holder siden online, opdateret og teknisk sund, så du ikke skal bruge tid på platforme, DNS eller opsætning.'],
  ['03', 'Sikkerhed som standard', 'SSL, løbende vedligehold og en stabil teknisk opsætning er tænkt ind fra starten.'],
  ['04', 'Kontakt der virker', 'Tydelige kontaktveje og en formular, der hjælper dine kunder med at tage næste skridt.'],
  ['05', 'Fast pris', '399,- ex. moms pr. måned, faktureret hver 3. måned. Gennemsigtigt, enkelt og uden dyre opstartsgebyrer.'],
  ['06', 'Personlig hjælp', 'Du får en dansk kontakt, der hjælper dig trygt fra udkast til lancering og videre drift.'],
]

const processSteps = [
  ['1', 'Vi lærer virksomheden at kende', 'Du fortæller kort om din branche, kunder og ønsker. Vi omsætter det til en tydelig webfortælling.'],
  ['2', 'Du får et gratis udkast', 'Vi viser dig retning, struktur og udtryk, før du binder dig til noget.'],
  ['3', 'Vi finpudser og lancerer', 'Når du er tilfreds, gør vi siden klar med formular, mobilvisning, hosting og domæneopsætning.'],
  ['4', 'Vi passer på siden', 'Efter lancering holder vi den kørende, så din virksomhed står professionelt frem hver dag.'],
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
]

const collaborationSteps = [
  ['01', 'Vi starter med din virkelighed', 'Du behøver ikke komme med en færdig plan. Vi spørger ind til din virksomhed, dine kunder og det vigtigste budskab, så siden bliver bygget på noget konkret.'],
  ['02', 'Du ser retningen før du siger ja', 'Før du betaler for noget, får du et udkast, der viser layout, tone og struktur. Så kan du vurdere, om løsningen føles rigtig for din virksomhed.'],
  ['03', 'Vi holder det praktiske samlet', 'Når du godkender retningen, samler vi design, tekst, kontaktformular, mobilvisning, hosting og drift i én proces, så du ikke skal koordinere flere leverandører.'],
]

const faqItems = [
  {
    question: 'Koster designudkastet noget?',
    answer: 'Nej. Designudkastet er gratis og uforpligtende. Formålet er, at du kan se en konkret retning for din hjemmeside, før du beslutter dig. Hvis du ikke ønsker at gå videre, betaler du ikke noget.',
  },
  {
    question: 'Hvad er prisen?',
    answer: 'Prisen er 399,- ex. moms pr. måned og faktureres hver 3. måned. Det dækker hjemmesiden, hosting, teknisk drift og almindelig support. Du slipper for en stor opstartsbetaling og får i stedet en fast, overskuelig pris.',
  },
  {
    question: 'Er der binding?',
    answer: 'Nej. Løsningen er uden binding, fordi den skal være nem at sige ja til og lige så nem at stoppe igen. Du bliver hos os, fordi siden fungerer, ikke fordi du er låst fast i en lang aftale.',
  },
  {
    question: 'Hvad skal jeg selv levere?',
    answer: 'Du skal fortælle kort om virksomheden, dine ydelser, hvem dine kunder er, og om der er en bestemt stil, du kan lide. Har du logo, billeder eller eksisterende tekst, kan vi bruge det, men vi kan også hjælpe med struktur og formuleringer fra bunden.',
  },
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="checkIcon">
      <path d="m20 6-11 11-5-5" />
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
        <span>
          Bifrost <em>Solutions</em>
        </span>
      </a>

      <nav className="navLinks" aria-label="Primær navigation">
        <a href="/#services">Tjenester</a>
        <a href="/#proces">Proces</a>
        <a href="/#pris">Pris</a>
        <a href="/#faq">FAQ</a>
      </nav>

      <a className="headerCta" href="/#kontakt">
        Gratis udkast
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
        <h2>Vil du se, hvad din hjemmeside kan blive?</h2>
        <p>
          Send lidt info om din virksomhed. Vi vender tilbage med næste skridt, uden binding
          og uden opstartsomkostning.
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
      <div className="heroCopy">
        <h1>
          Hjemmesider du kan <em>stole på</em>.
        </h1>
        <p className="heroText">
          Bifrostsolutions bygger professionelle hjemmesider til danske virksomheder med
          design, hosting, support og drift samlet i én enkel løsning.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="#kontakt">Få et gratis udkast</a>
          <a className="secondaryButton" href="#pris">Se hvad det koster</a>
        </div>
        <div className="trustList" aria-label="Fordele">
          <span><CheckIcon /> Gratis og uforpligtende designudkast</span>
          <span><CheckIcon /> Ingen binding eller skjulte opstartsgebyrer</span>
          <span><CheckIcon /> Dansk support · 24 timers svartid</span>
        </div>
      </div>

      <div className="heroVisual">
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1100&auto=format&fit=crop&q=84" alt="Rolig arbejdsplads med laptop til en selvstændig virksomhed" />
        <div className="cornerMark"></div>
        <div className="heroStat">
          <strong>399,-</strong>
          <span>ex. moms pr. måned · faktureres hver 3. måned</span>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className="marqueeStrip" aria-hidden="true">
      <div className="marqueeTrack">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

function ServicesSection() {
  return (
    <section className="section servicesSection" id="services">
      <div className="sectionHeader splitHeader">
        <div>
          <span className="rule"></span>
          <p className="label">Alt inkluderet</p>
          <h2>
            Din hjemmeside. Vores <em>ansvar</em>.
          </h2>
        </div>
        <p>
          En god hjemmeside skal ikke kun se pæn ud. Den skal skabe tillid, forklare din
          værdi klart og være stabil nok til, at du kan regne med den hver dag.
        </p>
      </div>

      <div className="serviceGrid">
        {serviceItems.map(([number, title, text]) => (
          <article className="serviceCell" key={number}>
            <span>{number}</span>
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
    <section className="storySplit" id="proces">
      <div className="storyImage">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop&q=84" alt="Person der arbejder fokuseret på en laptop" />
      </div>
      <div className="storyCopy">
        <span className="rule"></span>
        <p className="label">Processen</p>
        <h2>
          Simpelt. Roligt. <em>Online.</em>
        </h2>
        <p>
          Vi gør processen overskuelig, så du ved, hvad der sker, hvorfor det sker,
          og hvornår din side er klar til kunder.
        </p>
        <ol className="stepsList">
          {processSteps.map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <a className="primaryButton" href="#kontakt">Start med et gratis udkast</a>
      </div>
    </section>
  )
}

function PriceSection() {
  return (
    <section className="section priceSection" id="pris">
      <div className="sectionHeader">
        <span className="rule"></span>
        <p className="label">Transparent pris</p>
        <h2>
          Én pris. <em>Alt inkluderet.</em>
        </h2>
      </div>

      <div className="pricingGrid">
        <article className="pricingMain">
          <p className="label">Månedlig pakke</p>
          <div className="priceDisplay">
            <span>DKK</span>
            <strong>399</strong>
            <span>/ md. ex. moms</span>
          </div>
          <p className="priceNote">399,- ex. moms pr. måned · Faktureres hver 3. måned · Gratis designudkast</p>
          <ul className="includedList">
            {includedItems.map((item) => (
              <li key={item}><CheckIcon /> {item}</li>
            ))}
          </ul>
          <a className="primaryButton" href="#kontakt">Kom i gang</a>
        </article>

        <aside className="pricingAside">
          <p className="label">Hvorfor det virker</p>
          <h3>
            Ingen <em>overraskelser.</em>
          </h3>
          <p>
            Du ved, hvad du betaler, hvad der er inkluderet, og hvem der hjælper dig,
            hvis noget skal justeres.
          </p>
          <div className="asideStats">
            <div><strong>0,-</strong><span>for designudkastet</span></div>
            <div><strong>24t</strong><span>typisk svarramme</span></div>
            <div><strong>1</strong><span>fast månedlig pris</span></div>
          </div>
          <a className="goldButton" href="#kontakt">Skriv til os i dag</a>
        </aside>
      </div>
    </section>
  )
}

function ProofSection() {
  return (
    <section className="section proofSection">
      <div className="sectionHeader">
        <span className="rule"></span>
        <p className="label">Kvalitet i praksis</p>
        <h2>
          Når kvaliteten kan mærkes af dine kunder.
        </h2>
      </div>
      <div className="proofLayout">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1100&auto=format&fit=crop&q=84" alt="Roligt og professionelt kontormiljø med arbejdspladser" />
        <div>
          <p>
            Kvalitet handler ikke kun om farver og flotte billeder. Det handler om, at en
            besøgende hurtigt forstår hvem du er, hvad du tilbyder, hvorfor du er værd at
            kontakte, og hvordan de nemt kommer videre.
          </p>
          <p>
            Derfor bygger vi siden med klare sektioner, rolige budskaber, tydelige knapper,
            god mobilvisning og en teknisk opsætning, der ikke står i vejen for din forretning.
            Resultatet skal føles professionelt for kunden og overskueligt for dig.
          </p>
          <div className="caseTags">
            <span>Håndværker</span>
            <span>Klinik</span>
            <span>Konsulent</span>
            <span>Servicefirma</span>
            <span>Lokal butik</span>
            <span>Ny virksomhed</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section testimonialsSection">
      <div className="sectionHeader">
        <span className="rule"></span>
        <p className="label">Sådan fungerer samarbejdet</p>
        <h2>
          En enkel proces uden teknisk støj.
        </h2>
        <p>
          I stedet for at vise anmeldelser, vi ikke har endnu, forklarer vi præcist, hvad du kan
          forvente: en rolig proces, et konkret udkast og hjælp til alt det praktiske omkring siden.
        </p>
      </div>
      <div className="collaborationGrid">
        {collaborationSteps.map(([number, title, text]) => (
          <article className="collaborationCard" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(faqItems[0].question)

  return (
    <section className="section faqSection" id="faq">
      <div className="faqIntro">
        <span className="rule"></span>
        <p className="label">Spørgsmål og svar</p>
        <h2>
          Det korte svar, før vi tager snakken.
        </h2>
        <p>
          Her er de spørgsmål, de fleste stiller først. Mangler du noget, så skriv,
          og vi svarer konkret.
        </p>
        <a className="secondaryButton" href="#kontakt">Kontakt os direkte</a>
      </div>

      <div className="faqList">
        {faqItems.map((item) => {
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
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contactSection" id="kontakt">
      <div className="contactCopy">
        <span className="rule"></span>
        <p className="label">Tag det første skridt</p>
        <h2>
          Klar til en hjemmeside du er <em>stolt af?</em>
        </h2>
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
          <span>
            Bifrost <em>Solutions</em>
          </span>
        </a>
        <p>Professionelle hjemmesider til danske virksomheder. Fast pris, ingen binding og drift du kan regne med.</p>
      </div>

      <div className="footerLinks">
        <a href="/privatlivspolitik">Privatlivspolitik</a>
        <a href="/cookiepolitik">Cookiepolitik</a>
        <a href="#kontakt">Kontakt</a>
      </div>

      <p className="footerCompany">Bifrostsolutions · CVR 46504372 · Kontakt nr. +45 50 65 49 00</p>
    </footer>
  )
}

function PolicyPage({ type }) {
  const isPrivacy = type === 'privacy'

  return (
    <main>
      <Nav />
      <section className="policyPage">
        <p className="label">{isPrivacy ? 'Privatliv' : 'Cookies'}</p>
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
      <Marquee />
      <ServicesSection />
      <ProcessSection />
      <PriceSection />
      <ProofSection />
      <TestimonialsSection />
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
