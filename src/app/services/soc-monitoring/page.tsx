import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Eye, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  ArrowLeft,
  MonitorSpeaker,
  AlertTriangle,
  TrendingUp,
  Database,
  Activity,
  Bell
} from "lucide-react";

export default function SOCMonitoringPage() {
  const socServices = [
    {
      title: "Real-time Monitoring",
      description: "Continuous surveillance of your IT infrastructure with immediate threat detection",
      icon: MonitorSpeaker,
      features: ["24/7 security monitoring", "Real-time alert generation", "Automated threat detection", "Custom monitoring rules"]
    },
    {
      title: "Threat Intelligence",
      description: "Advanced threat intelligence integration for proactive security measures",
      icon: TrendingUp,
      features: ["Global threat feeds", "IOC monitoring", "Threat hunting", "Attribution analysis"]
    },
    {
      title: "SIEM Management", 
      description: "Comprehensive Security Information and Event Management platform operation",
      icon: Database,
      features: ["Log aggregation & analysis", "Correlation rules", "Compliance reporting", "Custom dashboards"]
    },
    {
      title: "Alert Triage & Response",
      description: "Expert analysis and initial response to security incidents",
      icon: Bell,
      features: ["Alert prioritization", "False positive reduction", "Initial containment", "Escalation procedures"]
    }
  ];

  const capabilities = [
    {
      metric: "99.9%",
      label: "Uptime SLA",
      description: "Guaranteed monitoring availability"
    },
    {
      metric: "<5min",
      label: "Alert Response",
      description: "Average time to security alert"
    },
    {
      metric: "24/7/365",
      label: "Coverage",
      description: "Round-the-clock monitoring"
    },
    {
      metric: "500+",
      label: "Data Sources",
      description: "Supported log sources"
    }
  ];

  const technologies = [
    {
      category: "SIEM Platforms",
      tools: ["Splunk", "IBM QRadar", "Microsoft Sentinel", "Elastic Security", "LogRhythm"]
    },
    {
      category: "Network Monitoring",
      tools: ["Wireshark", "Nagios", "SolarWinds", "PRTG", "Nmap"]
    },
    {
      category: "Endpoint Detection",
      tools: ["CrowdStrike", "SentinelOne", "Carbon Black", "Cortex XDR", "Microsoft Defender"]
    },
    {
      category: "Threat Intelligence",
      tools: ["MISP", "ThreatConnect", "Recorded Future", "Anomali", "FireEye iSIGHT"]
    }
  ];

  const serviceTypes = [
    {
      name: "SOC Essentials",
      description: "Core monitoring services for small to medium businesses",
      features: [
        "24/7 security monitoring",
        "Basic threat detection",
        "Email & phone alerts",
        "Monthly reporting",
        "Standard business hours support"
      ],
      price: "Starting at $2,500/month"
    },
    {
      name: "SOC Professional",
      description: "Enhanced monitoring with advanced threat hunting capabilities",
      features: [
        "Advanced threat detection & hunting",
        "Real-time dashboard access",
        "Incident response coordination",
        "Weekly executive reports",
        "24/7 phone support",
        "Custom use cases"
      ],
      price: "Starting at $5,000/month"
    },
    {
      name: "SOC Enterprise",
      description: "Comprehensive security operations for large organizations",
      features: [
        "Dedicated SOC analysts",
        "Advanced persistent threat detection",
        "Threat intelligence integration",
        "Compliance reporting automation",
        "On-site incident response",
        "Custom SIEM deployment"
      ],
      price: "Custom pricing"
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
              <Eye className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                24/7 Security Monitoring (SOC)
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Continuous security monitoring and rapid threat response from our world-class Security Operations Center. 
              Protect your organization with round-the-clock vigilance and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#soc-services">Explore SOC Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact-form">Free SOC Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">SOC Capabilities & Performance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading security monitoring with proven performance metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{capability.metric}</div>
                  <CardTitle className="text-lg">{capability.label}</CardTitle>
                  <CardDescription>{capability.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Services */}
      <section id="soc-services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our SOC Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security monitoring and incident response capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {socServices.map((service, index) => (
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
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advanced Security Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Best-in-class security tools and platforms for comprehensive threat detection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="mr-1 mb-1 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Service Tiers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">SOC Service Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Flexible service options to match your organization&apos;s security needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                    {index === 2 ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOC Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">SOC Operations Workflow</h2>
            <p className="text-lg text-muted-foreground">
              Structured approach to incident detection, analysis, and response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Detection</CardTitle>
                <CardDescription className="text-sm">
                  Continuous monitoring identifies potential threats
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Analysis</CardTitle>
                <CardDescription className="text-sm">
                  Expert analysts investigate and validate alerts
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Classification</CardTitle>
                <CardDescription className="text-sm">
                  Incidents are classified by severity and impact
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Response</CardTitle>
                <CardDescription className="text-sm">
                  Immediate actions taken to contain threats
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Recovery</CardTitle>
                <CardDescription className="text-sm">
                  Systems restored and lessons learned documented
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Request SOC Services</h2>
              <p className="text-lg text-muted-foreground">
                Get a customized SOC solution for your organization&apos;s security needs
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>SOC Service Request</CardTitle>
                <CardDescription>
                  Provide your requirements and we&apos;ll design a tailored SOC solution
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
                    <label htmlFor="socTier" className="block text-sm font-medium mb-2">SOC Service Tier</label>
                    <select 
                      id="socTier" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select service tier</option>
                      <option value="essentials">SOC Essentials</option>
                      <option value="professional">SOC Professional</option>
                      <option value="enterprise">SOC Enterprise</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="endpoints" className="block text-sm font-medium mb-2">Number of Endpoints</label>
                    <select 
                      id="endpoints" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="501-1000">501-1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium mb-2">Implementation Urgency</label>
                    <select 
                      id="urgency" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select urgency</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="urgent">Urgent (2-4 weeks)</option>
                      <option value="standard">Standard (1-2 months)</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium mb-2">Specific Requirements</label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Describe your current security infrastructure, compliance requirements, specific use cases, or any other relevant details..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Request SOC Services Quote
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