import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "" }: NavigationProps) {
  const getPageStyle = (page: string) => {
    return currentPage === page
      ? "text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30"
      : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30";
  };

  const getServicesStyle = () => {
    const isServicesPage = currentPage === "services" || currentPage.startsWith("services/");
    return isServicesPage
      ? "text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium border border-blue-400/30 flex items-center"
      : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-transparent hover:border-blue-400/30 flex items-center";
  };

  return (
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
              <Link href="/" className={getPageStyle("home")}>
                Home
              </Link>
              <div className="relative group">
                <Link href="/services" className={getServicesStyle()}>
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
              <Link href="/over-ons" className={getPageStyle("over-ons")}>
                Over Ons
              </Link>
              <Link href="/blog" className={getPageStyle("blog")}>
                Blog
              </Link>
              <Link href="/werken-bij" className={getPageStyle("werken-bij")}>
                Werken Bij
              </Link>
              <Link href="/contact" className={getPageStyle("contact")}>
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
  );
}
