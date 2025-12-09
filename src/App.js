
// import React, { useState, useEffect } from 'react';
// import {
//   X, Phone, Mail, MapPin, Linkedin, Twitter,
//   MessageCircle, Star, ArrowRight, Sparkles, Zap, Target, Eye,
//   Instagram, CheckCircle, Globe, Award, Users, Clock
// } from 'lucide-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPinterest } from '@fortawesome/free-brands-svg-icons';
// import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';


// import { motion, AnimatePresence } from 'framer-motion';

const NexoraPortfolio = () => {
  return (
    <div className="w-screen h-screen bg-red-600 flex items-center justify-center">
      <h1 className="text-white font-bold text-2xl">
        An Error Occurred
      </h1>
    </div>
  );
};


// const NexoraPortfolio = () => {

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [isContactOpen, setIsContactOpen] = useState(false);


//   const openContact = () => {
//     setIsContactOpen(true);
//     setIsMenuOpen(false); // closes mobile menu if open
//   };


//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


//   const features = [
//     { icon: <Zap className="w-8 h-8" />, title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
//     { icon: <Users className="w-8 h-8" />, title: "Expert Team", desc: "Seasoned professionals with deep industry expertise" },
//     { icon: <Award className="w-8 h-8" />, title: "Quality First", desc: "Premium solutions built to exceed expectations" },
//     { icon: <Clock className="w-8 h-8" />, title: "24/7 Support", desc: "Always here when you need us, anytime" }
//   ];

//   const socialIcons = [
//     { type: 'lucide', icon: Linkedin, url: 'https://linkedin.com' },
//     { type: 'lucide', icon: Twitter, url: 'https://twitter.com' },
//     { type: 'lucide', icon: Instagram, url: 'https://instagram.com' },
//     { type: 'fa', icon: faPinterest, url: 'https://pinterest.com' },
//   ];


//   const services = [
//     {
//       title: "Mobile App Development",
//       description: "Develop sleek and responsive mobile apps for iOS and Android tailored to your business needs.",
//       icon: "📱",
//       gradient: "from-[#0A9BEA] to-[#012D3E]"
//     },
//     {
//       title: "Website Development",
//       description: "Build modern, responsive, and high-performing websites that drive engagement and conversions.",
//       icon: "💻",
//       gradient: "from-[#FF6B6B] to-[#C70039]"
//     },
//     // {
//     //   title: "Graphic Designing",
//     //   description: "Craft stunning visual content including logos, banners, and marketing creatives that leave an impression.",
//     //   icon: "🎨",
//     //   gradient: "from-[#FFC312] to-[#EE5A24]"
//     // },
//     {
//       title: "UI/UX Design & Graphic Designing",
//       description: "Design intuitive and user-friendly interfaces that enhance user satisfaction and retention.",
//       icon: "🖌️",
//       gradient: "from-[#12CBC4] to-[#0652DD]"
//     },
//     {
//       title: "Digital Marketing",
//       description: "Boost your brand presence with result-driven SEO, social media, and paid campaigns.",
//       icon: "📈",
//       gradient: "from-[#FDA7DF] to-[#D980FA]"
//     },
//     {
//       title: "IT Staffing",
//       description: "Connect with top IT talent through our professional recruitment and staffing solutions.",
//       icon: "👥",
//       gradient: "from-[#FF9F43] to-[#EE5253]"
//     },
//     {
//       title: "Custom Software Solutions",
//       description: "Deliver tailored software solutions to optimize operations and achieve your business goals.",
//       icon: "🖥️",
//       gradient: "from-[#1B9CFC] to-[#55E6C1]"
//     }
//   ];


