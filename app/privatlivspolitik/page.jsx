import PolicyPage from '../../components/PolicyPage'

export const metadata = {
  title: 'Privatlivspolitik | Bifrost Solutions',
  description: 'Læs hvordan Bifrost Solutions behandler personoplysninger ved kontakt, tilbud, kundeforhold og brug af hjemmesiden.',
  alternates: { canonical: '/privatlivspolitik' },
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Senest opdateret 22. juni 2026"
      title="Privatlivspolitik"
      introduction="Denne politik forklarer, hvordan Bifrost Solutions behandler personoplysninger, når du kontakter os, indhenter et tilbud, bliver kunde eller giver samtykke til statistik."
    >
      <section>
        <h2>Dataansvarlig</h2>
        <p>Bifrost Solutions, CVR 46504372, er dataansvarlig. Spørgsmål og anmodninger kan sendes til <a href="mailto:kontakt@bifrostsolutions.dk">kontakt@bifrostsolutions.dk</a> eller rettes på +45 50 65 49 00.</p>
      </section>
      <section>
        <h2>Oplysninger vi behandler</h2>
        <p>Når du kontakter os via e-mail eller telefon, kan vi behandle navn, kontaktoplysninger, virksomhedsoplysninger og indholdet af din henvendelse. Ved tilbud og kundeforhold kan vi desuden behandle aftale-, fakturerings-, betalings- og projektoplysninger.</p>
        <p>Hvis du accepterer statistikcookies, modtager Google Analytics oplysninger om brug af hjemmesiden, herunder sidevisninger, omtrentligt geografisk område samt browser- og enhedstype. Læs mere i vores <a href="/cookiepolitik">cookiepolitik</a>.</p>
      </section>
      <section>
        <h2>Formål og behandlingsgrundlag</h2>
        <ul>
          <li>Vi besvarer henvendelser og udarbejder tilbud ud fra vores legitime interesse i at drive og udvikle virksomheden.</li>
          <li>Vi behandler kunde- og projektoplysninger for at indgå og opfylde aftaler.</li>
          <li>Vi opbevarer regnskabsmateriale for at overholde retlige forpligtelser.</li>
          <li>Vi bruger kun Google Analytics på grundlag af dit samtykke.</li>
        </ul>
      </section>
      <section>
        <h2>Modtagere og leverandører</h2>
        <p>Oplysninger kan behandles af leverandører af hosting, e-mail, regnskab og andre nødvendige driftssystemer efter vores instruktion. Når Analytics er accepteret, modtager Google oplysninger om brugen af hjemmesiden. Nogle leverandører kan behandle oplysninger uden for EU/EØS på et gyldigt overførselsgrundlag og med relevante sikkerhedsforanstaltninger.</p>
      </section>
      <section>
        <h2>Opbevaring og sikkerhed</h2>
        <p>Vi opbevarer kun oplysninger, så længe de er nødvendige for formålet eller følger af lovgivningen. Henvendelser uden efterfølgende aftale slettes eller anonymiseres, når de ikke længere er relevante. Kunde- og regnskabsoplysninger opbevares efter de frister, som gældende bogførings- og dokumentationskrav kræver.</p>
        <p>Vi anvender passende tekniske og organisatoriske sikkerhedsforanstaltninger og begrænser adgang til personer og leverandører med et sagligt behov.</p>
      </section>
      <section>
        <h2>Dine rettigheder</h2>
        <p>Afhængigt af situationen kan du have ret til indsigt, berigtigelse, sletning, begrænsning, dataportabilitet og indsigelse. Du kan til enhver tid trække et Analytics-samtykke tilbage via cookieindstillingerne i footeren. Tilbagetrækning ændrer ikke lovligheden af behandling, der allerede er foretaget.</p>
        <p>Kontakt os, hvis du vil bruge dine rettigheder. Du kan også læse om rettigheder og klagemuligheder hos <a href="https://www.datatilsynet.dk/borger/hvad-er-dine-rettigheder" target="_blank" rel="noopener noreferrer">Datatilsynet</a> eller klage til Datatilsynet.</p>
      </section>
      <section>
        <h2>Ændringer</h2>
        <p>Vi kan opdatere privatlivspolitikken, når vores behandling, hjemmeside eller leverandører ændres. Den aktuelle dato fremgår øverst.</p>
      </section>
    </PolicyPage>
  )
}
