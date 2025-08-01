"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { toast } from "@/hooks/use-toast";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    service: "",
    message: ""
  });

  // Services data
  const services = [
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Creative brand identity and visual design solutions",
      features: ["Logo design", "Brand identity", "Print design", "Digital illustrations"]
    },
    {
      icon: "📸",
      title: "Social Media Management",
      description: "Comprehensive social media strategy and content creation",
      features: ["Content strategy", "Community management", "Analytics & reporting", "Campaign management"]
    },
    {
      icon: "🎬",
      title: "Video Editing",
      description: "Professional video production and post-production services",
      features: ["Video editing", "Motion graphics", "Color grading", "Sound design"]
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to grow your business",
      features: ["SEO optimization", "PPC campaigns", "Email marketing", "Conversion optimization"]
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      description: "Cutting-edge AI implementation for business automation and insights",
      features: ["Process automation", "Predictive analytics", "AI strategy"]
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      features: ["React/Next.js", "Full-stack development", "E-commerce solutions"]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS/Android development", "React Native", "App store optimization", "UI/UX design"]
    },
    {
      icon: "🎯",
      title: "Brand Strategy",
      description: "Strategic brand development and positioning",
      features: ["Market research", "Brand positioning", "Visual identity", "Brand guidelines"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Business intelligence and data visualization",
      features: ["Data analysis", "Dashboard creation", "Reporting", "Insights generation"]
    }
  ];

  // Portfolio projects
  const projects = [
    {
      title: "SafariTech Startup",
      description: "Complete brand identity and web platform for Kenyan tech startup",
      image: "/safaritech-startup.jpg",
      tags: ["Branding", "Web Design", "Startup"],
      metric: "300% User Growth",
      metricColor: "text-green-600"
    },
    {
      title: "M-Payment App",
      description: "Mobile payment solution for East African market",
      image: "/m-payment-app.jpg",
      tags: ["Mobile App", "Fintech", "UI/UX"],
      metric: "15% Engagement Rate",
      metricColor: "text-blue-600"
    },
    {
      title: "EcoTourism Platform",
      description: "Sustainable tourism booking platform with AI recommendations",
      image: "/ecotourism-platform.jpg",
      tags: ["Web Platform", "AI", "Tourism"],
      metric: "25% Conversion Increase",
      metricColor: "text-purple-600"
    },
    {
      title: "AgriTech Solution",
      description: "Farm management system with weather prediction AI",
      image: "/agritech-solution.jpg",
      tags: ["Agriculture", "AI", "Web App"],
      metric: "40% Productivity Boost",
      metricColor: "text-green-600"
    },
    {
      title: "Nairobi Fashion Hub",
      description: "E-commerce platform for Kenyan fashion designers",
      image: "/nairobi-fashion-hub.jpg",
      tags: ["E-commerce", "Fashion", "Web Design"],
      metric: "50k Monthly Visitors",
      metricColor: "text-orange-600"
    },
    {
      title: "HealthConnect Kenya",
      description: "Telemedicine platform connecting patients with doctors",
      image: "/healthconnect-kenya.jpg",
      tags: ["Healthcare", "Web App", "Mobile"],
      metric: "200k+ Users Served",
      metricColor: "text-red-600"
    }
  ];

  // Kenyan testimonials
  const testimonials = [
    {
      name: "Amina Ochieng",
      role: "CEO, SafariTech Solutions",
      image: "https://i.imgur.com/n3RxO6Yh.jpg",
      content: "Julian transformed our digital presence completely. His understanding of the Kenyan market combined with technical expertise helped us scale our startup 3x in just 6 months."
    },
    {
      name: "David Kimani",
      role: "Founder, M-Kulima",
      image: "https://i.imgur.com/GHMTQALh.jpg",
      content: "Working with Julian was a game-changer for our agri-tech startup. His AI solutions helped farmers increase productivity by 40%. Highly recommended!"
    },
    {
      name: "Grace Wanjiku",
      role: "Marketing Director, Nairobi Fashion Week",
      image: "https://i.imgur.com/xxGbPOdh.jpg",
      content: "Julian's creative vision and technical skills are unmatched. He created a stunning digital platform that showcased Kenyan fashion to the world."
    },
    {
      name: "Brian Otieno",
      role: "CTO, HealthConnect Kenya",
      image: "https://i.imgur.com/lb3MDGTh.jpg",
      content: "The telemedicine platform Julian developed has revolutionized healthcare access in rural Kenya. His attention to detail and user-centric approach is exceptional."
    }
  ];

  // Skills data
  const skills = [
    "Graphic Design", "Social Media Management", "Video Editing", "Content Creation",
    "React/Next.js", "TypeScript", "Node.js", "Python", "AI/ML", "UI/UX Design",
    "Brand Strategy", "Digital Marketing", "SEO", "Mobile Development", "Cloud Computing"
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service || "General Inquiry"}\n` +
      `\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.open(`mailto:julianoluoch@gmail.com?subject=${subject}&body=${body}`, '_blank');
    
    toast({
      title: "Opening email client ✉️",
      description: "Please send your message through your email client.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: ""
    });
  };
  
  // Handle phone call
  const handleCall = () => {
    window.open('tel:+254748778072', '_self');
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Julian
              </span>
              <ThemeToggle />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "services", "portfolio", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item
                      ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                      : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["home", "services", "portfolio", "about", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === item
                        ? "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/50"
                        : "text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/50">
                  🇰🇪 Nairobi, Kenya
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Creative &
                  <br />
                  Tech Consultant
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transforming ideas into powerful digital experiences. Specializing in AI solutions, 
                  web development, and brand strategy for the African market and beyond.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Let's Work Together ✨
                </Button>
                <Button 
                  onClick={() => scrollToSection("portfolio")}
                  variant="outline"
                  size="lg"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/50"
                >
                  View My Work
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="text-sm font-semibold">Design</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <div className="text-sm font-semibold">Code</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-sm font-semibold">Growth</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-white text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-sm font-semibold">Launch</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg animate-bounce">
                ✨
              </div>
              <div className="absolute -bottom-2 -left-2 bg-purple-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg animate-pulse">
                🔥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">What I Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              My Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-purple-500 mr-2">✓</span>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">My Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative solutions for African businesses and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 hover:text-purple-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs hover:bg-purple-50 hover:text-purple-600 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className={`text-sm font-semibold ${project.metricColor} hover:scale-105 transition-transform inline-block`}>
                    {project.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://drive.google.com/drive/folders/1IdcMo56rtZVS1144sMNwg21SAe1PV11I?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              View More Work 📁
            </a>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Meet Julian
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know the person behind the digital magic
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Digital Creative & Tech Consultant
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      I'm a passionate digital creative and tech consultant based in Nairobi, Kenya, 
                      with a love for transforming ideas into powerful digital experiences. My journey 
                      in the digital space has been driven by curiosity, innovation, and a deep 
                      commitment to helping businesses thrive in the digital age.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      When I'm not crafting digital solutions, you'll find me exploring new technologies, 
                      mentoring aspiring creatives, or enjoying the vibrant tech scene in Nairobi's 
                      Silicon Savannah. I believe in the power of technology to transform lives and 
                      businesses across Africa and beyond.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {["🎨 Creative", "💻 Tech Enthusiast", "🚀 Innovator", "🌍 African Tech Advocate"].map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs hover:scale-105 transition-transform">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://i.imgur.com/88bCjILh.jpg"
                    alt="Julian - Digital Creative & Tech Consultant"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Client Love</Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              What Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from businesses I've helped transform across Kenya and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover image-rendering-smooth hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-semibold hover:text-purple-600 transition-colors">{testimonial.name}</h4>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{testimonial.content}"</p>
                    <div className="flex mt-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 hover:scale-110 transition-transform duration-300">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a 
                        href="mailto:julianoluoch@gmail.com" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all"
                      >
                        ✉️ Email Me
                      </a>
                      <a
                        href="tel:+254748778072"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-200 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-all"
                      >
                        📞 Call Me
                      </a>
                    </div>
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <p>📧 julianoluoch@gmail.com</p>
                      <p>📱 +254 748 778 072</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Julian
              </h3>
              <p className="text-gray-400 mb-4">
                Digital creative and tech consultant based in Nairobi, Kenya. 
                Transforming ideas into powerful digital experiences.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/notsaintjulixn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram Camera</span>
                  <div className="w-6 h-6">📷</div>
                </a>
                <a href="https://www.instagram.com/saint_julixn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram Bird</span>
                  <div className="w-6 h-6">🐦</div>
                </a>
                <a href="https://drive.google.com/drive/folders/1IdcMo56rtZVS1144sMNwg21SAe1PV11I?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Google Drive</span>
                  <div className="w-6 h-6">💼</div>
                </a>
                <a href="mailto:julianoluoch@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Email</span>
                  <div className="w-6 h-6">💻</div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Video Editing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("home")} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-white transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Julian. Made with ❤️ in Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}