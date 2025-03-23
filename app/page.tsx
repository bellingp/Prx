"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Bus, Car, ExternalLink, Clock, ChevronUp, Calendar, FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=180"
              alt="Praxis für Psychotherapie Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#home" className="font-medium transition-colors hover:text-[#FFCC00]">
              Home
            </Link>
            <Link href="#aktuelles" className="font-medium transition-colors hover:text-[#FFCC00]">
              Aktuelles
            </Link>
            <Link href="#therapieangebot" className="font-medium transition-colors hover:text-[#FFCC00]">
              Therapieangebot
            </Link>
            <Link href="#zielgruppe" className="font-medium transition-colors hover:text-[#FFCC00]">
              Zielgruppe
            </Link>
            <Link href="#kosten" className="font-medium transition-colors hover:text-[#FFCC00]">
              Kosten
            </Link>
            <Link href="#ueber-mich" className="font-medium transition-colors hover:text-[#FFCC00]">
              Über mich
            </Link>
            <Link href="#anfahrt" className="font-medium transition-colors hover:text-[#FFCC00]">
              Anfahrt
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-gray-600" />
              <span className="text-sm">+49 123 456789</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-gray-600" />
              <span className="text-sm">info@praxis-psychotherapie.de</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden flex items-center">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-tight">
                <span className="highlight-yellow">Praxis für Psychotherapie</span> in Ludwigshafen
              </h1>
              <p className="text-xl text-muted-foreground">
                Professionelle psychotherapeutische Unterstützung in einer vertrauensvollen Umgebung.
              </p>
              <div>
                <a href="#kontakt" className="btn-primary inline-block">
                  Termin vereinbaren
                </a>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Praxis für Psychotherapie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Aktuelles Section */}
        <section id="aktuelles" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              <span className="highlight-underline">Aktuelles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span>15. März 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Neue Therapiegruppe für Angststörungen</h3>
                <p className="text-muted-foreground mb-4">
                  Ab April starte ich eine neue Therapiegruppe für Menschen mit Angststörungen. Die Gruppe findet
                  wöchentlich statt und bietet einen geschützten Raum für Austausch und therapeutische Übungen.
                </p>
                <a href="#" className="text-[#FFCC00] hover:underline font-medium inline-flex items-center">
                  Mehr erfahren
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 text-gray-600" />
                  <span>28. Februar 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Praxisurlaub im Sommer</h3>
                <p className="text-muted-foreground mb-4">
                  Vom 1. bis 21. August bleibt die Praxis wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich
                  bitte an den psychotherapeutischen Notdienst unter der Nummer 0800-1110111.
                </p>
                <a href="#" className="text-[#FFCC00] hover:underline font-medium inline-flex items-center">
                  Mehr erfahren
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="py-12 bg-white border-y border-gray-200">
          <div className="container">
            <div className="rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    <span className="highlight-underline">Erstgespräch buchen</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Wenn Sie Fragen haben oder sich für eine Psychotherapie interessieren, freue ich mich über Ihren
                    Anruf während meiner telefonischen Sprechzeiten. Alternativ können Sie mir auch gerne eine Nachricht
                    senden. Bitte geben Sie dabei unbedingt Ihre Telefonnummer an, da Terminvereinbarungen
                    ausschließlich telefonisch erfolgen.
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <span>+49 123 456789</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <span>info@praxis-psychotherapie.de</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Telefonische Sprechstundenzeiten</h2>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <span>Montag - Freitag: 9:00 - 12:00 Uhr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-600" />
                      <span>Dienstag & Donnerstag: 14:00 - 17:00 Uhr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Therapieangebot Section */}
        <section id="therapieangebot" className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              <span className="highlight-underline">Therapieangebot</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Einzeltherapie */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border card-hover">
                <div className="h-16 w-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Einzeltherapie</h3>
                <p className="text-muted-foreground">
                  Individuelle therapeutische Begleitung für Erwachsene bei verschiedenen psychischen Belastungen und
                  Erkrankungen.
                </p>
              </div>

              {/* ADHS-Diagnostik */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border card-hover">
                <div className="h-16 w-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">ADHS-Diagnostik</h3>
                <p className="text-muted-foreground">
                  Professionelle Diagnostik und Behandlung von Aufmerksamkeitsdefizit-Hyperaktivitätsstörung bei
                  Erwachsenen.
                </p>
              </div>

              {/* Terapia em Português */}
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border card-hover">
                <div className="h-16 w-16 rounded-full bg-[#FFCC00]/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Terapia em Português</h3>
                <p className="text-muted-foreground">
                  Atendimento psicoterapêutico em língua portuguesa para pacientes que preferem se expressar em seu
                  idioma nativo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zielgruppe Section */}
        <section id="zielgruppe" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Zielgruppe" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  <span className="highlight-underline">Zielgruppe</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Mein Therapieangebot richtet sich an Erwachsene ab 18 Jahren, die unter verschiedenen psychischen
                  Belastungen leiden. Dazu gehören unter anderem:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Depressionen und Angststörungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>ADHS im Erwachsenenalter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Belastungs- und Anpassungsstörungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Portugiesischsprachige Patienten</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Kosten Section */}
        <section id="kosten" className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  <span className="highlight-underline">Kosten</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Die Kosten für psychotherapeutische Behandlungen werden in der Regel von den gesetzlichen und privaten
                  Krankenkassen übernommen.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white shadow-sm border card-hover">
                    <h3 className="text-xl font-semibold mb-2">Gesetzlich Versicherte</h3>
                    <p className="text-muted-foreground">
                      Mit Überweisung vom Hausarzt oder Facharzt werden die Kosten direkt mit der Krankenkasse
                      abgerechnet.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white shadow-sm border card-hover">
                    <h3 className="text-xl font-semibold mb-2">Privat Versicherte</h3>
                    <p className="text-muted-foreground">
                      Die Abrechnung erfolgt nach der Gebührenordnung für Psychotherapeuten (GOP). Bitte klären Sie
                      vorab mit Ihrer Versicherung die Kostenübernahme.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white shadow-sm border card-hover">
                    <h3 className="text-xl font-semibold mb-2">Selbstzahler</h3>
                    <p className="text-muted-foreground">
                      Für Selbstzahler biete ich faire Konditionen an. Sprechen Sie mich gerne auf individuelle
                      Vereinbarungen an.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden order-1 md:order-2 shadow-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Kosten" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Über mich Section */}
        <section id="ueber-mich" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Über mich" fill className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  <span className="highlight-underline">Über mich</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Als approbierte Psychotherapeutin mit langjähriger Erfahrung biete ich Ihnen professionelle
                  Unterstützung bei der Bewältigung psychischer Belastungen und Erkrankungen.
                </p>
                <p className="text-lg text-muted-foreground">
                  Mein therapeutischer Ansatz basiert auf evidenzbasierten Methoden der kognitiven Verhaltenstherapie,
                  die ich individuell auf Ihre Bedürfnisse abstimme.
                </p>
                <p className="text-lg text-muted-foreground">
                  Als gebürtige Brasilianerin biete ich zudem Therapie in portugiesischer Sprache an, um auch
                  portugiesischsprachigen Patienten die Möglichkeit zu geben, sich in ihrer Muttersprache auszudrücken.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">Qualifikationen</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Approbation als Psychologische Psychotherapeutin</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Fachkunde in kognitiver Verhaltenstherapie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Spezialisierung in ADHS-Diagnostik und -Behandlung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anfahrt Section */}
        <section id="anfahrt" className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              <span className="highlight-underline">Anfahrt</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Musterstraße 123
                        <br />
                        67059 Ludwigshafen am Rhein
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Bus className="h-6 w-6 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Öffentliche Verkehrsmittel</h3>
                      <p className="text-muted-foreground">
                        Bus: Linien 75, 76 und 77, Haltestelle "Musterplatz"
                        <br />
                        Straßenbahn: Linie 6 und 7, Haltestelle "Musterstraße"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="h-6 w-6 text-gray-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Mit dem Auto</h3>
                      <p className="text-muted-foreground">
                        Über die A650, Ausfahrt Ludwigshafen-Mitte.
                        <br />
                        Parkplätze sind in der Tiefgarage "Musterplatz" verfügbar (ca. 3 Gehminuten).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Karte" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium">Statische Karte</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#FFCC00]">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="hover:text-[#FFCC00] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#aktuelles" className="hover:text-[#FFCC00] transition-colors">
                    Aktuelles
                  </Link>
                </li>
                <li>
                  <Link href="#therapieangebot" className="hover:text-[#FFCC00] transition-colors">
                    Therapieangebot
                  </Link>
                </li>
                <li>
                  <Link href="#zielgruppe" className="hover:text-[#FFCC00] transition-colors">
                    Zielgruppe
                  </Link>
                </li>
                <li>
                  <Link href="#kosten" className="hover:text-[#FFCC00] transition-colors">
                    Kosten
                  </Link>
                </li>
                <li>
                  <Link href="#ueber-mich" className="hover:text-[#FFCC00] transition-colors">
                    Über mich
                  </Link>
                </li>
                <li>
                  <Link href="#anfahrt" className="hover:text-[#FFCC00] transition-colors">
                    Anfahrt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#FFCC00]">Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Musterstraße 123
                    <br />
                    67059 Ludwigshafen am Rhein
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>+49 123 456789</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span>info@praxis-psychotherapie.de</span>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#FFCC00]">Rechtliches</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                  <Link href="/impressum" className="hover:text-[#FFCC00] transition-colors">
                    Impressum
                  </Link>
                </li>
                <li className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                  <Link href="/datenschutz" className="hover:text-[#FFCC00] transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Praxis für Psychotherapie Ludwigshafen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        className="back-to-top"
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Zurück zum Anfang"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* Script to show/hide back to top button */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const backToTopButton = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
              if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
              } else {
                backToTopButton.classList.remove('visible');
              }
            });
          });
        `,
        }}
      />
    </div>
  )
}