//   const testimonials = [
//     {
//       name: "Rajesh Kumar",
//       position: "CEO, TechCorp India",
//       content: "Nexora Solutions transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations.",
//       rating: 5,
//       avatar: "RK"
//     },
//     {
//       name: "Priya Sharma",
//       position: "Marketing Director, StartupHub",
//       content: "The mobile app they developed for us has been a game-changer. Professional, reliable, and innovative approach to every project.",
//       rating: 5,
//       avatar: "PS"
//     },
//     {
//       name: "Amit Patel",
//       position: "Founder, E-commerce Plus",
//       content: "Their recruitment services helped us find the perfect team members. Nexora Solutions truly understands business needs.",
//       rating: 5,
//       avatar: "AP"
//     }
//   ];


//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) element.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };


//   const FloatingParticles = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 bg-[#0A9BEA] rounded-full opacity-20 animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             animationDuration: `${3 + Math.random() * 4}s`
//           }}
//         />
//       ))}
//     </div>
//   );


//   return (
//     <div className="min-h-screen bg-white relative overflow-x-hidden">

//       {/* ================================================= NAVIGATION ================================================= */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50
//         ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-[#0A9BEA]/10'
//         : 'bg-transparent'
//         }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">


//             {/* Logo */}
//             <div className="flex items-center space-x-3 group cursor-pointer">
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
//                   <img
//                     src="/assets/logo.png"
//                     alt="icon"
//                     className="w-12 h-12 object-contain"
//                   />
//                 </div>
//                 <div className="absolute -inset-1 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-300"></div>
//               </div>
//               <div>
//                 <h1 className="text-xl font-black tracking-tight">
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                     NEXORA SOLUTIONS
//                   </span>
//                 </h1>
//                 <p className="text-xs text-[#0A9BEA] font-bold tracking-widest">THE AURA BEHIND YOUR SUCCESS</p>
//               </div>
//             </div>


//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8">
//               <button onClick={() => scrollToSection('home')} className="relative text-gray-700 hover:text-[#0A9BEA] font-semibold transition-all duration-300 group">
//                 Home
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] group-hover:w-full transition-all duration-300"></span>
//               </button>
//               <button onClick={() => scrollToSection('about')} className="relative text-gray-700 hover:text-[#0A9BEA] font-semibold transition-all duration-300 group">
//                 About Us
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] group-hover:w-full transition-all duration-300"></span>
//               </button>
//               <button onClick={() => scrollToSection('services')} className="relative text-gray-700 hover:text-[#0A9BEA] font-semibold transition-all duration-300 group">
//                 Services
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] group-hover:w-full transition-all duration-300"></span>
//               </button>
//               <button onClick={openContact} className="relative text-gray-700 hover:text-[#0A9BEA] font-semibold transition-all duration-300 group">
//                 Contact Us
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] group-hover:w-full transition-all duration-300"></span>
//               </button>

//               <button
//                 onClick={openContact}  // ← Now this also opens the modal
//                 className="relative bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
//               >
//                 <span className="relative z-10">Hire Us</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>


//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0A9BEA] font-semibold text-left transition-all duration-300 transform hover:translate-x-2">
//                 Home
//               </button>
//               <button onClick={() => scrollToSection('about')} className="...">About Us</button>
//               <button onClick={() => scrollToSection('services')} className="...">Services</button>
//               <button onClick={openContact} className="text-gray-700 hover:text-[#0A9BEA] font-semibold text-left transition-all duration-300 transform hover:translate-x-2">
//                 Contact Us
//               </button>

//               <button
//                 onClick={openContact}
//                 className="bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-6 py-3 rounded-full w-fit font-bold"
//               >
//                 Hire Us
//               </button>
//             </div>
//           </div>


//           {/* Mobile Navigation */}
//           <div className={`md:hidden transition-all duration-500 ease-out ${isMenuOpen
//             ? 'max-h-96 opacity-100 py-6'
//             : 'max-h-0 opacity-0 py-0'
//             } overflow-hidden bg-white/95 backdrop-blur-xl rounded-b-3xl`}>
//             <div className="flex flex-col space-y-6 px-4">

//               {['home', 'about', 'services', 'contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className="text-gray-700 hover:text-[#0A9BEA] font-semibold text-left transition-all duration-300 capitalize transform hover:translate-x-2"
//                 >
//                   {item === 'contact' ? 'Contact Us' : item === 'about' ? 'About Us' : item}
//                 </button>
//               ))}

