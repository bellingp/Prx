import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium mb-6 hover:text-[#FFCC00] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
              Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Vorname Nachname
              <br />
              Praxis für Psychotherapie
              <br />
              Musterstraße 123
              <br />
              67059 Ludwigshafen am Rhein
            </p>
            <p>
              Telefon: +49 123 456789
              <br />
              E-Mail: info@praxis-psychotherapie.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Cookies</h3>
            <p>Diese Website verwendet keine Cookies für Analysezwecke oder zur Personalisierung von Inhalten.</p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Anfrage per E-Mail, Telefon oder Fax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Fax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Besondere Hinweise für Patienten</h2>
            <p>
              Als Psychotherapeutin unterliege ich der Schweigepflicht gemäß § 203 StGB. Alle Informationen, die Sie mir
              im Rahmen der Therapie anvertrauen, werden streng vertraulich behandelt.
            </p>
            <p>
              Die Verarbeitung Ihrer Gesundheitsdaten erfolgt auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO in Verbindung
              mit § 22 Abs. 1 Nr. 1 lit. b BDSG.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Praxis für Psychotherapie Ludwigshafen. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  )
}

