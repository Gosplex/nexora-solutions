import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, MessageCircle, Star, ArrowRight, Sparkles, Zap, Target, Eye } from 'lucide-react';

const NexoraPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms with cutting-edge technology.",
      icon: "📱",
      gradient: "from-[#0A9BEA] to-[#012D3E]"
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions including branding, logos, and marketing materials.",
      icon: "🎨",
      gradient: "from-[#012D3E] to-[#0A9BEA]"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      icon: "✨",
      gradient: "from-[#0A9BEA] to-[#012D3E]"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      icon: "📈",
      gradient: "from-[#012D3E] to-[#0A9BEA]"
    },
    {
      title: "Recruitment & Staffing Services",
      description: "Finding the right talent for your organization with our expert recruitment solutions.",
      icon: "👥",
      gradient: "from-[#0A9BEA] to-[#012D3E]"
    },
    {
      title: "Payroll Outsourcing",
      description: "Streamlined payroll management services to handle your HR operations efficiently.",
      icon: "💼",
      gradient: "from-[#012D3E] to-[#0A9BEA]"
    },
    {
      title: "Lead Generation",
      description: "Strategic lead generation campaigns to grow your customer base and increase sales.",
      icon: "🎯",
      gradient: "from-[#0A9BEA] to-[#012D3E]"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechCorp India",
      content: "Nexora Solutions transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director, StartupHub",
      content: "The mobile app they developed for us has been a game-changer. Professional, reliable, and innovative approach to every project.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      position: "Founder, E-commerce Plus",
      content: "Their recruitment services helped us find the perfect team members. Nexora Solutions truly understands business needs.",
      rating: 5,
      avatar: "AP"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#0A9BEA] rounded-full opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-[#0A9BEA]/10'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900 tracking-tight">NEXORA SOLUTIONS</h1>
                <p className="text-xs text-[#0A9BEA] font-bold tracking-widest">THE AURA BEHIND YOUR SUCCESS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-gray-700 hover:text-[#0A9BEA] font-semibold transition-all duration-300 capitalize group"
                >
                  {item === 'contact' ? 'Contact Us' : item === 'about' ? 'About Us' : item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Hire Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#0A9BEA] transition-colors duration-300"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-out ${isMenuOpen
            ? 'max-h-96 opacity-100 py-6'
            : 'max-h-0 opacity-0 py-0'
            } overflow-hidden bg-white/95 backdrop-blur-xl rounded-b-3xl`}>
            <div className="flex flex-col space-y-6 px-4">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-[#0A9BEA] font-semibold text-left transition-all duration-300 capitalize transform hover:translate-x-2"
                >
                  {item === 'contact' ? 'Contact Us' : item === 'about' ? 'About Us' : item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-6 py-3 rounded-full w-fit font-bold"
              >
                Hire Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        <FloatingParticles />

        {/* Animated background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#012D3E]/10 to-[#0A9BEA]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fadeInLeft">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-[#0A9BEA]" />
                  <span className="text-sm font-bold text-[#012D3E]">Digital Excellence Awaits</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  The{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
                      Aura
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-full transform scale-x-0 animate-scaleX"></div>
                  </span>
                  <br />
                  Behind Your{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] animate-gradient">
                      Success
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] rounded-full transform scale-x-0 animate-scaleX delay-500"></div>
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transform your business with our comprehensive digital solutions. From mobile apps to digital marketing, we're your partner in exponential growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => scrollToSection('services')}
                  className="group relative bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-[#0A9BEA] text-[#0A9BEA] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0A9BEA] hover:text-white transition-all duration-300 transform hover:-translate-y-2"
                >
                  <span className="flex items-center space-x-2">
                    <span>Get In Touch</span>
                    <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A9BEA]/20 to-[#012D3E]/20 animate-gradient"></div>

                {/* Floating elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-2xl shadow-2xl animate-float"></div>
                <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-[#012D3E] to-[#0A9BEA] rounded-full shadow-2xl animate-float delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-xl shadow-2xl animate-float delay-2000"></div>

                {/* Main content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center transform hover:scale-105 transition-transform duration-500">
                    <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative group">
                      <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E]">NS</span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-full opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-[#012D3E] mb-3">Innovation Meets Excellence</h3>
                    <p className="text-lg text-gray-600 font-medium">Your Success, Our Mission</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 mb-6">
              <Target className="w-5 h-5 text-[#0A9BEA]" />
              <span className="text-sm font-bold text-[#012D3E]">Who We Are</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">About Nexora Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic team of visionaries and innovators, dedicated to providing cutting-edge solutions that don't just meet expectations—they shatter them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Our Mission",
                description: "To empower businesses with revolutionary technology solutions and strategic services that drive exponential, sustainable growth in the digital age."
              },
              {
                icon: <Eye className="w-8 h-8 text-white" />,
                title: "Our Vision",
                description: "To be the global leader in transformative digital solutions, creating unprecedented value and redefining what's possible in business innovation."
              },
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "Our Values",
                description: "Excellence without compromise, relentless innovation, unwavering integrity, and an obsessive focus on customer success define our DNA."
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-10 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-[#0A9BEA]/5 hover:to-[#012D3E]/5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-[#0A9BEA]/20">
                <div className="absolute -top-6 left-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#012D3E] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-br from-[#012D3E]/5 to-[#0A9BEA]/5 relative overflow-hidden">
        <FloatingParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
              <Sparkles className="w-5 h-5 text-[#0A9BEA]" />
              <span className="text-sm font-bold text-[#012D3E]">What We Offer</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive, cutting-edge solutions meticulously crafted to accelerate your business growth and dominate your digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-[#0A9BEA]/30 overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#012D3E] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button className="flex items-center space-x-2 text-[#0A9BEA] font-bold group-hover:text-[#012D3E] transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#0A9BEA]/20 to-[#012D3E]/20 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-[#0A9BEA]" />
              <span className="text-sm font-bold text-[#012D3E]">Client Success Stories</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their transformative experience with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#0A9BEA]/20">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-[#012D3E] to-[#0A9BEA] relative overflow-hidden">
        <FloatingParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <MessageCircle className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white">Let's Connect</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? Let's discuss how we can catapult you to unprecedented success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              {[
                { icon: <Phone className="w-6 h-6 text-white" />, title: "Phone", info: "+91 98765 43210" },
                { icon: <Mail className="w-6 h-6 text-white" />, title: "Email", info: "contact@nexorasolutions.com" },
                { icon: <MapPin className="w-6 h-6 text-white" />, title: "Address", info: "Mumbai, Maharashtra, India" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-200">{item.info}</p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-12">
                <h3 className="text-white font-bold text-lg mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5 text-white" />, color: "from-blue-600 to-blue-700" },
                    { icon: <Twitter className="w-5 h-5 text-white" />, color: "from-sky-500 to-sky-600" },
                    { icon: <Facebook className="w-5 h-5 text-white" />, color: "from-blue-700 to-blue-800" },
                    { icon: <span className="text-white font-bold text-sm">P</span>, color: "from-red-500 to-red-600" },
                    { icon: <MessageCircle className="w-5 h-5 text-white" />, color: "from-green-500 to-green-600" }
                  ].map((social, index) => (
                    <a key={index} href="#addr" className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:shadow-2xl transform hover:-translate-y-2 hover:scale-110 transition-all duration-300`}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white mb-3">Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white mb-3">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white mb-3">Service Interested In</label>
                  <select className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white transition-all duration-300">
                    <option className="text-gray-900">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} className="text-gray-900">{service.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white mb-3">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl focus:ring-2 focus:ring-white/50 focus:border-white/50 text-white placeholder-gray-300 transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>

                <button
                  onClick={() => alert('Thank you for your interest! We will get back to you within 24 hours with a personalized proposal.')}
                  className="w-full bg-white text-[#012D3E] py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50 group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#012D3E] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A9BEA] to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-[#012D3E] font-bold text-xl">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0A9BEA] to-white rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">NEXORA SOLUTIONS</h3>
                <p className="text-xs text-[#0A9BEA] font-bold tracking-widest">THE AURA BEHIND YOUR SUCCESS</p>
              </div>
            </div>

            <p className="text-gray-300 mb-10 text-lg">Transforming businesses with revolutionary digital solutions.</p>

            <div className="flex justify-center space-x-8 mb-10">
              {['Privacy Policy', 'Terms of Service', 'Support'].map((link, index) => (
                <a key={index} href="#eer" className="text-gray-400 hover:text-[#0A9BEA] transition-colors duration-300 font-medium hover:underline">
                  {link}
                </a>
              ))}
            </div>

            <div className="border-t border-gray-600 pt-8">
              <p className="text-gray-400 text-sm">© 2025 Nexora Solutions. All rights reserved. Crafted with ❤️ for your success.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-scaleX {
          animation: scaleX 1s ease-out forwards;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default NexoraPortfolio;