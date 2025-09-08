import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  FileCheck, 
  GraduationCap,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Zap
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "penetration-testing",
      title: "Penetratietesten & Ethisch Hacken",
      description: "Uitgebreide beveiligingsanalyses om kwetsbaarheden te identificeren voordat aanvallers dat doen. Onze gecertificeerde ethische hackers simuleren echte aanvallen om uw beveiligingspositie te versterken.",
      icon: Shield,
      href: "/services/penetration-testing",
      features: ["Webapplicatie testen", "Netwerkbeveiligingsanalyse", "Social engineering tests", "Red Team oefeningen"],
      timeline: "1-3 weken",
      price: "Vanaf €4.500"
    },
    {
      id: "security-consultancy",
      title: "Beveiligingsadvies & Risicobeoordeling",
      description: "Strategisch cybersecurity advies en risicomanagement oplossingen. Onze experts helpen u robuuste beveiligingsstrategieën ontwikkelen die aansluiten bij bedrijfsdoelstellingen.",
      icon: FileCheck,
      href: "/services/security-consultancy",
      features: ["Risicoanalyse", "Beveiligingsarchitectuur", "Beleidsontwikkeling", "Threat modeling"],
      timeline: "2-8 weken",
      price: "Vanaf €2.700"
    },
    {
      id: "soc-monitoring",
      title: "24/7 Beveiligingsmonitoring (SOC)",
      description: "Continue bedreigingsdetectie en respons diensten vanuit ons wereldklasse Security Operations Center met expert analyse en snelle respons.",
      icon: Eye,
      href: "/services/soc-monitoring",
      features: ["Real-time monitoring", "Threat intelligence", "SIEM beheer", "Alert triage"],
      timeline: "2-4 weken setup",
      price: "Vanaf €2.250/maand"
    },
    {
      id: "incident-response",
      title: "Incident Response & Herstel",
      description: "Snelle inperking en herstel van beveiligingsinbreuken. Ons gecertificeerde incident response team biedt directe inperking en volledig systeemherstel.",
      icon: AlertTriangle,
      href: "/services/incident-response",
      features: ["Inbreuk onderzoek", "Digitaal forensisch onderzoek", "Herstelplanning", "Post-incident analyse"],
      timeline: "Directe respons",
      price: "Vanaf €9.000"
    },
    {
      id: "compliance",
      title: "Compliance (ISO 27001, NIS2, AVG)",
      description: "Navigeer door complexe regelgeving met expert begeleiding. Bereik en behoud compliance met internationale beveiliging- en privacystandaarden.",
      icon: Lock,
      href: "/services/compliance",
      features: ["ISO 27001 implementatie", "NIS2 compliance", "AVG compliance", "Audit ondersteuning"],
      timeline: "3-12 maanden",
      price: "Vanaf €7.200"
    },
    {
      id: "security-training",
      title: "Beveiligingstraining & Bewustwording",
      description: "Versterk uw personeel met cybersecurity kennis en best practices. Transformeer medewerkers van beveiligingsrisico's naar uw sterkste verdediging.",
      icon: GraduationCap,
      href: "/services/security-training",
      features: ["Phishing simulaties", "Beveiligingsworkshops", "Bewustwordingscampagnes", "Aangepaste trainingsprogramma's"],
      timeline: "1-4 weken",
      price: "Vanaf €1.800"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Gecertificeerde professionals met CISSP, OSCP, CEH en andere industrie certificeringen"
    },
    {
      icon: TrendingUp,
      title: "Bewezen Resultaten",
      description: "95% klanttevredenheid en meetbare beveiligingsverbeteringen"
    },
    {
      icon: Clock,
      title: "Snelle Respons",
      description: "24/7 beschikbaarheid voor noodgevallen met <15 minuten responstijd"
    },
    {
      icon: Shield,
      title: "Uitgebreide Dekking",
      description: "Volledig spectrum cybersecurity diensten van analyse tot implementatie"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
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
                <div className="relative group">
                  <Link href="/services" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30 flex items-center">
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900/20 to-slate-900/50">{/* Added pt-32 for fixed nav */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Uitgebreide Cybersecurity Diensten
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Bescherm uw organisatie met ons volledige spectrum van cybersecurity diensten. Van proactieve 
              analyses tot incident response, wij bieden de expertise die u nodig heeft om veilig te blijven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="#services-overview">Verken Diensten</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10" asChild>
                <Link href="/contact">Gratis Consultatie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Jamatec?</h2>
            <p className="text-lg text-muted-foreground">
              Leading cybersecurity expertise you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Cybersecurity Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security solutions to protect your organization from cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">{service.timeline}</Badge>
                          <Badge variant="secondary" className="text-xs">{service.price}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 pt-4">
                      <Button className="flex-1 group-hover:bg-primary/90 transition-colors" asChild>
                        <Link href={service.href}>Learn More</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Service Comparison</h2>
            <p className="text-lg text-muted-foreground">
              Choose the right services for your security needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-center">Timeline</th>
                  <th className="p-4 text-center">Starting Price</th>
                  <th className="p-4 text-center">Urgency</th>
                  <th className="p-4 text-center">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-medium">Penetration Testing</td>
                  <td className="p-4 text-center text-sm">1-3 weeks</td>
                  <td className="p-4 text-center text-sm">$5,000</td>
                  <td className="p-4 text-center">
                    <Badge variant="secondary">Standard</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Proactive security testing</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Security Consultancy</td>
                  <td className="p-4 text-center text-sm">2-8 weeks</td>
                  <td className="p-4 text-center text-sm">$3,000</td>
                  <td className="p-4 text-center">
                    <Badge variant="secondary">Standard</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Strategic planning</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">SOC Monitoring</td>
                  <td className="p-4 text-center text-sm">2-4 weeks</td>
                  <td className="p-4 text-center text-sm">$2,500/month</td>
                  <td className="p-4 text-center">
                    <Badge variant="default">High</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Continuous monitoring</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Incident Response</td>
                  <td className="p-4 text-center text-sm">Immediate</td>
                  <td className="p-4 text-center text-sm">$10,000</td>
                  <td className="p-4 text-center">
                    <Badge variant="destructive">Critical</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Active breaches</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Compliance</td>
                  <td className="p-4 text-center text-sm">3-12 months</td>
                  <td className="p-4 text-center text-sm">$8,000</td>
                  <td className="p-4 text-center">
                    <Badge variant="secondary">Standard</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Regulatory requirements</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-medium">Security Training</td>
                  <td className="p-4 text-center text-sm">1-4 weeks</td>
                  <td className="p-4 text-center text-sm">$2,000</td>
                  <td className="p-4 text-center">
                    <Badge variant="secondary">Standard</Badge>
                  </td>
                  <td className="p-4 text-center text-sm">Employee education</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Strengthen Your Cybersecurity?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our cybersecurity experts today to discuss your security needs and 
            get a customized solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="tel:+1-800-JAMATEC">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Jamatec Cybersecurity</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Jamatec Cybersecurity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}