//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-6 py-3 rounded-full w-fit font-bold"
//               >
//                 Hire Us
//               </button>

//             </div>
//           </div>

//         </div>
//       </nav>




//       {/* ================================================= HERO SECTION ================================================= */}
//       <section id="home" className="min-h-screen flex items-center py-32 relative overflow-hidden">

//         <FloatingParticles />

//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#012D3E]/10 to-[#0A9BEA]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>


//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//             <div className="space-y-10 animate-fadeInLeft">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 backdrop-blur-sm">
//                   <Sparkles className="w-5 h-5 text-[#0A9BEA]" />
//                   <span className="text-sm font-bold text-[#012D3E]">Digital Excellence Awaits</span>
//                 </div>


//                 <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
//                   The{" "}
//                   <span className="relative inline-block">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                       Aura
//                     </span>
//                     <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-full transform scale-x-0 animate-scaleX"></div>
//                   </span>

//                   <br />

//                   Behind Your{" "}
//                   <span className="relative inline-block">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] animate-gradient">
//                       Success
//                     </span>
//                     <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] rounded-full transform scale-x-0 animate-scaleX delay-500"></div>
//                   </span>
//                 </h1>

//                 <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
//                   Transform your business with our comprehensive digital solutions.
//                   From mobile apps to digital marketing, we're your partner in growth.
//                 </p>

//               </div>


//               <div className="flex flex-col sm:flex-row gap-6">

//                 <button
//                   onClick={() => scrollToSection('services')}
//                   className="group relative bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center space-x-2">
//                     <span>Explore Services</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#012D3E] to-[#0A9BEA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </button>

//                 <button
//                   onClick={openContact}
//                   className="group border-2 border-[#0A9BEA] text-[#0A9BEA] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0A9BEA] hover:text-white transition-all duration-300 transform hover:-translate-y-2"
//                 >
//                   <span className="flex items-center space-x-2">
//                     <span>Get In Touch</span>
//                     <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
//                   </span>
//                 </button>

//               </div>
//             </div>




//             <div className="relative animate-fadeInRight">
//               <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">

//                 <div className="absolute inset-0 bg-gradient-to-br from-[#0A9BEA]/20 to-[#012D3E]/20 animate-gradient"></div>

//                 <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-2xl shadow-2xl animate-float"></div>
//                 <div className="absolute top-20 right-16 w-16 h-16 bg-gradient-to-br from-[#012D3E] to-[#0A9BEA] rounded-full shadow-2xl animate-float delay-1000"></div>
//                 <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-xl shadow-2xl animate-float delay-2000"></div>

//                 <div className="relative z-10 flex items-center justify-center h-full">
//                   <div className="text-center transform hover:scale-105 transition-transform duration-500">
//                     <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative group">
//                       <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E]">NS</span>
//                       <div className="absolute -inset-2 bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] rounded-full opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
//                     </div>

//                     <h3 className="text-3xl font-bold text-[#012D3E] mb-3">Innovation Meets Excellence</h3>
//                     <p className="text-lg text-gray-600 font-medium">Your Success, Our Mission</p>
//                   </div>

//                 </div>

//               </div>
//             </div>

//           </div>

//         </div>

//       </section>





//       {/* ================================================= ABOUT SECTION ================================================= */}
//       <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white relative">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <div className="text-center mb-20 animate-fadeInUp">
//             <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 mb-6">
//               <Target className="w-5 h-5 text-[#0A9BEA]" />
//               <span className="text-sm font-bold text-[#012D3E]">Who We Are</span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                 About Nexora Solutions
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               We are a dynamic team of visionaries and innovators, dedicated to providing cutting-edge solutions.
//             </p>
//           </div>


//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//             {[

