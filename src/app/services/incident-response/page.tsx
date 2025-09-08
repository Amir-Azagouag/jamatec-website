import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertTriangle, 
  Shield, 
  Search, 
  RefreshCw, 
  FileText, 
  CheckCircle,
  ArrowLeft,
  Clock,
  Phone,
  Zap,
  Users,
  Activity,
  Database
} from "lucide-react";

export default function IncidentResponsePage() {
  const responseServices = [
    {
      title: "Breach Investigation",
      description: "Comprehensive analysis to determine the scope, impact, and root cause of security incidents",
      icon: Search,
      capabilities: ["Attack vector analysis", "Timeline reconstruction", "Evidence preservation", "Impact assessment"]
    },
    {
      title: "Digital Forensics",
      description: "Expert forensic analysis of compromised systems and data to support investigation and legal proceedings",
      icon: Database,
      capabilities: ["Memory analysis", "Disk imaging", "Network forensics", "Mobile device analysis"]
    },
    {
      title: "Recovery Planning",
      description: "Strategic planning and execution of system recovery and business continuity restoration",
      icon: RefreshCw,
      capabilities: ["Recovery prioritization", "System restoration", "Data recovery", "Business continuity"]
    },
    {
      title: "Post-Incident Analysis",
      description: "Detailed analysis and recommendations to prevent future incidents and improve security posture",
      icon: FileText,
      capabilities: ["Lessons learned", "Security improvements", "Process updates", "Training recommendations"]
    }
  ];

  const responsePhases = [
    {
      phase: "Detection & Analysis",
      timeframe: "0-2 hours",
      description: "Rapid identification and initial assessment of the security incident",
      activities: [
        "Incident validation and classification",
        "Initial containment measures",
        "Stakeholder notification",
        "Evidence preservation"
      ]
    },
    {
      phase: "Containment", 
      timeframe: "2-6 hours",
      description: "Isolation of affected systems to prevent further damage",
      activities: [
        "Short-term containment",
        "System isolation",
        "Threat neutralization", 
        "Backup verification"
      ]
    },
    {
      phase: "Eradication",
      timeframe: "6-24 hours", 
      description: "Complete removal of threats from the environment",
      activities: [
        "Malware removal",
        "Vulnerability patching",
        "Account remediation",
        "System hardening"
      ]
    },
    {
      phase: "Recovery",
      timeframe: "1-7 days",
      description: "Restoration of systems and services to normal operations",
      activities: [
        "System restoration",
        "Service validation",
        "Monitoring enhancement",
        "User access restoration"
      ]
    },
    {
      phase: "Lessons Learned",
      timeframe: "1-2 weeks",
      description: "Documentation and improvement of incident response processes",
      activities: [
        "Incident documentation",
        "Process improvement",
        "Staff training updates",
        "Prevention strategies"
      ]
    }
  ];

  const incidentTypes = [
    {
      type: "Ransomware Attack",
      description: "Malicious encryption of data with ransom demands",
      urgency: "Critical",
      responseTime: "< 1 hour"
    },
    {
      type: "Data Breach",
      description: "Unauthorized access to sensitive information",
      urgency: "High",
      responseTime: "< 2 hours"
    },
    {
      type: "Malware Infection",
      description: "Malicious software compromising systems",
      urgency: "High", 
      responseTime: "< 2 hours"
    },
    {
      type: "Insider Threat",
      description: "Malicious or negligent actions by internal users",
      urgency: "Medium",
      responseTime: "< 4 hours"
    },
    {
      type: "DDoS Attack",
      description: "Distributed denial of service affecting availability",
      urgency: "High",
      responseTime: "< 1 hour"
    },
    {
      type: "Supply Chain Compromise",
      description: "Third-party vendor or supplier security incident",
      urgency: "High",
      responseTime: "< 2 hours"
    }
  ];

  const responseTeam = [
    {
      role: "Incident Commander",
      responsibilities: ["Overall incident management", "Stakeholder communication", "Decision making", "Resource coordination"]
    },
    {
      role: "Technical Lead",
      responsibilities: ["Technical analysis", "System investigation", "Tool coordination", "Evidence collection"]
    },
    {
      role: "Forensics Analyst",
      responsibilities: ["Digital forensics", "Evidence preservation", "Malware analysis", "Timeline reconstruction"]
    },
    {
      role: "Communications Lead",
      responsibilities: ["Internal communications", "External notifications", "Media relations", "Regulatory reporting"]
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
      <section className="py-16 bg-gradient-to-br from-destructive/5 to-orange-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertTriangle className="h-12 w-12 text-destructive" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Incident Response & Recovery
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Rapid response and expert recovery services when security incidents occur. Our certified incident 
              response team provides immediate containment, thorough investigation, and complete system recovery.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-destructive font-semibold">
                <Phone className="h-5 w-5" />
                <span>24/7 Emergency Hotline: +1-800-JAMATEC</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="destructive" asChild>
                <Link href="tel:+1-800-JAMATEC">Emergency Response</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#response-services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Response Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Rapid Response Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When every minute counts, our expert team delivers swift and effective incident response
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">&lt; 15min</div>
                <CardTitle className="text-lg">Response Time</CardTitle>
                <CardDescription>Average time to initial response</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">24/7</div>
                <CardTitle className="text-lg">Expert Team</CardTitle>
                <CardDescription>Round-the-clock availability</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">99%</div>
                <CardTitle className="text-lg">Recovery Rate</CardTitle>
                <CardDescription>Successful incident containment</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">72hrs</div>
                <CardTitle className="text-lg">Recovery Time</CardTitle>
                <CardDescription>Average system restoration</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Services */}
      <section id="response-services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Incident Response Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive incident response capabilities to handle any security emergency
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {responseServices.map((service, index) => (
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
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Incident Response Process</h2>
            <p className="text-lg text-muted-foreground">
              Structured methodology following NIST guidelines for effective incident management
            </p>
          </div>
          
          <div className="space-y-6">
            {responsePhases.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">Phase {index + 1}</Badge>
                      <CardTitle className="text-xl">{phase.phase}</CardTitle>
                    </div>
                    <Badge variant="secondary">{phase.timeframe}</Badge>
                  </div>
                  <CardDescription className="text-base">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {phase.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Incident Types We Handle</h2>
            <p className="text-lg text-muted-foreground">
              Expert response to all types of cybersecurity incidents with appropriate urgency levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incidentTypes.map((incident, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{incident.type}</CardTitle>
                    <Badge variant={incident.urgency === 'Critical' ? 'destructive' : incident.urgency === 'High' ? 'default' : 'secondary'}>
                      {incident.urgency}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">{incident.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    Response time: {incident.responseTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert Response Team</h2>
            <p className="text-lg text-muted-foreground">
              Specialized roles working together to ensure comprehensive incident management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTeam.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{member.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Emergency?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don&apos;t wait. Contact our emergency response team immediately for critical security incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="destructive" asChild>
                <Link href="tel:+1-800-JAMATEC">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency Hotline
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground">
                Available 24/7/365 • Response within 15 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Incident Response Services</h2>
              <p className="text-lg text-muted-foreground">
                Prepare your organization with proactive incident response planning
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Incident Response Request</CardTitle>
                <CardDescription>
                  Get prepared with incident response planning or request immediate assistance
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
                    <label htmlFor="requestType" className="block text-sm font-medium mb-2">Request Type</label>
                    <select 
                      id="requestType" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select request type</option>
                      <option value="emergency">Emergency Response (Active Incident)</option>
                      <option value="planning">Incident Response Planning</option>
                      <option value="retainer">Response Retainer Service</option>
                      <option value="training">IR Team Training</option>
                      <option value="assessment">IR Readiness Assessment</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium mb-2">Urgency Level</label>
                    <select 
                      id="urgency" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select urgency</option>
                      <option value="critical">Critical - Active Incident</option>
                      <option value="high">High - Suspected Incident</option>
                      <option value="medium">Medium - Preparation/Planning</option>
                      <option value="low">Low - Information/Training</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-2">Incident Details / Requirements</label>
                    <Textarea 
                      id="details" 
                      placeholder="For active incidents: describe the situation, affected systems, and timeline. For planning: describe your organization size, industry, and specific needs..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-orange-800 dark:text-orange-200">For Active Security Incidents:</p>
                        <p className="text-orange-700 dark:text-orange-300">
                          Call our emergency hotline immediately: <strong>+1-800-JAMATEC</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Submit Request
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