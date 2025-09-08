import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileCheck, 
  TrendingUp, 
  Building, 
  Users, 
  Shield, 
  CheckCircle,
  ArrowLeft,
  Clock,
  Target,
  AlertTriangle,
  BookOpen,
  Layers,
  Zap
} from "lucide-react";

export default function SecurityConsultancyPage() {
  const consultingServices = [
    {
      title: "Risk Analysis & Assessment",
      description: "Comprehensive evaluation of your organization's security risks and threat landscape",
      icon: TrendingUp,
      deliverables: ["Risk Register & Matrix", "Threat Landscape Analysis", "Vulnerability Assessment Report", "Risk Mitigation Roadmap"]
    },
    {
      title: "Security Architecture Design",
      description: "Strategic design of secure infrastructure and application architectures",
      icon: Building,
      deliverables: ["Architecture Blueprints", "Security Control Mapping", "Technology Recommendations", "Implementation Guidelines"]
    },
    {
      title: "Policy & Procedure Development",
      description: "Creation of comprehensive security policies aligned with business objectives",
      icon: BookOpen,
      deliverables: ["Security Policies", "Procedures & Standards", "Employee Guidelines", "Incident Response Plans"]
    },
    {
      title: "Threat Modeling & Analysis",
      description: "Systematic identification and analysis of potential security threats",
      icon: Target,
      deliverables: ["Threat Models", "Attack Tree Analysis", "Control Effectiveness Review", "Mitigation Strategies"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Banking, insurance, and fintech security requirements",
      regulations: ["PCI DSS", "SOX", "FFIEC", "PSD2"]
    },
    {
      name: "Healthcare",
      description: "Medical data protection and patient privacy compliance",
      regulations: ["HIPAA", "HITECH", "FDA", "Medical Device Security"]
    },
    {
      name: "Manufacturing",
      description: "Industrial control systems and operational technology security",
      regulations: ["NERC CIP", "IEC 62443", "TSA Pipeline", "Industry 4.0"]
    },
    {
      name: "Government",
      description: "Public sector security and classified information protection",
      regulations: ["FedRAMP", "FISMA", "NIST 800-53", "CMMC"]
    },
    {
      name: "Technology",
      description: "Software development and cloud infrastructure security",
      regulations: ["SOC 2", "ISO 27001", "GDPR", "CCPA"]
    },
    {
      name: "Retail & E-commerce",
      description: "Customer data protection and payment security",
      regulations: ["PCI DSS", "GDPR", "CCPA", "State Privacy Laws"]
    }
  ];

  const process = [
    {
      step: "Discovery & Assessment",
      description: "Current state analysis and gap identification",
      duration: "1-2 weeks",
      activities: ["Stakeholder interviews", "Document review", "Infrastructure assessment", "Compliance gap analysis"]
    },
    {
      step: "Strategy Development",
      description: "Security strategy and roadmap creation",
      duration: "2-3 weeks", 
      activities: ["Risk prioritization", "Control framework selection", "Budget planning", "Timeline development"]
    },
    {
      step: "Solution Design",
      description: "Detailed security architecture and implementation planning",
      duration: "2-4 weeks",
      activities: ["Technical specifications", "Vendor evaluations", "Integration planning", "Testing strategies"]
    },
    {
      step: "Implementation Support",
      description: "Guidance during deployment and configuration",
      duration: "Ongoing",
      activities: ["Project management", "Technical oversight", "Training delivery", "Progress monitoring"]
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
              <FileCheck className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Security Consultancy & Risk Assessment
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Strategic cybersecurity guidance from industry experts. We help organizations develop robust 
              security strategies, assess risks, and implement effective controls aligned with business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact-form">Free Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Jamatec Security Consulting?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our consultants bring decades of experience across industries and regulatory environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>
                  CISSP, CISM, CRISC certified professionals with real-world experience
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Holistic Approach</CardTitle>
                <CardDescription>
                  Comprehensive security strategy covering people, process, and technology
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Business-Aligned</CardTitle>
                <CardDescription>
                  Security solutions that support and enable business growth
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Consulting Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security consulting to strengthen your organization&apos;s security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {consultingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-sm">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Industry Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Deep understanding of sector-specific security requirements and compliance obligations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {industry.regulations.map((regulation, regIndex) => (
                      <Badge key={regIndex} variant="outline" className="text-xs">
                        {regulation}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Consulting Process</h2>
            <p className="text-lg text-muted-foreground">
              Structured approach to deliver maximum value and actionable recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">Step {index + 1}</Badge>
                    <Badge variant="secondary" className="text-xs">{phase.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{phase.step}</CardTitle>
                  <CardDescription className="text-sm">{phase.description}</CardDescription>
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

      {/* Risk Assessment Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Risk Assessment Framework</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive risk evaluation using industry-standard methodologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-primary mr-2" />
                  Risk Identification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Asset inventory and classification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Threat landscape analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Vulnerability assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  Risk Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Likelihood assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Business impact evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Risk scoring and prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Mitigation strategy development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Security Consultation</h2>
              <p className="text-lg text-muted-foreground">
                Schedule a free strategy session to discuss your security challenges
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Consultation Request</CardTitle>
                <CardDescription>
                  Tell us about your organization and we&apos;ll provide tailored recommendations
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
                      <option value="government">Government</option>
                      <option value="technology">Technology</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium mb-2">Company Size</label>
                    <select 
                      id="companySize" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select size</option>
                      <option value="startup">Startup (1-50)</option>
                      <option value="sme">Small/Medium (51-500)</option>
                      <option value="enterprise">Enterprise (500+)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="consultingNeed" className="block text-sm font-medium mb-2">Primary Consulting Need</label>
                    <select 
                      id="consultingNeed" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select primary need</option>
                      <option value="risk-assessment">Risk Assessment</option>
                      <option value="security-architecture">Security Architecture</option>
                      <option value="policy-development">Policy Development</option>
                      <option value="threat-modeling">Threat Modeling</option>
                      <option value="compliance">Compliance Support</option>
                      <option value="strategy">Security Strategy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Current Challenges</label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your current security challenges, compliance requirements, or strategic objectives..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Request Free Strategy Session
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