import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Shield, 
  Globe, 
  Network, 
  Users, 
  Target, 
  CheckCircle,
  ArrowLeft,
  Clock,
  FileText,
  AlertTriangle,
  Eye,
  Menu,
  Zap
} from "lucide-react";

export default function PenetrationTestingPage() {
  const testingTypes = [
    {
      title: "Webapplicatie Testen",
      description: "Uitgebreide beoordeling van webapplicaties voor kwetsbaarheden inclusief OWASP Top 10",
      icon: Globe,
      features: ["SQL Injection testen", "XSS kwetsbaarheidsanalyse", "Authenticatie bypass", "Business logic fouten"]
    },
    {
      title: "Netwerkbeveiligingsanalyse",
      description: "Diepgaande analyse van netwerkinfrastructuur om misconfiguraties en kwetsbaarheden te identificeren",
      icon: Network,
      features: ["Port scanning & service enumeratie", "Firewall configuratie review", "Netwerk segmentatie analyse", "Draadloze beveiliging testen"]
    },
    {
      title: "Social Engineering Tests",
      description: "Mensgerichte beveiligingstests om organisatie bewustzijn en respons te evalueren",
      icon: Users,
      features: ["Phishing campagne simulatie", "Fysieke beveiligingsanalyse", "Vishing & smishing tests", "Pretexting scenario's"]
    },
    {
      title: "Red Team Oefeningen",
      description: "Geavanceerde persistente bedreiging simulatie met volledige aanvalsketen methodologie",
      icon: Target,
      features: ["Multi-vector aanval simulatie", "Stealth penetratie", "Lateral movement testen", "Data exfiltratie simulatie"]
    }
  ];

  const methodology = [
    {
      phase: "Planning & Reconnaissance",
      description: "Informatieverzameling en doelwitanalyse",
      duration: "1-2 dagen",
      activities: ["Passieve verkenning", "OSINT verzameling", "Attack surface mapping", "Threat modeling"]
    },
    {
      phase: "Scanning & Enumeration", 
      description: "Active discovery of systems and services",
      duration: "2-3 days",
      activities: ["Port scanning", "Service enumeration", "Vulnerability scanning", "Technology fingerprinting"]
    },
    {
      phase: "Vulnerability Assessment",
      description: "Identification and validation of security weaknesses",
      duration: "3-5 days", 
      activities: ["Manual testing", "Automated scanning", "Vulnerability validation", "Impact assessment"]
    },
    {
      phase: "Exploitation",
      description: "Controlled exploitation of identified vulnerabilities",
      duration: "2-4 days",
      activities: ["Proof of concept development", "Privilege escalation", "Lateral movement", "Impact demonstration"]
    },
    {
      phase: "Post-Exploitation",
      description: "Assessment of potential damage and persistence",
      duration: "1-2 days",
      activities: ["Data access evaluation", "Persistence testing", "Clean-up procedures", "Evidence collection"]
    },
    {
      phase: "Reporting",
      description: "Comprehensive documentation and recommendations",
      duration: "2-3 days",
      activities: ["Executive summary", "Technical findings", "Risk assessment", "Remediation roadmap"]
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
                <Link href="/services" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30">
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
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="h-16 w-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Penetration Testing &
              <span className="text-blue-400 block mt-2">Ethical Hacking</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Identificeer kwetsbaarheden voordat aanvallers dat doen met onze uitgebreide penetration testing services. 
              Onze gecertificeerde ethical hackers simuleren real-world aanvallen om uw security posture te versterken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="#testing-types">Bekijk Testing Types</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                <Link href="#contact-form">Gratis Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Waarom Kiezen voor JamaTec Penetration Testing?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Onze penetration testing services bieden actionable insights om uw security posture te verbeteren
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-white">Gecertificeerde Experts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Team van OSCP, CEH en CISSP gecertificeerde ethical hackers met jarenlange ervaring
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-white">Uitgebreide Rapportage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Gedetailleerde technical en executive reports met concrete aanbevelingen voor remediatie
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-white">Real-World Testing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Simulatie van echte aanvalsscenario&apos;s gebaseerd op actuele threat intelligence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section id="testing-types" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Penetration Testing Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security assessments tailored to your specific infrastructure and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Proven Methodology</h2>
            <p className="text-lg text-muted-foreground">
              Following industry best practices and OWASP/NIST frameworks for comprehensive security testing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="mb-2">Phase {index + 1}</Badge>
                    <Badge variant="secondary">{phase.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Standards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry Standards & Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Our testing methodologies align with leading cybersecurity frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>OWASP</CardTitle>
                <CardDescription>Open Web Application Security Project standards</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>NIST</CardTitle>
                <CardDescription>National Institute of Standards and Technology</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>PTES</CardTitle>
                <CardDescription>Penetration Testing Execution Standard</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>OSSTMM</CardTitle>
                <CardDescription>Open Source Security Testing Methodology</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Request a Penetration Test</h2>
              <p className="text-lg text-muted-foreground">
                Get a custom quote for your penetration testing needs
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div>
                    <label htmlFor="testingType" className="block text-sm font-medium mb-2">Testing Type</label>
                    <select 
                      id="testingType" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select testing type</option>
                      <option value="web-app">Web Application Testing</option>
                      <option value="network">Network Security Assessment</option>
                      <option value="social-engineering">Social Engineering Tests</option>
                      <option value="red-team">Red Team Exercise</option>
                      <option value="multiple">Multiple Types</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">Preferred Timeline</label>
                    <select 
                      id="timeline" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">ASAP (1-2 weeks)</option>
                      <option value="standard">Standard (2-4 weeks)</option>
                      <option value="flexible">Flexible (1-2 months)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your infrastructure, specific concerns, or compliance requirements..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Request Penetration Test Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
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
        </div>
      </footer>
    </div>
  );
}