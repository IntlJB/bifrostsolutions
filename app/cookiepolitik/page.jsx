import PolicyPage from '../../components/PolicyPage'

export const metadata = {
  title: 'Cookiepolitik | Bifrost Solutions',
  description: 'Læs hvordan Bifrost Solutions bruger nødvendige funktioner og Google Analytics efter dit samtykke.',
  alternates: { canonical: '/cookiepolitik' },
}

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      eyebrow="Senest opdateret 22. juni 2026"
      title="Cookiepolitik"
      introduction="Her kan du læse, hvilke teknologier bifrostsolutions.dk bruger, hvorfor vi bruger dem, og hvordan du ændrer dit valg."
    >
      <section>
        <h2>Hvem er ansvarlig?</h2>
        <p>Bifrost Solutions, CVR 46504372, er ansvarlig for hjemmesidens brug af cookies og lignende teknologier. Du kan kontakte os på <a href="mailto:kontakt@bifrostsolutions.dk">kontakt@bifrostsolutions.dk</a> eller +45 50 65 49 00.</p>
      </section>
      <section>
        <h2>Nødvendig lagring</h2>
        <p>Vi gemmer dit valg om statistikcookies i browserens lokale lager under navnet <code>bifrost_cookie_consent_v1</code>. Det er nødvendigt for at huske, om du har accepteret eller afvist. Oplysningen sendes ikke til Bifrost Solutions eller andre.</p>
      </section>
      <section>
        <h2>Google Analytics 4</h2>
        <p>Hvis du accepterer statistikcookies, bruger vi Google Analytics 4 med målings-id <code>G-44LJ04547K</code>. Formålet er at forstå antal besøg, brugte sider, omtrentligt geografisk område samt browser- og enhedstype, så vi kan forbedre hjemmesiden.</p>
        <div className="policy-table-wrap">
          <table>
            <thead><tr><th>Cookie</th><th>Formål</th><th>Typisk levetid</th></tr></thead>
            <tbody>
              <tr><td><code>_ga</code></td><td>Skelner mellem besøgende.</td><td>Op til 2 år</td></tr>
              <tr><td><code>_ga_&lt;container-id&gt;</code></td><td>Bevarer oplysninger om en session.</td><td>Op til 2 år</td></tr>
            </tbody>
          </table>
        </div>
        <p>Browserbegrænsninger eller Googles indstillinger kan forkorte levetiden. Google beskriver cookies i sin <a href="https://support.google.com/analytics/answer/11397207" target="_blank" rel="noopener noreferrer">GA4-cookieoversigt</a> og sin behandling i <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googles privatlivspolitik</a>.</p>
      </section>
      <section>
        <h2>Dit samtykke</h2>
        <p>Google Analytics indlæses ikke, før du vælger <strong>Accepter</strong>. Vælger du <strong>Afvis</strong>, sender hjemmesiden ikke Analytics-data til Google. Du kan altid ændre dit valg via <strong>Cookieindstillinger</strong> nederst på siden. Når du genåbner indstillingerne, nulstilles valget, og eventuelle Analytics-cookies forsøges slettet.</p>
        <p>Du kan også slette eller blokere cookies i browserens privatlivsindstillinger.</p>
      </section>
      <section>
        <h2>Ændringer</h2>
        <p>Vi opdaterer politikken, hvis hjemmesidens brug af cookies eller leverandører ændres. Ved væsentlige ændringer kan vi bede dig vælge igen.</p>
      </section>
    </PolicyPage>
  )
}
