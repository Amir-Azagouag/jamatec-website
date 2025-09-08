import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Award, TrendingUp, Coffee, Heart, Globe, Mail, MapPin, Clock, Zap } from "lucide-react";

export default function WerkenBijPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/jamatec-logo.avif" alt="JamaTec Logo" className="h-8 w-auto" />
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                  Sinds 2004
                </Badge>
              </Link>
              <div className="hidden md:flex items-center space-x-1 ml-8">
                <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Home
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Diensten
                </Link>
                <Link href="/over-ons" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Over Ons
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg">
                Begin Nu
              </Button>
              <Button variant="destructive" className="bg-orange-600 hover:bg-orange-700 border-orange-600 text-white font-bold px-6 py-2 rounded-lg flex items-center space-x-2 animate-pulse">
                <Zap className="h-4 w-4" />
                <span>24/7 NOODLIJN</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">{/* Added pt-32 for fixed nav */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Werken bij <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">JamaTec</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            Word onderdeel van ons team van cybersecurity experts en help organisaties bij het beveiligen van hun digitale toekomst
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
            <Link href="#vacatures">
              Bekijk Vacatures
            </Link>
          </Button>
        </div>
      </section>

      {/* Why JamaTec */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Waarom JamaTec?</h2>
            <p className="text-gray-400 text-lg">Ontdek wat het betekent om bij een cybersecurity pionier te werken</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">21 Jaar Expertise</CardTitle>
                <CardDescription className="text-gray-400">
                  Leer van de beste professionals in de cybersecurity branche
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Bij JamaTec werk je met experts die al meer dan 21 jaar actief zijn in IT en cybersecurity. 
                  Je krijgt de kans om van hen te leren en je expertise verder te ontwikkelen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Persoonlijke Groei</CardTitle>
                <CardDescription className="text-gray-400">
                  Ontwikkel jezelf in een stimulerende omgeving
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We investeren in jouw ontwikkeling met trainingen, certificeringen en de nieuwste technologieën. 
                  Bij ons krijg je de ruimte om te groeien en nieuwe vaardigheden te ontwikkelen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Team Spirit</CardTitle>
                <CardDescription className="text-gray-400">
                  Werk samen met gedreven professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Ons team bestaat uit gepassioneerde professionals die elkaar ondersteunen. 
                  We geloven in samenwerking, kennis delen en samen groeien.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Work-Life Balance</CardTitle>
                <CardDescription className="text-gray-400">
                  Flexibiliteit en ruimte voor een gezond evenwicht
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We begrijpen het belang van een goede work-life balance. Flexibele werktijden, 
                  thuiswerkmogelijkheden en aandacht voor jouw welzijn staan centraal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Betekenisvol Werk</CardTitle>
                <CardDescription className="text-gray-400">
                  Draag bij aan een veiligere digitale wereld
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Bij JamaTec werk je aan projecten die er echt toe doen. Je helpt organisaties 
                  zich te beschermen tegen cyberdreigingen en draagt bij aan een veiligere samenleving.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Innovatie</CardTitle>
                <CardDescription className="text-gray-400">
                  Werk met de nieuwste technologieën en methodieken
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We blijven vooroplopen met de nieuwste ontwikkelingen in cybersecurity. 
                  Je werkt met cutting-edge technologie en krijgt toegang tot de beste tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Wat Bieden Wij?</h2>
            <p className="text-gray-400 text-lg">Uitstekende arbeidsvoorwaarden en secundaire voorwaarden</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-xl">Primaire Voorwaarden</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Marktconform salaris op basis van ervaring
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Flexibele werktijden en thuiswerkmogelijkheden
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Uitstekende pensioenregeling
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Reiskostenvergoeding of leaseauto
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    25 vakantiedagen + feestdagen
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-xl">Ontwikkeling & Voordelen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Opleidingsbudget voor trainingen en certificeringen
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Laptop en professionele tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Deelname aan conferenties en events
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Teamuitjes en bedrijfsfeesten
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    Uitstekende koffie en gezonde snacks
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Vacancies */}
      <section id="vacatures" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Actuele Vacatures</h2>
            <p className="text-gray-400 text-lg">Vind jouw ideale rol bij JamaTec</p>
          </div>

          <div className="space-y-6">
            {/* Senior Cybersecurity Consultant */}
            <Card className="bg-slate-800 border-slate-600 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">Senior Cybersecurity Consultant</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Fulltime</Badge>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">Senior Level</Badge>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Nieuwegein</Badge>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Solliciteer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We zoeken een ervaren cybersecurity consultant om ons team te versterken. Je werkt aan 
                  uitdagende projecten voor enterprise klanten en helpt bij het implementeren van 
                  geavanceerde beveiligingsoplossingen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat verwachten we:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• HBO/WO opleiding in IT of Security</li>
                      <li>• 5+ jaar ervaring in cybersecurity</li>
                      <li>• Certificeringen (CISSP, CISM, etc.)</li>
                      <li>• Ervaring met penetration testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat ga je doen:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Security assessments uitvoeren</li>
                      <li>• Klanten adviseren over security</li>
                      <li>• Compliance trajecten begeleiden</li>
                      <li>• Incident response ondersteuning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Analyst */}
            <Card className="bg-slate-800 border-slate-600 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">Security Analyst (SOC)</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Fulltime</Badge>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-400">Medior Level</Badge>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Nieuwegein</Badge>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-400">24/7</Badge>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Solliciteer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Voor ons Security Operations Center zoeken we een gedreven security analyst. Je monitort 
                  24/7 de IT-infrastructuur van onze klanten en reageert op security incidents.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat verwachten we:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• MBO/HBO opleiding in IT</li>
                      <li>• 2+ jaar ervaring in security</li>
                      <li>• Kennis van SIEM tools</li>
                      <li>• Bereidheid tot ploegendienst</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat ga je doen:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Security events monitoren</li>
                      <li>• Incidents onderzoeken en analyseren</li>
                      <li>• Rapportages opstellen</li>
                      <li>• Klanten adviseren bij incidenten</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Junior IT Security Specialist */}
            <Card className="bg-slate-800 border-slate-600 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">Junior IT Security Specialist</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Fulltime</Badge>
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">Junior Level</Badge>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Nieuwegein</Badge>
                      <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">Starter</Badge>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Solliciteer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ben je recent afgestudeerd en wil je starten in de cybersecurity? Deze positie biedt 
                  je de perfecte kans om je carrière te beginnen onder begeleiding van ervaren professionals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat verwachten we:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• HBO opleiding in IT of Security</li>
                      <li>• Affiniteit met cybersecurity</li>
                      <li>• Leergierigheid en motivatie</li>
                      <li>• Goede communicatieve vaardigheden</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Wat bieden we:</h4>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Uitgebreid trainingsprogramma</li>
                      <li>• Persoonlijke mentor</li>
                      <li>• Certificeringsmogelijkheden</li>
                      <li>• Doorgroeimogelijkheden</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Zie je geen passende vacature maar ben je wel geïnteresseerd in werken bij JamaTec?
            </p>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Stuur een open sollicitatie
            </Button>
          </div>
        </div>
      </section>

      {/* Contact for Applications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Solliciteren?</h2>
            <p className="text-gray-400 text-lg">We horen graag van je!</p>
          </div>

          <Card className="bg-slate-800 border-slate-600">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">
                      careers@jamatec.nl<br />
                      <span className="text-sm text-gray-400">CV + motivatiebrief</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Locatie</h3>
                    <p className="text-gray-300">
                      De Liesbosch 12-A<br />
                      3439 LC Nieuwegein
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Responstijd</h3>
                    <p className="text-gray-300">
                      Binnen 5 werkdagen<br />
                      <span className="text-sm text-gray-400">Persoonlijke reactie</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klaar voor de volgende stap?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Word onderdeel van het JamaTec team en bouw mee aan een veiligere digitale wereld
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
              <Link href="/contact">
                Contact Opnemen
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3" asChild>
              <Link href="/over-ons">
                Leer Ons Kennen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