//               {
//                 icon: <Target className="w-8 h-8 text-white" />,
//                 title: "Our Mission",
//                 description: "We help businesses grow faster with smart digital solutions that strengthen their brand and turn great ideas into real results."
//               },
//               {
//                 icon: <Eye className="w-8 h-8 text-white" />,
//                 title: "Our Vision",
//                 description: "To become a globally trusted leader in cutting edge technology solutions, driving a future where every business can harness the full power of digital transformation."
//               },
//               {
//                 icon: <Zap className="w-8 h-8 text-white" />,
//                 title: "Our Values",
//                 description: "We stand for excellence, innovation, integrity, and customer success in everything we do."
//               }

//             ].map((item, index) => (

//               <div
//                 key={index}
//                 className="group relative p-10 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-[#0A9BEA]/5 hover:to-[#012D3E]/5
//                 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3
//                 border border-gray-100 hover:border-[#0A9BEA]/20"
//               >

//                 <div className="absolute -top-6 left-8">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E]
//                   rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl
//                   group-hover:scale-110 transition-all duration-300">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <div className="pt-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#012D3E] transition-colors duration-300">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>





//       {/* ================================================= WHY CHOOSE US ================================================= */}
//       <section id="whyus" className="py-32 px-6 bg-white">

//         <div className="max-w-7xl mx-auto">

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                 Why Choose Nexora?
//               </span>
//             </h2>


//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We bring experience, expertise, and excellence to every project.
//             </p>
//           </motion.div>


//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//             {features.map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="text-center p-8 rounded-2xl"
//                 style={{ backgroundColor: "#f8fafc" }}
//               >
//                 {/* Animated Gradient Icon Background */}
//                 <motion.div
//                   whileHover={{ rotate: 360, scale: 1.15 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden"
//                 >
//                   {/* Gradient Background */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] animate-gradient"></div>

//                   {/* Optional subtle overlay glow */}
//                   <div className="absolute inset-0 bg-white opacity-10"></div>

//                   {/* Icon on top */}
//                   <div className="relative z-10 text-white">
//                     {feature.icon}
//                   </div>
//                 </motion.div>

//                 <h3 className="text-xl font-bold mb-2" style={{ color: "#002D3F" }}>
//                   {feature.title}
//                 </h3>

//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}

//           </div>



//           {/* CTA Banner */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="mt-20 p-12 rounded-3xl text-center text-white relative overflow-hidden"
//             style={{ background: "linear-gradient(135deg, #0C9BEA 0%, #002D3F 100%)" }}
//           >

//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
//               <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full"></div>
//             </div>

//             <div className="relative z-10">
//               <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                 Ready to Transform Your Business?
//               </h3>

//               <p className="text-xl mb-8 opacity-90">
//                 Let's discuss how we can help you achieve your goals.
//               </p>

//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-block px-8 py-4 bg-white rounded-full font-bold text-lg"
//                 style={{ color: "#0C9BEA" }}
//               >
//                 Get Free Consultation
//               </motion.a>

//             </div>

//           </motion.div>

//         </div>

//       </section>





//       {/* ================================================= SERVICES SECTION ================================================= */}
//       <section id="services" className="py-32 bg-gradient-to-br from-[#012D3E]/5 to-[#0A9BEA]/5 relative overflow-hidden">

//         <FloatingParticles />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

//           <div className="text-center mb-20 animate-fadeInUp">
//             <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
//               <Sparkles className="w-5 h-5 text-[#0A9BEA]" />
//               <span className="text-sm font-bold text-[#012D3E]">What We Offer</span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                 Our Services
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Comprehensive, cutting-edge solutions crafted to accelerate your business growth.
//             </p>
//           </div>


//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {services.map((service, index) => (

//               <div
//                 key={index}
//                 className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-gray-100 hover:border-[#0A9BEA]/30 overflow-hidden"
//               >

//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

//                 <div className="relative z-10">
//                   <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#012D3E] transition-colors duration-300">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

//                   <button className="flex items-center space-x-2 text-[#0A9BEA] font-bold group-hover:text-[#012D3E] transition-colors duration-300">
//                     <span>Learn More</span>
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                   </button>
//                 </div>


