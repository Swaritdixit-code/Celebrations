import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  Star, 
  Shield, 
  Camera, 
  Music, 
  Coffee, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MessageSquare,
  Bed,
  Zap,
  Car,
  Mail,
  Send,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/20">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-sans font-light tracking-[0.25em] text-xl uppercase hidden sm:block">CELEBRATIONS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold text-white/70 uppercase tracking-[0.15em]">
          <a href="#about" className="hover:text-brand-accent transition-colors">The Venue</a>
          <a href="#amenities" className="hover:text-brand-accent transition-colors">Amenities</a>
          <a href="#gallery" className="hover:text-brand-accent transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>

        <button 
          onClick={onOpenBooking}
          className="px-6 py-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium rounded-full text-xs uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(212,63,141,0.15)] active:scale-95"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden px-12">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 bg-glow-radial opacity-60 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 border border-white/20 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white/80 font-bold">Belgaum, Karnataka</span>
            <div className="flex items-center text-brand-gold text-sm">
              <span>★★★★★</span>
              <span className="ml-2 text-white/70 text-[10px] font-bold uppercase tracking-widest font-sans">4.5 Ratings</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.95] text-white mb-8">
            A Grand <br/>
            <span className="italic text-brand-accent drop-shadow-[0_0_15px_rgba(225,29,72,0.4)]">Canvas</span> For <br/>
            Your Memories
          </h1>
          
          <p className="max-w-md text-white/80 text-base md:text-lg mb-10 leading-relaxed font-light">
            Awarded for awe-inspiring construction and capacious parking, our fully air-conditioned hall and expansive lawns offer the perfect setting for your perfect wedding.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-brand-accent text-white font-bold rounded-xl hover:bg-brand-accent/90 transition-all text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(225,29,72,0.3)] group">
              Explore Venue
            </button>
            <a href="tel:+911234567890" className="text-white/70 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-accent" /> Call Now
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 rounded-[3rem] pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-[2.5rem] w-full h-[600px] object-cover contrast-110 shadow-2xl"
              alt="Venue Preview"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Square Feet", value: "10K", sub: "CAPACITY" },
    { label: "Events Done", value: "100+", sub: "SUCCESSFUL" },
    { label: "AC Rooms", value: "08", sub: "PREMIUM" },
    { label: "Car Parking", value: "60+", sub: "SPACIOUS" },
  ];

  return (
    <section className="py-20 bg-dark-bg/50 px-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l border-white/20 pl-6"
            >
              <div className="text-3xl md:text-4xl font-serif font-light text-white mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const items = [
    { title: "8 Luxury AC Rooms", desc: "Premium accommodation for your esteemed guests.", icon: Bed },
    { title: "10K Sq. Ft Hall", desc: "A massive climate-controlled area for grand galas.", icon: Users },
    { title: "Ample Parking", desc: "Secure space for 60+ vehicles with professional valet.", icon: Car },
    { title: "Backup Generator", desc: "Uninterrupted celebrations with high-capacity power.", icon: Zap },
    { title: "Private Bridal Room", desc: "Elegant, secluded space for bridal preparation.", icon: Star },
    { title: "Expansive Lawns", desc: "Lush outdoor spaces for evening ceremonies.", icon: MapPin },
  ];

  return (
    <section id="amenities" className="py-32 bg-dark-bg px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-brand-accent font-sans font-medium tracking-widest uppercase text-[10px] mb-4 block">Excellence in every detail</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white">Refined Amenities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-white mb-4 italic">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="relative w-full max-w-2xl glass rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-all z-10">
              <X className="w-5 h-5 text-white/50" />
            </button>

            <div className="p-12 md:p-16">
              <div className="mb-12">
                <h2 className="text-4xl font-serif font-light text-white mb-2">Secure Your Date</h2>
                <p className="text-white/70 text-sm tracking-wide font-medium">Schedule a private tour or request a ceremony quote.</p>
              </div>

              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-24 h-24 bg-brand-accent/20 border border-brand-accent/50 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-accent">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif italic mb-2">Request Received</h3>
                  <p className="text-white/70 mb-10 max-w-xs mx-auto font-medium">Our resident manager will call you within 24 hours to finalize details.</p>
                  <button 
                    onClick={onClose}
                    className="px-12 py-3 bg-white text-black font-semibold rounded-xl text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
                  >
                    Return to Gallery
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-accent font-black mb-3 px-1">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-sm outline-none focus:border-brand-accent transition-colors text-white placeholder:text-white/30" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-accent font-black mb-3 px-1">Event Type</label>
                      <select className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-sm outline-none focus:border-brand-accent transition-colors text-white appearance-none">
                        <option className="bg-[#0D0D0D]">Wedding Ceremony</option>
                        <option className="bg-[#0D0D0D]">Corporate Gala</option>
                        <option className="bg-[#0D0D0D]">Social Celebration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-accent font-black mb-3 px-1">Preferred Date</label>
                      <input required type="date" className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-sm outline-none focus:border-brand-accent transition-colors text-white" />
                    </div>
                  </div>

                  <button 
                    disabled={formState === 'sending'}
                    className="w-full py-5 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl mt-6 transition-all text-xs uppercase tracking-[0.3em] shadow-[0_15px_30px_rgba(225,29,72,0.3)] flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {formState === 'sending' ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Confirm Appointment <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#080808] px-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-brand-accent font-sans font-bold tracking-[0.3em] uppercase text-[11px] mb-6 block">Inquire with us</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-12 leading-[1.1]">Let's Plan Your <br /><span className="italic">Eternal</span> Legacy</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-brand-accent transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-white/50 group-hover:text-brand-accent scale-110" />
                </div>
                <div>
                  <h4 className="font-serif italic text-xl mb-2 text-white">Residence Belgaum</h4>
                  <p className="text-white/60 leading-relaxed font-light">Airport Road, Civil Hospital Vicinity<br />Belgaum, KA 590001</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20 group-hover:border-brand-accent transition-colors duration-500">
                  <Phone className="w-6 h-6 text-white/50 group-hover:text-brand-accent scale-110" />
                </div>
                <div>
                  <h4 className="font-serif italic text-xl mb-2 text-white">Direct Line</h4>
                  <p className="text-white/60 leading-relaxed font-light">+91 98765 43210<br />+91 0831 245678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />
             <div className="relative glass rounded-[3rem] p-12 md:p-16 h-full flex flex-col justify-between shadow-brand-accent/5">
                <div>
                   <h3 className="text-2xl font-serif font-light text-white mb-6">Talk to a Consultant</h3>
                   <p className="text-white/70 mb-10 font-light leading-relaxed">Our event specialists are here to provide personalized tours and detailed budget estimates for your grand vision.</p>
                </div>
                
                <div className="flex items-center gap-6 pt-12 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">Response Time</div>
                    <div className="text-lg font-serif italic text-white/90">Under 2 Hours</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all cursor-pointer bg-white/5"><Instagram className="w-4 h-4" /></div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all cursor-pointer bg-white/5"><Facebook className="w-4 h-4" /></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-[#050505] border-t border-white/5 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/30 tracking-[0.3em] uppercase font-medium">
        <div className="flex items-center gap-4">
          <span className="text-white/60">CELEBRATIONS</span>
          <span className="h-4 w-[1px] bg-white/10" />
          <span>© 2026 Venue Group</span>
        </div>
        
        <div className="flex gap-12">
          <span>Banquet & Lawn</span>
          <span>Karnataka, India</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      <Hero />
      <Stats />
      
      <section id="about" className="py-32 bg-dark-bg overflow-hidden px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544161442-e3dbfe6927a3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Interior View" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-accent opacity-20 blur-[120px] rounded-full" />
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-accent font-sans font-bold tracking-widest uppercase text-[11px] mb-6 block">About Celebrations</span>
                <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-10 leading-tight">Where Grandeur <br />Meets <span className="italic">Heritage</span></h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
                  A wedding venue is more than just a setting; it is a place where memories are made. Our Celebrations Convention hall and lawns located in Belgaum is known for its awe-inspiring construction and capacious car parking.
                </p>
                <p className="text-white/80 text-lg mb-12 leading-relaxed font-light">
                  A fully air-conditioned hall with righteous staff is here to ensure you feel happy and delighted. Experience the perfect blend of royal architecture and modern luxury.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_8px_#E11D48]" />
                    <span className="font-medium text-white/80 text-sm tracking-wide">Professional Management</span>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_8px_#E11D48]" />
                    <span className="font-medium text-white/80 text-sm tracking-wide">Bespoke Experiences</span>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_8px_#E11D48]" />
                    <span className="font-medium text-white/80 text-sm tracking-wide">Strategic Location</span>
                  </div>
                  <div className="flex items-center gap-4 py-4 border-b border-white/5">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full shadow-[0_0_8px_#E11D48]" />
                    <span className="font-medium text-white/80 text-sm tracking-wide">Luxury Comfort</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Amenities />

      {/* Gallery Section - Preview */}
      <section id="gallery" className="py-40 bg-[#050505] px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-accent font-sans font-bold tracking-widest uppercase text-[11px] mb-4 block">Visual Experience</span>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">Curated <span className="italic">Moments</span></h2>
              <p className="text-white/70 font-light leading-relaxed">Explore the architectural elegance and grand atmosphere of Belgaum's most prestigious convention destination.</p>
            </div>
            <button className="flex items-center gap-3 text-white/80 hover:text-brand-accent transition-all font-bold text-[10px] uppercase tracking-[0.25em]">
              Archive 2026 <Instagram className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
               whileHover={{ scale: 0.99 }}
               className="md:col-span-7 h-[600px] rounded-[3rem] overflow-hidden relative group border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale-0 shadow-inner" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex items-end">
                <div>
                   <span className="text-brand-accent text-[11px] uppercase tracking-widest font-black block mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">Featured Venue</span>
                   <span className="font-serif font-light text-3xl text-white">The Grand Hall</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
               whileHover={{ scale: 0.99 }}
               className="md:col-span-5 h-[600px] rounded-[3rem] overflow-hidden relative group border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale-0 shadow-inner" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-12 flex items-end">
                <div>
                   <span className="text-brand-accent text-[11px] uppercase tracking-widest font-black block mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">Luxury Spaces</span>
                   <span className="font-serif font-light text-3xl text-white">Vibrant Lawns</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* Floating Action Button mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-2xl shadow-brand-accent/40 text-white active:scale-90 transition-transform"
        >
          <Calendar className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
