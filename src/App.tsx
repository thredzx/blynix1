import React, { useState } from 'react';
import { 
  Globe, 
  GraduationCap, 
  FileCheck, 
  Plane, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from './lib/utils';

const destinations = [
  { name: 'USA', image: 'https://picsum.photos/seed/usa/600/400', universities: '4000+', description: 'World-class education and diverse culture.' },
  { name: 'UK', image: 'https://picsum.photos/seed/uk/600/400', universities: '160+', description: 'Rich academic heritage and global recognition.' },
  { name: 'Canada', image: 'https://picsum.photos/seed/canada/600/400', universities: '100+', description: 'High quality of life and post-study work options.' },
  { name: 'Australia', image: 'https://picsum.photos/seed/australia/600/400', universities: '40+', description: 'Excellent research facilities and stunning landscapes.' },
];

const services = [
  { icon: <GraduationCap className="text-indigo-600" />, title: 'University Selection', desc: 'Find the perfect match for your academic goals and budget.' },
  { icon: <FileCheck className="text-indigo-600" />, title: 'Visa Assistance', desc: 'Expert guidance through the complex visa application process.' },
  { icon: <Globe className="text-indigo-600" />, title: 'Test Preparation', desc: 'Comprehensive coaching for IELTS, TOEFL, GRE, and GMAT.' },
  { icon: <Plane className="text-indigo-600" />, title: 'Pre-Departure Briefing', desc: 'Everything you need to know before you fly to your destination.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Globe className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">GlobalPath</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#destinations" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Destinations</a>
              <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4"
          >
            <a href="#home" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#services" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#destinations" className="block text-base font-medium text-slate-600" onClick={() => setIsMenuOpen(false)}>Destinations</a>
            <a href="#contact" className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-semibold" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
                Your Global Education Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1] text-slate-900 mb-6">
                Unlock Your <span className="italic text-indigo-600">Global</span> Potential.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Expert guidance for students aspiring to study in the world's top universities. From application to visa, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 flex items-center gap-2 group">
                  Start Your Journey <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#destinations" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all text-center">
                  View Destinations
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Student" />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">5,000+</span> Students placed worldwide
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/study/800/1000" 
                  alt="Student studying" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-0 blur-2xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-100 rounded-full -z-0 blur-3xl opacity-60"></div>
              
              <div className="absolute bottom-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Visa Success Rate</p>
                  <p className="text-lg font-bold text-slate-900">99.2%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-slate-600">We provide end-to-end support to ensure your study abroad dreams become a reality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-slate-900 mb-4">Top Study Destinations</h2>
              <p className="text-slate-600">Explore the most popular countries chosen by international students for their higher education.</p>
            </div>
            <a href="#destinations" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Countries <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-md">
                      {dest.universities} Unis
                    </span>
                  </div>
                  <p className="text-white/80 text-sm line-clamp-2">{dest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/50 skew-x-12 translate-x-1/2 -z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-medium mb-8">Ready to take the first step?</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-md">
                Book a free consultation session with our expert advisors and start planning your future today.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Call Us</p>
                    <p className="text-lg font-bold">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Email Us</p>
                    <p className="text-lg font-bold">hello@globalpath.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200">Visit Us</p>
                    <p className="text-lg font-bold">123 Education St, London, UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Preferred Destination</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
                    <option>Select a country</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all h-32" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <Globe className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">GlobalPath</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering students to achieve their academic dreams through expert guidance and personalized consultancy.
              </p>
              <div className="flex gap-4">
                <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram size={20} /></a>
                <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
                <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#home" className="text-slate-400 hover:text-indigo-600 transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-indigo-600 transition-colors">Our Services</a></li>
                <li><a href="#destinations" className="hover:text-indigo-600 transition-colors">Study Destinations</a></li>
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Visa Guide</a></li>
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Scholarship Info</a></li>
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">Test Prep Blog</a></li>
                <li><a href="#home" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
              <p className="text-sm text-slate-500 mb-4">Stay updated with the latest study abroad news.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 GlobalPath Consultants. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#home" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#home" className="hover:text-indigo-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