//                 <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#0A9BEA]/20 to-[#012D3E]/20 blur-xl"></div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>





//       {/* ================================================= TESTIMONIALS SECTION ================================================= */}
//       <section className="py-32 bg-white relative">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <div className="text-center mb-20 animate-fadeInUp">
//             <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A9BEA]/10 to-[#012D3E]/10 rounded-full px-6 py-3 mb-6">
//               <Star className="w-5 h-5 text-[#0A9BEA]" />
//               <span className="text-sm font-bold text-[#012D3E]">Client Success Stories</span>
//             </div>

//             <h2 className="text-5xl md:text-6xl font-black text-center mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9BEA] to-[#012D3E] animate-gradient">
//                 What Our Clients Say
//               </span>
//             </h2>

//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Here’s what our clients have to say about their experience working with us.
//             </p>
//           </div>


//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {testimonials.map((testimonial, index) => (

//               <div
//                 key={index}
//                 className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-[#0A9BEA]/20"
//               >

//                 <div className="flex mb-6">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
//                       style={{ transitionDelay: `${i * 100}ms` }}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#0A9BEA] to-[#012D3E] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
//                     {testimonial.avatar}
//                   </div>

//                   <div>
//                     <p className="font-bold text-gray-900">{testimonial.name}</p>
//                     <p className="text-sm text-gray-600">{testimonial.position}</p>
//                   </div>
//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>


//       {/* ==================== CONTACT MODAL DIALOG ==================== */}
//       <AnimatePresence>
//         {isContactOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsContactOpen(false)}
//             className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 30, stiffness: 400 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#012D3E]/95 to-[#0A9BEA]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setIsContactOpen(false)}
//                 className="absolute top-6 right-6 text-white/70 hover:text-white z-50 bg-black/20 backdrop-blur-sm p-3 rounded-full transition-all hover:scale-110 hover:bg-black/40"
//               >
//                 <X size={28} />
//               </button>

//               {/* Floating Particles Inside Modal */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {[...Array(12)].map((_, i) => (
//                   <div key={_} className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
//                     style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
//                   />
//                 ))}
//               </div>

//               <div className="p-10 md:p-16 relative z-10">
//                 <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
//                   Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Success</span>
//                 </h2>
//                 <p className="text-center text-gray-200 mb-10">Fill in your details — we'll get back in 24 hours</p>

//                 <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll contact you soon"); setIsContactOpen(false); }} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <input type="text" placeholder="Your Name *" required className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" />
//                     <input type="email" placeholder="Email *" required className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" />
//                   </div>
//                   <input type="text" placeholder="Company (optional)" className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50" />
//                   <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white" defaultValue="">
//                     <option value="" disabled>Select Service</option>
//                     {services.map(s => <option key={s.title} className="text-gray-900">{s.title}</option>)}
//                   </select>
//                   <textarea rows={4} placeholder="Your Message *" required className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-white/50"></textarea>

//                   <button type="submit" className="w-full bg-white text-[#012D3E] font-bold py-5 rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition duration-300">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>




//       {/* ================================================= FOOTER / CONTACT ================================================= */}
//       <footer id="footer" className="py-20 px-6 text-white" style={{ backgroundColor: "#0F6CA1" }}>

//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">


//             {/* Company Info */}
//             <div className="lg:col-span-1">

//               <div className="flex items-center gap-3 mb-5">
//                 <div className="w-12 h-12 rounded-xl bg-[#0C9BEA] flex items-center justify-center">
//                   <span className="text-2xl font-bold">N</span>
//                 </div>
//                 <h2 className="text-2xl font-bold">
//                   Nexora Solutions<span className="text-[#0C9BEA]">.</span>
//                 </h2>
//               </div>

//               <p className="text-gray-200 mb-8 leading-relaxed">The Aura Behind Your Success.</p>

