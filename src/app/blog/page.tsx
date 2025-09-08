"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Shield, Terminal, Network, Zap } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "De Toekomst van Cybersecurity in 2025",
      excerpt: "Ontdek de nieuwste trends en bedreigingen in cybersecurity en hoe u uw organisatie kunt beschermen tegen geavanceerde aanvallen.",
      category: "Cybersecurity",
      date: "8 September 2025",
      readTime: "5 min",
      image: "/api/placeholder/400/250",
      author: "Jamal Azagouag"
    },
    {
      id: 2,
      title: "AI-Gedreven Threat Detection: Game Changer",
      excerpt: "Hoe kunstmatige intelligentie de manier waarop we cyberdreigingen detecteren en bestrijden revolutioneert.",
      category: "AI & Security",
      date: "1 September 2025",
      readTime: "7 min",
      image: "/api/placeholder/400/250",
      author: "Amir Azagouag"
    },
    {
      id: 3,
      title: "Zero Trust Architecture: Implementatie Gids",
      excerpt: "Stap-voor-stap handleiding voor het implementeren van een Zero Trust beveiligingsmodel in uw organisatie.",
      category: "Network Security",
      date: "25 Augustus 2025",
      readTime: "10 min",
      image: "/api/placeholder/400/250",
      author: "Jamal Azagouag"
    },
    {
      id: 4,
      title: "Compliance in de Cloud: ISO 27001 & NIS2",
      excerpt: "Navigeren door de complexiteit van compliance vereisten bij cloud migratie en hybride infrastructuren.",
      category: "Compliance",
      date: "18 Augustus 2025",
      readTime: "8 min",
      image: "/api/placeholder/400/250",
      author: "Amir Azagouag"
    },
    {
      id: 5,
      title: "Incident Response: Van Chaos naar Controle",
      excerpt: "Best practices voor effectief incident response management en hoe u voorbereid bent op cybersecurity crises.",
      category: "Incident Response",
      date: "10 Augustus 2025",
      readTime: "6 min",
      image: "/api/placeholder/400/250",
      author: "Jamal Azagouag"
    },
    {
      id: 6,
      title: "Penetration Testing: Ethisch Hacken Uitgelegd",
      excerpt: "Waarom penetration testing essentieel is voor uw cybersecurity strategie en wat u kunt verwachten.",
      category: "Penetration Testing",
      date: "3 Augustus 2025",
      readTime: "9 min",
      image: "/api/placeholder/400/250",
      author: "Amir Azagouag"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
                <Link href="/" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Home
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Diensten
                </Link>
                <Link href="/over-ons" className="text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30">
                  Over Ons
                </Link>
                <Link href="/blog" className="text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30">
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
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">{/* Updated pt-32 for fixed nav consistency */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Home
            </Link>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-blue-400">Jama</span>Tec Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              De nieuwste inzichten over cybersecurity, IT-automatisering en digitale transformatie.
              Van praktische tips tot diepgaande analyses van de cybersecurity wereld.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-slate-800/90 border-slate-600 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/20">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-t-lg flex items-center justify-center">
                  {post.category === "Cybersecurity" && <Shield className="w-12 h-12 text-blue-400" />}
                  {post.category === "AI & Security" && <Terminal className="w-12 h-12 text-indigo-400" />}
                  {post.category === "Network Security" && <Network className="w-12 h-12 text-cyan-400" />}
                  {(post.category === "Compliance" || post.category === "Incident Response" || post.category === "Penetration Testing") && <Shield className="w-12 h-12 text-blue-400" />}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-xs space-x-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Door {post.author}</span>
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300">
                      Lees meer →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Blijf op de hoogte van cybersecurity trends
            </h2>
            <p className="text-gray-300 mb-6">
              Ontvang de nieuwste artikelen en cybersecurity updates direct in uw inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Uw email adres"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300">
                Abonneren
              </Button>
            </div>
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
