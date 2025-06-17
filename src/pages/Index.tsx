
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Shield, Cloud, Database, Settings, Users, Zap, Star, Play, CheckCircle2, Globe, Headphones, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/fcd1dc8a-e7fb-4849-a695-ae4bc6cb767e.png" alt="Enterprise InfoTech" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Enterprise InfoTech</h1>
                <p className="text-xs text-teal-600">Professional IT Solutions</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-teal-600 font-medium">Services</a>
              <a href="#solutions" className="text-gray-700 hover:text-teal-600 font-medium">Solutions</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 font-medium">About</a>
              <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Trusted Since 2008 • 500+ Projects Delivered
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Enterprise-Level
              <span className="block text-teal-600">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses through innovative technology solutions. From cloud migration to cybersecurity, we deliver comprehensive IT services that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "15+", label: "Years" },
                { number: "500+", label: "Projects" },
                { number: "250+", label: "Clients" },
                { number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black text-teal-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Services",
                description: "Seamless cloud migration with Azure, AWS, and hybrid solutions",
                color: "bg-blue-500"
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description: "Advanced threat detection and prevention systems",
                color: "bg-red-500"
              },
              {
                icon: Database,
                title: "Data Analytics",
                description: "Transform data into actionable business insights",
                color: "bg-green-500"
              },
              {
                icon: Settings,
                title: "IT Infrastructure",
                description: "24/7 monitoring and management of your systems",
                color: "bg-purple-500"
              },
              {
                icon: Users,
                title: "Managed IT",
                description: "Complete IT support and strategic planning",
                color: "bg-orange-500"
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Modernize processes with cutting-edge technology",
                color: "bg-teal-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6">
                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700 p-0 font-semibold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600">Specialized solutions for your industry needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Healthcare",
                description: "HIPAA-compliant systems and secure patient data management",
                icon: "🏥",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                title: "Financial Services",
                description: "SOX and PCI-DSS compliant with advanced security protocols",
                icon: "🏦",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Manufacturing",
                description: "IoT integration and industrial automation solutions",
                icon: "🏭",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Education",
                description: "Scalable learning systems and secure network infrastructure",
                icon: "🎓",
                gradient: "from-green-500 to-teal-500"
              }
            ].map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">Why Choose Enterprise InfoTech?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "15+ Years of Excellence",
                    description: "Proven track record delivering innovative solutions across diverse industries"
                  },
                  {
                    title: "Expert Team",
                    description: "Certified professionals with deep expertise in enterprise technologies"
                  },
                  {
                    title: "24/7 Support",
                    description: "Round-the-clock monitoring and technical support for your peace of mind"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-black mb-2">500+</div>
                      <div className="text-sm opacity-90">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black mb-2">250+</div>
                      <div className="text-sm opacity-90">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black mb-2">99.9%</div>
                      <div className="text-sm opacity-90">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black mb-2">15+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium">Trusted by Industry Leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">Let's discuss how we can transform your business</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: Mail, label: "Email", value: "info@enterprise-infotech.com" },
                  { icon: MapPin, label: "Address", value: "123 Technology Drive\nBusiness District, BD 12345" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{contact.label}</p>
                      <p className="text-gray-300 whitespace-pre-line">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Request Consultation</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Company Name" />
                  <Textarea placeholder="Tell us about your project..." className="min-h-32" />
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/fcd1dc8a-e7fb-4849-a695-ae4bc6cb767e.png" alt="Enterprise InfoTech" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-bold">Enterprise InfoTech</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Enterprise InfoTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
