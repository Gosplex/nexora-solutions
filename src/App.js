import React, { useState, useEffect } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, Linkedin, Twitter, Instagram,
  ArrowRight, Sparkles, Zap, Target, Eye, Award, Users, Clock,
  CheckCircle, Globe, Star, MessageCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NexoraPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
      icon: "📱",
      gradient: "from-[#0A9BEA] to-[#012D3E]",
      features: ["iOS & Android", "React Native", "Flutter", "Native Performance"]
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and engagement.",
      icon: "💻",
      gradient: "from-[#012D3E] to-[#0A9BEA]",
      features: ["React/Next.js", "E-commerce", "CMS Integration", "SEO Optimized"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, beautiful interfaces designed with user psychology and conversion optimization in mind.",
      icon: "🎨",
      gradient: "from-[#0A9BEA] to-[#012D3E]",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand and drive measurable business growth.",
      icon: "📈",
      gradient: "from-[#012D3E] to-[#0A9BEA]",
      features: ["SEO/SEM", "Social Media", "Content Strategy", "Analytics"]
    },
    {
      title: "IT Staffing",
      description: "Connect with vetted, top-tier IT professionals who seamlessly integrate with your team.",
      icon: "👥",
      gradient: "from-[#0A9BEA] to-[#012D3E]",
      features: ["Contract Hiring", "Full-time Placement", "Remote Teams", "Tech Screening"]
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions engineered to solve your unique business challenges efficiently.",
      icon: "⚙️",
      gradient: "from-[#012D3E] to-[#0A9BEA]",
      features: ["API Development", "Cloud Solutions", "Enterprise Apps", "System Integration"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechCorp India",
      content: "Nexora transformed our digital infrastructure. Their technical expertise and professional approach delivered results beyond expectations.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director, StartupHub",
      content: "The mobile app they developed became our primary revenue channel. Exceptional quality and ongoing support.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      position: "Founder, E-commerce Plus",
      content: "Their IT staffing service connected us with incredible talent. Nexora truly understands modern business needs.",
      rating: 5,
      avatar: "AP"
    }
  ];

  const whyChooseUs = [
    { icon: Zap, title: "Rapid Delivery", desc: "Agile workflows ensure quick turnarounds without quality compromise" },
    { icon: Users, title: "Expert Team", desc: "Seasoned professionals with proven track records across industries" },
    { icon: Award, title: "Quality Assured", desc: "Rigorous testing and QA processes guarantee excellence" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance whenever you need us" }
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "15+", label: "Team Members" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#012D3E] to-[#0A9BEA]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, .font-display {
          font-family: 'Syne', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-alt {
          background: linear-gradient(135deg, #0A9BEA 0%, #012D3E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(255, 255, 255, 0.1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .bg-mesh {
          background-image: 
            radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(255, 255, 255, 0.03) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(255, 255, 255, 0.03) 0px, transparent 50%);
        }

        .text-shadow {
          text-shadow: 0 2px 20px rgba(255, 255, 255, 0.3);
        }

        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .glass-dark {
          background: rgba(1, 45, 62, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'glass-dark shadow-2xl' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-white">NEXORA</h1>
                <p className="text-[10px] text-[#0A9BEA] font-semibold tracking-widest">SOLUTIONS</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/90 hover:text-white font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#012D3E] px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Hire Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-white/80 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-6 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-white/90 hover:text-white font-medium py-2 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-white text-[#012D3E] px-6 py-3 rounded-full font-semibold"
                  >
                    Hire Us
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-mesh relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0A9BEA] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Digital Excellence Awaits</span>
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight">
                The <span className="text-shadow">Aura</span>
                <br />
                Behind Your
                <br />
                <span className="text-shadow">Success</span>
              </h1>

              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Transform your business with cutting-edge digital solutions. From mobile apps to digital marketing, we're your strategic partner in growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="group flex items-center gap-2 bg-white text-[#012D3E] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsContactOpen(true)}
                  className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#012D3E] transition-all"
                >
                  Get In Touch
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/20">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-2">NS</div>
                      <div className="text-sm font-semibold tracking-wider">INNOVATION</div>
                    </div>
                  </div>
                </div>

                {/* Floating Icons */}
                {[
                  { icon: "💻", style: { top: '10%', left: '10%' }, delay: 0 },
                  { icon: "📱", style: { top: '15%', right: '15%' }, delay: 1 },
                  { icon: "🎨", style: { bottom: '20%', left: '5%' }, delay: 2 },
                  { icon: "📈", style: { bottom: '15%', right: '10%' }, delay: 3 }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="absolute w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-float"
                    style={{ ...item.style, animationDelay: `${item.delay}s` }}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Who We Are</span>
            </div>

            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">About Nexora Solutions</span>
            </h2>

            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're a team of innovators and problem-solvers dedicated to delivering cutting-edge digital solutions that drive real business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "Accelerate business growth through intelligent digital solutions that strengthen brands and transform ideas into measurable results."
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be a globally trusted leader in technology solutions, empowering every business to harness digital transformation."
              },
              {
                icon: Sparkles,
                title: "Our Values",
                description: "Excellence, innovation, integrity, and customer success guide everything we do, ensuring lasting partnerships."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl glass-dark hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all hover-lift"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border border-white/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-white/5" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Why Choose Nexora?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience, expertise, and excellence in every project we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl glass-dark shadow-lg hover:shadow-2xl transition-all hover-lift border border-white/20"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 lg:p-16 rounded-3xl bg-white/10 backdrop-blur-xl text-white text-center overflow-hidden border border-white/20"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

            <div className="relative z-10">
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital goals.
              </p>
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-[#012D3E] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">What We Offer</span>
            </div>

            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative glass-dark p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all hover-lift overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <AnimatePresence>
                    {activeService === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 mb-6"
                      >
                        {service.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-white/80">
                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 relative">
        <div className="absolute inset-0 bg-white/5" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Client Success Stories</span>
            </div>

            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real experiences from businesses we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift border border-white/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-white/80 mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white font-bold shadow-lg border border-white/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            >
              <button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="font-display text-4xl font-bold mb-3">
                    <span className="gradient-text-alt">Let's Build Your Success</span>
                  </h2>
                  <p className="text-gray-600">Fill in your details — we'll respond within 24 hours</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We'll contact you soon.");
                    setIsContactOpen(false);
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A9BEA]/50 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A9BEA]/50 transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A9BEA]/50 transition-all"
                  />

                  <select
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A9BEA]/50 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Service</option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Your Message *"
                    required
                    className="w-full px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A9BEA]/50 resize-none transition-all"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white font-bold py-5 rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold">Nexora Solutions</h2>
                </div>
              </div>

              <p className="text-white/70 mb-6 leading-relaxed max-w-md">
                The Aura Behind Your Success. Delivering cutting-edge digital solutions that transform businesses.
              </p>

              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, url: 'https://linkedin.com' },
                  { Icon: Twitter, url: 'https://twitter.com' },
                  { Icon: Instagram, url: 'https://instagram.com' }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                  >
                    <item.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-white/70">
                {["Mobile Apps", "Web Development", "UI/UX Design", "Digital Marketing", "IT Staffing", "Custom Software"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3 text-white/70">
                {["About Us", "Careers", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#about" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-bold mb-6">Contact</h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">info@nexorasolution.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={18} className="mt-0.5 flex-shrink-0" />
                  <a
                    href="https://nexorasolutions.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    nexorasolution.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            © 2025 Nexora Solutions. All rights reserved. Crafted with ❤️ in India
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NexoraPortfolio;