import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  AlertTriangle,
  Zap,
  Terminal
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      primary: "030 657 9006",
      secondary: "Noodlijn 24/7",
      description: "Directe hulp bij beveiligingsincidenten"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@jamatec.nl",
      secondary: "security@jamatec.nl",
      description: "Algemene vragen en beveiligingszaken"
    },
    {
      icon: MapPin,
      title: "Locatie",
      primary: "De Liesbosch 12-A",
      secondary: "3439 LC Nieuwegein",
      description: "Bezoek ons kantoor in Nieuwegein"
    },
    {
      icon: Clock,
      title: "Openingstijden",
      primary: "Ma-Vr: 09:00 - 18:00",
      secondary: "Noodgevallen: 24/7/365",
      description: "Wij zijn er wanneer u ons nodig heeft"
    }
  ];

  const services = [
    {
      name: "VoIP & Telefonie",
      description: "Moderne telefoniesystemen",
      urgency: "Standaard"
    },
    {
      name: "IT-Infrastructuur", 
      description: "Netwerk en server beheer",
      urgency: "Standaard"
    },
    {
      name: "Penetratietesten",
      description: "Uitgebreide beveiligingsanalyses",
      urgency: "Standaard"
    },
    {
      name: "SOC Monitoring",
      description: "24/7 beveiligingsmonitoring",
      urgency: "Hoog"
    },
    {
      name: "Incident Response",
      description: "Nood beveiligingsrespons",
      urgency: "Kritiek"
    },
    {
      name: "Compliance Diensten",
      description: "ISO 27001, NIS2, AVG ondersteuning",
      urgency: "Standaard"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Matrix Rain Background Effect */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.blue.500/0.1)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.blue.500/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>

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
                <Link href="/contact" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="destructive" className="bg-orange-600 hover:bg-orange-700 border-orange-600 text-white font-bold px-6 py-2 rounded-lg flex items-center space-x-2 animate-pulse">
                <Zap className="h-4 w-4" />
                <span>24/7 NOODLIJN</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-slate-900/50 relative z-10">{/* Added pt-32 for fixed nav */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-blue-400 font-mono text-sm mb-4">&gt; contact_jamatec.exe</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">JamaTec</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Neem contact op met onze IT & cybersecurity experts. Of u nu directe incident response nodig heeft, 
                IT-automatisering zoekt, of uw beveiligingsstrategie wilt bespreken - wij zijn er om te helpen.
              </p>
            </div>
            
            {/* Emergency Banner */}
            <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-red-400 font-semibold">
                <AlertTriangle className="h-5 w-5" />
                <span>Beveiligingsnoodgeval? Bel 030 657 9006 voor directe hulp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Onze Services</h2>
            <p className="text-lg text-muted-foreground">
              Snelle toegang tot onze cybersecurity servicepagina&apos;s
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                <CardHeader className="text-center">
                  <info.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <CardTitle className="text-lg text-white">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-center">
                    <div className="font-semibold text-blue-400">{info.primary}</div>
                    <div className="text-sm text-gray-300">{info.secondary}</div>
                    <div className="text-xs text-gray-400">{info.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-blue-500/30">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle className="text-white text-2xl">Stuur ons een Bericht</CardTitle>
                <CardDescription className="text-gray-300">
                  Gebruik dit formulier voor algemene vragen of om een consultatie in te plannen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">Voornaam</label>
                      <Input 
                        id="firstName" 
                        placeholder="Jan" 
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">Achternaam</label>
                      <Input 
                        id="lastName" 
                        placeholder="Janssen" 
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email *</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="jan.janssen@bedrijf.nl" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-300">Bedrijf</label>
                    <Input 
                      id="company" 
                      placeholder="Uw Bedrijfsnaam" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-300">Interesse in Service</label>
                    <select 
                      id="service" 
                      className="flex h-9 w-full rounded-md border border-slate-600 bg-slate-700/50 px-3 py-1 text-sm text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                    >
                      <option value="">Selecteer een service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name.toLowerCase().replace(/\s+/g, '-')}>
                          {service.name} - {service.description}
                        </option>
                      ))}
                      <option value="multiple">Meerdere Services</option>
                      <option value="consultation">Algemene Consultatie</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Telefoon (Optioneel)</label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="06 12345678" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Bericht *</label>
                    <Textarea 
                      id="message" 
                      placeholder="Vertel ons over uw IT-behoeften, cybersecurity vragen, of hoe we u kunnen helpen..."
                      className="min-h-32 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold py-3"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Verstuur Bericht
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">
                <span className="text-blue-400">Jama</span>Tec
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacybeleid</Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">Algemene Voorwaarden</Link>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 JamaTec - Kantoorautomatisering B.V. Alle rechten voorbehouden.
            </p>
            <p className="text-blue-400 text-sm mt-2 font-mono">
              &gt; contact_established.log
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}