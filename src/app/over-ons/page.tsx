import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, Calendar, Zap } from "lucide-react";

export default function OverOnsPage() {
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
                <Link href="/over-ons" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30">
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
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Begin Nu →
                </Button>
              </Link>
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
            Over <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">JamaTec</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Opgericht 1 maart 2004 - 21 jaar ervaring in IT en cybersecurity
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Wie Zijn Wij</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              JamaTec Kantoorautomatisering B.V. is opgericht door Jamal Azagouag in maart 2004. 
              Met meer dan 21 jaar ervaring zijn wij uitgegroeid van een kleine kantoorautomatisering specialist 
              tot een volledige IT en cybersecurity partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Jamal Azagouag */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xl">JA</span>
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Jamal Azagouag</CardTitle>
                    <CardDescription className="text-blue-400 text-lg">Eigenaar & Oprichter</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Jamal is de drijvende kracht achter JamaTec. Met zijn visie op IT-automatisering en 
                    cybersecurity heeft hij het bedrijf vanaf de oprichting in 2004 geleid naar waar het nu staat. 
                    Zijn expertise ligt in strategische IT-planning en het vertalen van complexe technische 
                    oplossingen naar praktische bedrijfsvoering.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Bij JamaTec sinds: 1 maart 2004</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:jamal@jamatec.nl" className="text-blue-400 hover:text-blue-300 transition-colors">
                      jamal@jamatec.nl
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Specialisatie: IT Strategie & Cybersecurity</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amir Azagouag */}
            <Card className="bg-slate-800 border-slate-600">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <span className="text-indigo-400 font-bold text-xl">AA</span>
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl">Amir Azagouag</CardTitle>
                    <CardDescription className="text-indigo-400 text-lg">Technisch Specialist</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Amir, zoon van oprichter Jamal Azagouag, brengt frisse technische expertise en innovatie naar JamaTec. 
                    Hij zorgt ervoor dat we altijd voorop lopen met de nieuwste technologieën en beveiligingsmethoden. 
                    Zijn focus ligt op de implementatie van geavanceerde IT-oplossingen en het waarborgen 
                    van de hoogste kwaliteitsstandaarden.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-gray-300">Bij JamaTec sinds: 2019</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-indigo-400" />
                    <a href="mailto:amir@jamatec.nl" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      amir@jamatec.nl
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <a href="https://nl.linkedin.com/in/amir-azagouag-053b18210" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      LinkedIn Profiel
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span className="text-gray-300">Specialisatie: Technische Implementatie & Innovatie</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Bezoek Ons</h2>
            <p className="text-gray-400 text-lg">Kom langs op ons kantoor in Nieuwegein</p>
          </div>

          <Card className="bg-slate-800 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-xl text-center">JamaTec Kantoorautomatisering B.V.</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Adres</h3>
                    <p className="text-gray-300">
                      De Liesbosch 12-A<br />
                      3439 LC Nieuwegein<br />
                      Nederland
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Telefoon</h3>
                    <p className="text-gray-300">
                      030 657 9006<br />
                      <span className="text-red-400">24/7 Noodlijn</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">
                      info@jamatec.nl<br />
                      security@jamatec.nl
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Onze Geschiedenis</h2>
            <p className="text-gray-400 text-lg">21 jaar groei en innovatie</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-blue-500/30"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">1 maart 2004</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">Oprichting JamaTec</h4>
                    <p className="text-gray-400">Start als kantoorautomatisering specialist met focus op kleine en middelgrote bedrijven.</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">2019</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">Uitbreiding Team</h4>
                    <p className="text-gray-400">Amir Azagouag sluit zich aan bij het JamaTec team, waarmee de technische expertise significant wordt versterkt.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">2010</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">Eerste Cybersecurity Diensten</h4>
                    <p className="text-gray-400">Uitbreiding naar beveiligingsoplossingen en proactieve IT-monitoring.</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">2015</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">Penetration Testing</h4>
                    <p className="text-gray-400">Start van ethical hacking services en uitgebreide security assessments.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">2020</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">24/7 SOC Diensten</h4>
                    <p className="text-gray-400">Lancering van ons Security Operations Center voor continue monitoring.</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">2025</h3>
                    <h4 className="text-lg font-semibold text-white mb-2">Volledige Cybersecurity Suite</h4>
                    <p className="text-gray-400">Complete integratie van IT-automatisering en geavanceerde cybersecurity diensten.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klaar om samen te werken?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Neem contact op voor een vrijblijvende kennismaking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
              <Link href="/contact">
                Contact Opnemen
              </Link>
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3" asChild>
              <Link href="/services">
                Onze Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-8 px-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 JamaTec Kantoorautomatisering B.V. Alle rechten voorbehouden.
        </p>
      </footer>
    </div>
  );
}
