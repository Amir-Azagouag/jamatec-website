import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Terminal, Network, Lock, Zap, Code, Phone, Mail, MapPin, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden scroll-smooth">
      {/* Matrix Rain Background Effect */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.blue.500/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.blue.500/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Navigation */}
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
                <Link href="/" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30">
                  Home
                </Link>
                <div className="relative group">
                  <Link href="/services" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30 flex items-center">
                    Diensten
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-slate-800 border border-slate-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <Link href="/services/penetration-testing" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        Penetration Testing
                      </Link>
                      <Link href="/services/soc-monitoring" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        SOC Monitoring
                      </Link>
                      <Link href="/services/incident-response" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        Incident Response
                      </Link>
                      <Link href="/services/compliance" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        Compliance
                      </Link>
                      <Link href="/services/security-training" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        Security Training
                      </Link>
                      <Link href="/services/security-consultancy" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 rounded">
                        Security Consultancy
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/over-ons" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Over Ons
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Blog
                </Link>
                <Link href="/werken-bij" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Werken Bij
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">{/* Increased pt for fixed nav */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Clean Hero Content */}
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">21 jaar</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                betrouwbare IT-expertise
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              <span className="text-blue-400 font-bold">Opgericht 1 maart 2004</span> - uw partner in cybersecurity & IT-infrastructure. 
              Van kantoorautomatisering tot geavanceerde threat detection en incident response.
              <br /><span className="text-green-400 font-semibold">500+ tevreden klanten • 24/7 noodlijn • ISO 27001 gecertificeerd</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300">
                Gratis Consultatie
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg rounded-lg transition-all duration-300">
                Onze Diensten
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-32">
                <div className="text-2xl font-bold text-blue-400">21+</div>
                <div className="text-sm text-gray-400">Jaar ervaring</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-32">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Tevreden klanten</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 min-w-32">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">Ondersteuning</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Onze Diensten</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Van kantoorautomatisering tot cybersecurity - alles onder één dak
            </p>
          </div>

          {/* IT Automation Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-blue-400 mb-12 text-center flex items-center justify-center">
              <Terminal className="mr-4 h-8 w-8" />
              Kantoorautomatisering & IT-Beheer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-slate-800/90 border-slate-600 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-10 h-10 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-xl mb-3">VoIP & Telefonie</CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    Moderne telefoniesystemen en VoIP-oplossingen voor efficiënte bedrijfscommunicatie.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Cloud-based telefonie
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Integratie met bestaande systemen
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      24/7 ondersteuning
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Kostenbesparende oplossingen
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/90 border-slate-600 hover:border-indigo-400 transition-all duration-300 group hover:shadow-xl hover:shadow-indigo-500/20">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-10 h-10 text-indigo-400" />
                  </div>
                  <CardTitle className="text-white text-xl mb-3">IT-Infrastructuur</CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    Complete IT-infrastructuur planning, implementatie en beheer voor uw bedrijf.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Netwerk installatie & beheer</li>
                    <li>• Server configuratie</li>
                    <li>• Cloud migratie</li>
                    <li>• Backup & recovery</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-green-500/20 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Persoonlijk IT-Advies</CardTitle>
                  <CardDescription className="text-gray-300">
                    Uw persoonlijke IT-consultant voor maatwerk oplossingen en strategisch advies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Dedicated IT-consultant</li>
                    <li>• Strategische IT-planning</li>
                    <li>• Kostenoptimalisatie</li>
                    <li>• Proactief onderhoud</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cybersecurity Services */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">
              <Shield className="inline mr-3 h-6 w-6" />
              Cybersecurity & Threat Protection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900/80 border-red-500/30 hover:border-red-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-red-500/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-white">Ethisch Hacken</CardTitle>
                  <CardDescription className="text-gray-300">
                    Penetratietests en kwetsbaarheidsanalyses om uw beveiliging te versterken.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Netwerk penetratietests</li>
                    <li>• Webapplicatie beveiliging</li>
                    <li>• Social engineering tests</li>
                    <li>• Red team oefeningen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-yellow-500/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-red-500/20 border border-yellow-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                  <CardTitle className="text-white">24/7 SOC Monitoring</CardTitle>
                  <CardDescription className="text-gray-300">
                    Continue beveiligingsmonitoring vanuit ons Security Operations Center.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Real-time threat detection</li>
                    <li>• Incident response</li>
                    <li>• SIEM implementatie</li>
                    <li>• Threat intelligence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/80 border-green-500/30 hover:border-green-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/20">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Compliance & Training</CardTitle>
                  <CardDescription className="text-gray-300">
                    ISO 27001, NIS2, AVG compliance en beveiligingstraining voor uw team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• ISO 27001 implementatie</li>
                    <li>• AVG/GDPR compliance</li>
                    <li>• Security awareness training</li>
                    <li>• Audit ondersteuning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">21 jaar</span> ervaring, 
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">één missie</span>.
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-blue-400 font-semibold">Opgericht 1 maart 2004</span> - wij zijn uw betrouwbare IT-partner. 
                  Begonnen als kantoorautomatisering specialist, uitgegroeid tot cybersecurity expert. 
                  <span className="text-blue-300 font-semibold">21 jaar</span> aan de knoppen van systemen waar digitale risico&apos;s 
                  geen theorie zijn, maar een dagelijkse realiteit.
                </p>
                
                <p>
                  Onze missie: <span className="text-blue-400 font-semibold">het securityniveau in Nederland écht omhoog krijgen</span>. 
                  Niet met angst, maar met meer dan twee decennia aan ervaring. Wij beschermen u tegen elke denkbare dreiging. 
                  Niet met generieke rapporten, maar met concrete, uitvoerbare acties.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-white"><strong>20+ jaar</strong> ervaring in kantoorautomatisering</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-white">Uitgebreide cybersecurity expertise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-500/20 border border-slate-500 flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-white">Één aanspreekpunt voor al uw ICT-zaken</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-white">24/7 emergency response beschikbaar</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-6 text-center hover:border-green-400 transition-all duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2">20+</div>
                  <div className="text-sm text-gray-300">Jaar IT-Ervaring</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-sm text-gray-300">Projecten Voltooid</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support Beschikbaar</div>
                </div>
                
                <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400 transition-all duration-300">
                  <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Klanttevredenheid</div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-red-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Wat Onze Klanten Zeggen</h2>
            <p className="text-gray-400 text-lg">20 jaar vertrouwen en samenwerking</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold">MZ</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Mark Zeeman</h4>
                    <p className="text-gray-400 text-sm">IT Manager, LogistiekPlus</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  &quot;JamaTec heeft onze complete IT-infrastructuur opgezet en beheert deze nu al 8 jaar. 
                  Hun proactieve aanpak en 24/7 ondersteuning zijn onmisbaar voor ons bedrijf.&quot;
                </p>
                <div className="flex text-blue-400 mt-4">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <span className="text-indigo-400 font-bold">SV</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sophie van der Berg</h4>
                    <p className="text-gray-400 text-sm">CEO, HealthTech Solutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  &quot;De cybersecurity audit van JamaTec heeft kritieke kwetsbaarheden blootgelegd. 
                  Hun snelle respons en effectieve oplossingen hebben ons voor een hack behoed.&quot;
                </p>
                <div className="flex text-blue-400 mt-4">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-500/20 rounded-full flex items-center justify-center">
                    <span className="text-slate-400 font-bold">JH</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Jan Hendriks</h4>
                    <p className="text-gray-400 text-sm">Directeur, Bouwbedrijf Hendriks</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  &quot;Al 12 jaar werken wij samen met JamaTec. Van onze eerste server tot nu onze complete 
                  cloud infrastructuur - altijd betrouwbaar, altijd bereikbaar.&quot;
                </p>
                <div className="flex text-blue-400 mt-4">
                  ★★★★★
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Laatste Blog Posts</h2>
            <p className="text-gray-400 text-lg">Blijf op de hoogte van de laatste IT en cybersecurity ontwikkelingen</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
                <CardTitle className="text-white">NIS2: Wat Betekent Dit Voor Uw Bedrijf?</CardTitle>
                <CardDescription className="text-gray-400">
                  5 september 2025 • 5 min lezen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  De nieuwe NIS2 richtlijn treedt binnenkort in werking. Lees hier wat dit betekent voor uw organisatie...
                </p>
                <Button variant="outline" className="w-full">
                  Lees Meer
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <Lock className="w-12 h-12 text-indigo-400" />
                </div>
                <CardTitle className="text-white">5 Cybersecurity Trends Voor 2025</CardTitle>
                <CardDescription className="text-gray-400">
                  1 september 2025 • 8 min lezen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ontdek de belangrijkste cybersecurity trends die uw bedrijf in 2025 zal beïnvloeden...
                </p>
                <Button variant="outline" className="w-full">
                  Lees Meer
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <Terminal className="w-12 h-12 text-slate-400" />
                </div>
                <CardTitle className="text-white">Cloud Migratie: Een Stap-voor-Stap Gids</CardTitle>
                <CardDescription className="text-gray-400">
                  28 augustus 2025 • 12 min lezen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Alles wat u moet weten over een succesvolle migratie naar de cloud...
                </p>
                <Button variant="outline" className="w-full">
                  Lees Meer
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Bekijk Alle Blog Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Klaar om uw <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">beveiliging</span> te versterken?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Begin met een uitgebreide beveiligingsanalyse en ontdek hoe JamaTec uw organisatie kan beschermen 
              tegen de nieuwste cyberdreigingen. Van IT-automatisering tot geavanceerde threat protection.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                <Shield className="mr-2 h-5 w-5" />
                Plan Gratis Consultatie
              </Button>
            </Link>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg rounded-lg transition-all duration-300">
              <Terminal className="mr-2 h-5 w-5" />
              Download Beveiligingsgids
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Noodgeval? 24/7 beschikbaar</p>
            <Button variant="destructive" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
              <Phone className="mr-2 h-4 w-4" />
              030 657 9006
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-3">
                  <img src="/jamatec-logo.avif" alt="JamaTec Logo" className="h-8 w-auto" />
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                    Sinds 2004
                  </Badge>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Van kantoorautomatisering excellence naar cybersecurity leiderschap. 
                Dezelfde betrouwbaarheid en professionaliteit die u vertrouwt, nu ter bescherming van uw digitale assets.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
                  <Terminal className="mr-1 h-3 w-3" />
                  Kantoorautomatisering
                </Badge>
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/50">
                  <Shield className="mr-1 h-3 w-3" />
                  Cybersecurity
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Diensten</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">VoIP & Telefonie</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">IT-Infrastructuur</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Ethisch Hacken</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">SOC Monitoring</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-400" />
                  info@jamatec.nl
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-400" />
                  030 657 9006
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  De Liesbosch 12-A, Nieuwegein
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 JamaTec - Kantoorautomatisering B.V. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                <Link href="/over-ons" className="hover:text-blue-400 transition-colors">Over Ons</Link>
              </div>
            </div>
            <p className="text-blue-400 text-sm mt-4">
              21 jaar betrouwbare IT-expertise - Van kantoorautomatisering tot cybersecurity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}