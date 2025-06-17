
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Shield, Cloud, Database, Settings, Users, Zap, CheckCircle, Award, Clock, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/fcd1dc8a-e7fb-4849-a695-ae4bc6cb767e.png" alt="Enterprise InfoTech" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Enterprise InfoTech</h1>
                <p className="text-sm text-teal-600 font-medium">Professional IT Solutions</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-teal-600">Services</a>
                <a href="#solutions" className="text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-teal-600">Solutions</a>
                <a href="#about" className="text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-teal-600">About</a>
                <a href="#contact" className="text-slate-700 hover:text-teal-600 transition-colors px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-teal-600">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-cyan-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted IT Partner Since 2008
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Enterprise-Grade
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block">IT Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Empowering businesses with comprehensive technology solutions, from cloud infrastructure to cybersecurity. We deliver enterprise-level IT services that drive growth and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-6 text-lg group shadow-lg">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                  View Our Solutions
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-teal-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">500+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-sm text-slate-500 font-medium">System Status: All Systems Operational</div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Cloud Infrastructure</span>
                        <span className="text-teal-600 font-medium">98%</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-[98%] transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Security Score</span>
                        <span className="text-emerald-600 font-medium">A+</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-[95%] transition-all duration-1000"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Performance</span>
                        <span className="text-blue-600 font-medium">Excellent</span>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[92%] transition-all duration-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From infrastructure management to digital transformation, we provide end-to-end technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Services & Migration",
                description: "Seamless cloud adoption with Azure, AWS, and hybrid solutions. Expert migration services with zero downtime guarantee.",
                features: ["Cloud Strategy", "Migration Planning", "Cost Optimization"]
              },
              {
                icon: Shield,
                title: "Cybersecurity Solutions",
                description: "Comprehensive security framework protecting your digital assets with advanced threat detection and prevention.",
                features: ["Threat Assessment", "Security Audits", "Compliance Management"]
              },
              {
                icon: Database,
                title: "Data Management & Analytics",
                description: "Transform your data into actionable insights with modern data platforms and business intelligence solutions.",
                features: ["Data Architecture", "Business Intelligence", "Data Governance"]
              },
              {
                icon: Settings,
                title: "IT Infrastructure Management",
                description: "Proactive monitoring and management of your IT infrastructure ensuring optimal performance and availability.",
                features: ["24/7 Monitoring", "Preventive Maintenance", "Performance Optimization"]
              },
              {
                icon: Users,
                title: "Managed IT Services",
                description: "Complete IT support and management allowing you to focus on core business objectives while we handle technology.",
                features: ["Help Desk Support", "Remote Management", "Strategic Planning"]
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Modernize business processes with cutting-edge technology solutions that drive efficiency and innovation.",
                features: ["Process Automation", "Legacy Modernization", "Digital Strategy"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 group-hover:text-teal-700 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Industry Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Tailored for Your Industry
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Specialized technology solutions designed for specific industry requirements and compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Healthcare",
                description: "HIPAA-compliant solutions with secure patient data management and telemedicine infrastructure.",
                icon: "🏥"
              },
              {
                title: "Financial Services",
                description: "SOX and PCI-DSS compliant systems with advanced security and risk management protocols.",
                icon: "🏦"
              },
              {
                title: "Manufacturing",
                description: "IoT integration and industrial automation solutions to optimize production efficiency.",
                icon: "🏭"
              },
              {
                title: "Education",
                description: "Scalable learning management systems and secure campus-wide network infrastructure.",
                icon: "🎓"
              }
            ].map((solution, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{solution.icon}</div>
                  <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Since 2008
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                Your Trusted Technology Partner
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">15+ Years of Excellence</h3>
                    <p className="text-slate-600 leading-relaxed">Delivering innovative IT solutions across diverse industries with a proven track record of success and client satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team of Professionals</h3>
                    <p className="text-slate-600 leading-relaxed">Certified engineers and consultants with deep expertise in enterprise technologies and industry best practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support & Monitoring</h3>
                    <p className="text-slate-600 leading-relaxed">Round-the-clock technical support and proactive monitoring to ensure your business operations never stop.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-teal-600">500+</div>
                      <div className="text-slate-600 text-sm">Projects Delivered</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-teal-600">250+</div>
                      <div className="text-slate-600 text-sm">Happy Clients</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-teal-600">99.9%</div>
                      <div className="text-slate-600 text-sm">Uptime SLA</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-teal-600">15+</div>
                      <div className="text-slate-600 text-sm">Years Experience</div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        ))}
                      </div>
                      <span className="text-slate-600 text-sm font-medium">Trusted by Industry Leaders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Let's discuss how our enterprise IT solutions can drive your business forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-lg">Phone</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-lg">Email</p>
                    <p className="text-slate-600">info@enterprise-infotech.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-lg">Address</p>
                    <p className="text-slate-600">123 Technology Drive<br />Business District, BD 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Request a Consultation</CardTitle>
                <CardDescription className="text-lg">Our experts will contact you within 24 hours to discuss your requirements.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                      <Input placeholder="John" className="border-slate-300 focus:border-teal-500 focus:ring-teal-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" className="border-slate-300 focus:border-teal-500 focus:ring-teal-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" className="border-slate-300 focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                    <Input placeholder="Your Company Name" className="border-slate-300 focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Project Details</label>
                    <Textarea placeholder="Tell us about your IT requirements and challenges..." className="border-slate-300 focus:border-teal-500 focus:ring-teal-500 min-h-32" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg shadow-lg">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <img src="/lovable-uploads/fcd1dc8a-e7fb-4849-a695-ae4bc6cb767e.png" alt="Enterprise InfoTech" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Enterprise InfoTech</h3>
                  <p className="text-teal-400">Professional IT Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Transforming businesses through innovative technology solutions. Your trusted partner for enterprise IT services since 2008.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cloud Migration</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Data Management</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">IT Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-400">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">© 2024 Enterprise InfoTech. All rights reserved. | Professional IT Solutions & Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
