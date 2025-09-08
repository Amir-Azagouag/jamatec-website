import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  GraduationCap, 
  Shield, 
  Users, 
  Target, 
  BookOpen, 
  CheckCircle,
  ArrowLeft,
  TrendingUp,
  Mail,
  Smartphone,
  AlertTriangle,
  Eye,
  Award,
  Zap,
} from "lucide-react";

export default function SecurityTrainingPage() {
  const trainingServices = [
    {
      title: "Phishing Simulations",
      description: "Realistic phishing campaigns to test and improve employee awareness of email threats",
      icon: Mail,
      features: ["Custom phishing templates", "Real-time reporting", "Automated follow-up training", "Progress tracking"]
    },
    {
      title: "Security Awareness Workshops",
      description: "Interactive training sessions covering essential cybersecurity topics for all employees",
      icon: Users,
      features: ["Social engineering awareness", "Password security", "Safe browsing practices", "Incident reporting"]
    },
    {
      title: "Awareness Campaigns",
      description: "Ongoing security awareness campaigns to maintain high security consciousness",
      icon: TrendingUp,
      features: ["Monthly security tips", "Poster campaigns", "Newsletter content", "Awareness metrics"]
    },
    {
      title: "Custom Training Programs",
      description: "Tailored training programs designed for specific roles and organizational needs",
      icon: Target,
      features: ["Role-based training", "Industry-specific content", "Compliance training", "Executive briefings"]
    }
  ];

  const trainingTopics = [
    {
      category: "Email Security",
      topics: ["Phishing identification", "Email encryption", "Attachment safety", "Business email compromise"]
    },
    {
      category: "Password Security", 
      topics: ["Strong password creation", "Password managers", "Multi-factor authentication", "Account security"]
    },
    {
      category: "Social Engineering",
      topics: ["Manipulation tactics", "Phone scams", "Physical security", "Information protection"]
    },
    {
      category: "Mobile Security",
      topics: ["App security", "Wi-Fi safety", "Device management", "BYOD policies"]
    },
    {
      category: "Data Protection",
      topics: ["Data classification", "Privacy regulations", "Secure sharing", "Data breach response"]
    },
    {
      category: "Incident Response",
      topics: ["Threat recognition", "Reporting procedures", "Response protocols", "Recovery processes"]
    }
  ];

  const trainingFormats = [
    {
      name: "Interactive E-Learning",
      description: "Self-paced online courses with interactive elements and progress tracking",
      duration: "15-30 minutes per module",
      capacity: "Unlimited participants",
      features: ["Gamification", "Progress tracking", "Certificates", "Mobile-friendly"]
    },
    {
      name: "Virtual Workshops",
      description: "Live online training sessions with expert instructors and Q&A",
      duration: "1-2 hours per session",
      capacity: "Up to 50 participants",
      features: ["Live interaction", "Real-time Q&A", "Recording available", "Breakout sessions"]
    },
    {
      name: "On-Site Training",
      description: "In-person training delivered at your organization by security experts",
      duration: "Half or full day",
      capacity: "Up to 30 participants",
      features: ["Customized content", "Hands-on exercises", "Face-to-face interaction", "Team building"]
    },
    {
      name: "Lunch & Learn Sessions",
      description: "Informal training sessions during lunch breaks for convenient learning",
      duration: "30-45 minutes",
      capacity: "Up to 25 participants",
      features: ["Casual format", "Current topics", "Q&A session", "Light refreshments"]
    }
  ];

  const roleBasedTraining = [
    {
      role: "General Employees",
      description: "Fundamental security awareness for all staff members",
      topics: ["Basic cybersecurity", "Email security", "Password hygiene", "Incident reporting"]
    },
    {
      role: "IT Administrators",
      description: "Advanced security training for technical staff",
      topics: ["System hardening", "Threat detection", "Incident response", "Security tools"]
    },
    {
      role: "Executives & Managers",
      description: "Leadership-focused security training and governance",
      topics: ["Cyber risk management", "Compliance obligations", "Business impact", "Decision making"]
    },
    {
      role: "HR Personnel", 
      description: "Human resources security and privacy training",
      topics: ["Employee onboarding", "Privacy regulations", "Background checks", "Insider threats"]
    },
    {
      role: "Finance Team",
      description: "Financial fraud and cybercrime awareness",
      topics: ["Wire fraud prevention", "Financial controls", "Vendor security", "Compliance"]
    },
    {
      role: "Remote Workers",
      description: "Security training for distributed workforce",
      topics: ["Home office security", "VPN usage", "Cloud security", "Communication tools"]
    }
  ];

  const metrics = [
    {
      metric: "85%",
      label: "Average Improvement",
      description: "In security awareness scores"
    },
    {
      metric: "70%",
      label: "Phishing Reduction",
      description: "Decrease in successful attacks"
    },
    {
      metric: "10,000+",
      label: "Employees Trained",
      description: "Across multiple organizations"
    },
    {
      metric: "95%",
      label: "Satisfaction Rate",
      description: "Training program feedback"
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
              <GraduationCap className="h-12 w-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Security Training & Awareness
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Empower your workforce with cybersecurity knowledge and best practices. Our comprehensive 
              training programs transform employees from security risks into your strongest defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#training-services">Explore Training</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact-form">Free Training Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Impact Metrics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Training Impact & Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable improvements in security awareness and behavior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.metric}</div>
                  <CardTitle className="text-lg">{metric.label}</CardTitle>
                  <CardDescription>{metric.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section id="training-services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Training Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive security training solutions to build a security-conscious culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingServices.map((service, index) => (
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

      {/* Training Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Training Topics</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage of essential cybersecurity knowledge areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingTopics.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Flexible Training Formats</h2>
            <p className="text-lg text-muted-foreground">
              Multiple delivery methods to suit your organization&apos;s needs and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingFormats.map((format, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{format.name}</CardTitle>
                    <Badge variant="outline">{format.duration}</Badge>
                  </div>
                  <CardDescription className="text-base">{format.description}</CardDescription>
                  <div className="text-sm text-muted-foreground mt-2">
                    Capacity: {format.capacity}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {format.features.map((feature, featureIndex) => (
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

      {/* Role-Based Training */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Role-Based Security Training</h2>
            <p className="text-lg text-muted-foreground">
              Targeted training programs tailored to specific job functions and responsibilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleBasedTraining.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{role.role}</CardTitle>
                  <CardDescription className="text-sm">{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {role.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phishing Simulation Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advanced Phishing Simulation Program</h2>
            <p className="text-lg text-muted-foreground">
              Realistic testing and continuous improvement of email security awareness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Simulation Features</CardTitle>
                <CardDescription>
                  Comprehensive phishing campaign management and analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Templates based on real-world threats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Customizable difficulty levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Automated scheduling and frequency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Immediate teachable moments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Comprehensive reporting dashboard</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Performance Tracking</CardTitle>
                <CardDescription>
                  Detailed analytics and continuous improvement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Click-through rate analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Individual and group performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Improvement trends over time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Department and role-based insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                    <span className="text-sm">Executive summary reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Invest in Security Training?</h2>
            <p className="text-lg text-muted-foreground">
              Transform your employees from potential security risks into your strongest defense
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Reduce Risk</CardTitle>
                <CardDescription>
                  Significantly decrease the likelihood of successful cyber attacks
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Build Culture</CardTitle>
                <CardDescription>
                  Create a security-conscious organizational culture
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Meet Compliance</CardTitle>
                <CardDescription>
                  Satisfy regulatory training requirements and standards
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Improve ROI</CardTitle>
                <CardDescription>
                  Maximize security investment returns through human firewall
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Security Training</h2>
              <p className="text-lg text-muted-foreground">
                Design a custom training program for your organization
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Training Program Request</CardTitle>
                <CardDescription>
                  Tell us about your training needs and we&apos;ll create a customized program
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
                    <label htmlFor="employees" className="block text-sm font-medium mb-2">Number of Employees</label>
                    <select 
                      id="employees" 
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
                    <label className="block text-sm font-medium mb-3">Training Services of Interest (select all that apply):</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {["Phishing Simulations", "Security Workshops", "Awareness Campaigns", "Custom Programs", "E-Learning", "On-Site Training"].map((service) => (
                        <label key={service} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="format" className="block text-sm font-medium mb-2">Preferred Training Format</label>
                    <select 
                      id="format" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select format</option>
                      <option value="e-learning">Interactive E-Learning</option>
                      <option value="virtual">Virtual Workshops</option>
                      <option value="on-site">On-Site Training</option>
                      <option value="lunch-learn">Lunch & Learn</option>
                      <option value="mixed">Mixed/Hybrid Approach</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">Implementation Timeline</label>
                    <select 
                      id="timeline" 
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-4 weeks)</option>
                      <option value="short-term">Short-term (1-3 months)</option>
                      <option value="medium-term">Medium-term (3-6 months)</option>
                      <option value="ongoing">Ongoing program</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium mb-2">Current Security Challenges</label>
                    <Textarea 
                      id="challenges" 
                      placeholder="Describe your current security awareness challenges, recent incidents, compliance requirements, or specific training objectives..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Request Custom Training Program
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