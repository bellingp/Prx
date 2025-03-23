import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Impressum() {
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

        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Vorname Nachname
              <br />
              Praxis für Psychotherapie
              <br />
              Musterstraße 123
              <br />
              67059 Ludwigshafen am Rhein
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Kontakt</h2>
            <p>
              Telefon: +49 123 456789
              <br />
              E-Mail: info@praxis-psychotherapie.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Psychologische Psychotherapeutin
              <br />
              Zuständige Kammer: Landespsychotherapeutenkammer Rheinland-Pfalz
              <br />
              Berufsrechtliche Regelungen: Psychotherapeutengesetz, Berufsordnung der Landespsychotherapeutenkammer
              Rheinland-Pfalz
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Aufsichtsbehörde</h2>
            <p>
              Kassenärztliche Vereinigung Rheinland-Pfalz
              <br />
              Isaac-Fulda-Allee 14
              <br />
              55124 Mainz
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
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

