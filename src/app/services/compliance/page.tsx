import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Lock, 
  FileCheck, 
  Shield, 
  Scale, 
  Globe, 
  CheckCircle,
  ArrowLeft,
  Users,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Award,
  Building,
  Zap,
  Menu
} from "lucide-react";

export default function CompliancePage() {
  const complianceFrameworks = [
    {
      title: "ISO 27001 Implementation",
      description: "International standard for information security management systems (ISMS)",
      icon: Award,
      services: ["Gap analysis & readiness assessment", "ISMS documentation development", "Implementation support", "Certification audit preparation"],
      timeline: "6-12 months",
      benefits: ["Global recognition", "Risk reduction", "Customer confidence", "Competitive advantage"]
    },
    {
      title: "NIS2 Compliance",
      description: "EU Network and Information Systems Directive for critical infrastructure protection",
      icon: Shield,
      services: ["NIS2 readiness assessment", "Risk management implementation", "Incident reporting procedures", "Supply chain security"],
      timeline: "4-8 months",
      benefits: ["EU market access", "Regulatory compliance", "Enhanced security", "Risk mitigation"]
    },
    {
      title: "GDPR Compliance",
      description: "General Data Protection Regulation for personal data processing and privacy",
      icon: Lock,
      services: ["Data protection impact assessments", "Privacy policy development", "Rights management procedures", "Breach notification processes"],
      timeline: "3-6 months",
      benefits: ["Legal compliance", "Customer trust", "Data governance", "Reputation protection"]
    },
    {
      title: "Audit Support",
      description: "Expert guidance through compliance audits and assessments",
      icon: FileCheck,
      services: ["Audit preparation", "Documentation review", "Assessor liaison", "Gap remediation"],
      timeline: "2-4 months",
      benefits: ["Higher pass rates", "Reduced audit stress", "Expert guidance", "Time savings"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      frameworks: ["ISO 27001", "PCI DSS", "GDPR", "SOX"],
      description: "Banking, insurance, and financial technology compliance"
    },
    {
      name: "Healthcare",
      frameworks: ["ISO 27001", "HIPAA", "GDPR", "Medical Device"],
      description: "Healthcare providers and medical device manufacturers"
    },
    {
      name: "Critical Infrastructure",
      frameworks: ["NIS2", "ISO 27001", "NERC CIP", "IEC 62443"],
      description: "Energy, transport, water, and telecommunications"
    },
    {
      name: "Manufacturing",
      frameworks: ["ISO 27001", "TISAX", "IATF", "Industry 4.0"],
      description: "Automotive, aerospace, and industrial manufacturing"
    },
    {
      name: "Technology",
      frameworks: ["ISO 27001", "SOC 2", "GDPR", "FedRAMP"],
      description: "Software development and cloud service providers"
    },
    {
      name: "Government",
      frameworks: ["ISO 27001", "FISMA", "NIST 800-53", "CMMC"],
      description: "Public sector and government contractors"
    }
  ];

  const complianceProcess = [
    {
      step: "Initial Assessment",
      description: "Current state analysis and gap identification",
      duration: "2-4 weeks",
      deliverables: ["Gap analysis report", "Risk assessment", "Implementation roadmap", "Resource requirements"]
    },
    {
      step: "Planning & Design",
      description: "Compliance strategy and implementation planning",
      duration: "2-3 weeks",
      deliverables: ["Project plan", "Policy framework", "Control design", "Training plan"]
    },
    {
      step: "Implementation",
      description: "Deployment of controls and processes",
      duration: "8-16 weeks",
      deliverables: ["Implemented controls", "Documentation", "Training delivery", "Testing results"]
    },
    {
      step: "Testing & Validation",
      description: "Verification of compliance effectiveness",
      duration: "2-4 weeks",
      deliverables: ["Test results", "Control validation", "Process verification", "Remediation plan"]
    },
    {
      step: "Certification Support",
      description: "Preparation and support for external audits",
      duration: "4-6 weeks",
      deliverables: ["Audit preparation", "Documentation review", "Mock audits", "Certification support"]
    },
    {
      step: "Continuous Monitoring",
      description: "Ongoing compliance monitoring and improvement",
      duration: "Ongoing",
      deliverables: ["Monitoring reports", "Improvement plans", "Annual reviews", "Re-certification support"]
    }
  ];

  const regulations = [
    {
      name: "ISO 27001:2022",
      type: "International Standard",
      scope: "Information Security Management",
      description: "Comprehensive framework for establishing, implementing, maintaining and continually improving an information security management system."
    },
    {
      name: "NIS2 Directive",
      type: "EU Regulation",
      scope: "Network & Information Systems",
      description: "Enhanced cybersecurity requirements for essential and important entities across the European Union."
    },
    {
      name: "GDPR",
      type: "EU Regulation", 
      scope: "Data Protection & Privacy",
      description: "Comprehensive data protection law regulating the processing of personal data of EU residents."
    },
    {
      name: "PCI DSS",
      type: "Industry Standard",
      scope: "Payment Card Security",
      description: "Security standard for organizations that handle cardholder information for major payment card brands."
    },
    {
      name: "SOC 2",
      type: "Audit Framework",
      scope: "Service Organization Controls",
      description: "Audit framework for service providers storing customer data in the cloud."
    },
    {
      name: "HIPAA",
      type: "US Federal Law",
      scope: "Healthcare Information",
      description: "Privacy and security requirements for protected health information in the United States."
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
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Scale className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Compliance Services
              </h1>
            </div>
            <div className="flex justify-center space-x-2 mb-6">
              <Badge variant="outline">ISO 27001</Badge>
              <Badge variant="outline">NIS2</Badge>
              <Badge variant="outline">GDPR</Badge>
              <Badge variant="outline">PCI DSS</Badge>
              <Badge variant="outline">SOC 2</Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Navigate complex regulatory requirements with expert guidance. Our compliance specialists help 
              organizations achieve and maintain compliance with international security and privacy standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#frameworks">Explore Frameworks</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact-form">Free Compliance Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Jamatec for Compliance?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance through complex regulatory landscapes with proven track record
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  Certified compliance professionals with extensive regulatory experience
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Proven Success</CardTitle>
                <CardDescription>
                  95% first-time certification pass rate across all frameworks
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Global Standards</CardTitle>
                <CardDescription>
                  Deep knowledge of international and regional compliance requirements
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Industry Focus</CardTitle>
                <CardDescription>
                  Specialized expertise across multiple industry verticals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section id="frameworks" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Compliance Frameworks & Standards</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for major international compliance frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <framework.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{framework.title}</CardTitle>
                    </div>
                    <Badge variant="outline">{framework.timeline}</Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {framework.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Our Services:</h4>
                      <ul className="space-y-1">
                        {framework.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {framework.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry-Specific Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Tailored compliance solutions for diverse industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription className="text-sm">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Relevant Frameworks:</div>
                    <div className="flex flex-wrap gap-1">
                      {industry.frameworks.map((framework, fIndex) => (
                        <Badge key={fIndex} variant="outline" className="text-xs">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Compliance Process</h2>
            <p className="text-lg text-muted-foreground">
              Structured approach to achieving and maintaining regulatory compliance
            </p>
          </div>
          
          <div className="space-y-6">
            {complianceProcess.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">Step {index + 1}</Badge>
                      <CardTitle className="text-xl">{phase.step}</CardTitle>
                    </div>
                    <Badge variant="secondary">{phase.duration}</Badge>
                  </div>
                  <CardDescription className="text-base">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Regulatory Framework Overview</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the key compliance requirements across different standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((regulation, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{regulation.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">{regulation.type}</Badge>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{regulation.scope}</Badge>
                  <CardDescription className="text-sm leading-relaxed">
                    {regulation.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Benefits */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Benefits of Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Why investing in compliance delivers value beyond regulatory requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>
                  Robust security controls protect against cyber threats
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Customer Trust</CardTitle>
                <CardDescription>
                  Demonstrated commitment to security builds customer confidence
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Competitive Advantage</CardTitle>
                <CardDescription>
                  Compliance certifications differentiate in the marketplace
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Risk Reduction</CardTitle>
                <CardDescription>
                  Systematic risk management reduces business exposure
                </CardDescription>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Compliance Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Get expert guidance on your compliance journey
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Compliance Consultation Request</CardTitle>
                <CardDescription>
                  Tell us about your compliance requirements and we&apos;ll provide tailored recommendations
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
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry</label>
                    <select 
                      id="industry" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select industry</option>
                      <option value="financial">Financial Services</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="technology">Technology</option>
                      <option value="government">Government</option>
                      <option value="critical-infrastructure">Critical Infrastructure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">Required Compliance Frameworks (select all that apply):</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["ISO 27001", "NIS2", "GDPR", "PCI DSS", "SOC 2", "HIPAA", "NIST", "Other"].map((framework) => (
                        <label key={framework} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                          <span className="text-sm">{framework}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="currentState" className="block text-sm font-medium mb-2">Current Compliance State</label>
                    <select 
                      id="currentState" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select current state</option>
                      <option value="none">No current compliance program</option>
                      <option value="planning">Planning compliance initiative</option>
                      <option value="implementing">Currently implementing</option>
                      <option value="certified">Already certified, seeking support</option>
                      <option value="unsure">Unsure of current state</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">Target Timeline</label>
                    <select 
                      id="timeline" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short-term">Short-term (3-6 months)</option>
                      <option value="medium-term">Medium-term (6-12 months)</option>
                      <option value="long-term">Long-term (12+ months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-2">Additional Details</label>
                    <Textarea 
                      id="details" 
                      placeholder="Describe your current security posture, specific compliance drivers, budget considerations, or any other relevant information..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Request Free Compliance Consultation
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