//               <div className="flex gap-4">
//                 {socialIcons.map((item, i) => (
//                   <a
//                     key={i}
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gray-700 hover:bg-[#0C9BEA] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                   >
//                     {item.type === 'lucide' ? (
//                       <item.icon size={22} strokeWidth={1.75} />
//                     ) : (
//                       <FontAwesomeIcon icon={item.icon} className="text-[22px]" />
//                     )}
//                   </a>
//                 ))}
//               </div>


//             </div>



//             {/* Hire Developers */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Hire Developers</h3>
//               <ul className="space-y-3 text-gray-200">
//                 {[
//                   "Hire .NET Developer",
//                   "Hire C# Developer",
//                   "Hire React Native Developer",
//                   "Hire ReactJS Developer",
//                   "Hire Blazor Developer",
//                   "Hire Flutter Developer",
//                   "Hire Laravel Developer",
//                   "Hire Graphics Designer",
//                   "Hire Digital Marketer",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a href="#contact" className="hover:text-white transition">{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>



//             {/* Services */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Services</h3>
//               <ul className="space-y-3 text-gray-200">
//                 {["Mobile Apps", "Web Development", "Graphic Designing", "UI/UX Designing", "Digital Marketing", "IT Staffing"].map((item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <CheckCircle size={16} className="text-white flex-shrink-0" />
//                     <a href="#services" className="hover:text-white transition">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>



//             {/* Company */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Company</h3>
//               <ul className="space-y-3 text-gray-200">
//                 {["About Us", "Careers", "Privacy"].map((item) => (
//                   <li key={item}>
//                     <a href="https://facebook.com" className="hover:text-white transition">{item}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>



//             {/* Contact */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Contact</h3>

//               <div className="space-y-5 text-gray-200">

//                 <div className="flex items-start gap-4">
//                   <Mail size={20} className="mt-1 flex-shrink-0" />
//                   <span>info@nexorasolution.com</span>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Phone size={20} className="mt-1 flex-shrink-0" />
//                   <span>+91 98765 43210</span>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <FontAwesomeIcon
//                     icon={faMicrosoft}
//                     className="mt-1 flex-shrink-0 text-[20px]"
//                   />
//                   <span>Microsoft Teams</span>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <MapPin size={20} className="mt-1 flex-shrink-0" />
//                   <span>Ahmedabad, Gujarat</span>
//                 </div>

//                 <a
//                   href="https://nexorasolutions.netlify.app/"
//                   target="_self"
//                   rel="noopener noreferrer"
//                   className="flex items-start gap-4 hover:underline"
//                 >
//                   <Globe size={20} className="mt-1 flex-shrink-0" />
//                   <span>nexorasolution.com</span>
//                 </a>


//               </div>

//             </div>

//           </div>


//           <div className="border-t border-gray-600 pt-8 text-center text-gray-300 text-sm">
//             © 2025 Nexora Solutions. All rights reserved. Crafted with ❤️ in India
//           </div>

//         </div>

//       </footer>





//       {/* ================================================= CUSTOM STYLES ================================================= */}
//       <style jsx>{`

//       @keyframes gradient {
//   0%, 100% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
// }

// .animate-gradient {
//   background-size: 200% 200%;
//   animation: gradient 8s ease infinite;
// }


//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-50px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(50px); }
//           to   { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes gradient {
//           0%,100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @keyframes scaleX {
//           from { transform: scaleX(0); }
//           to   { transform: scaleX(1); }
//         }

//         .animate-fadeInLeft { animation: fadeInLeft 1s ease-out; }
//         .animate-fadeInRight { animation: fadeInRight 1s ease-out; }
//         .animate-fadeInUp { animation: fadeInUp 0.8s ease-out; }
//         .animate-float { animation: float 3s ease-in-out infinite; }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .animate-scaleX {
//           animation: scaleX 1s ease-out forwards;
//         }

//         .delay-500 { animation-delay: .5s; }
//         .delay-1000 { animation-delay: 1s; }
//         .delay-2000 { animation-delay: 2s; }
//       `}</style>

//     </div>
//   );
// };

export default NexoraPortfolio;
