
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Trophy, Heart } from 'lucide-react';
import { HeatmapBackground } from '../components/HeatmapBackground';
import { FloatingParticles } from '../components/FloatingParticles';
import { MOCK_EVENTS, MOCK_GALLERY, BRAND_ASSETS } from '../constants';
import { Typewriter } from '../components/Typewriter';
import { Unfocused } from '../components/Unfocused';
import { Carousel3D } from '../components/Carousel3D';
import { CursorMaskReveal } from '../components/CursorMaskReveal';
import { AppleHello } from '../components/AppleHello';

const CountUp: React.FC<{ end: number, label: string, icon: any }> = ({ end, label, icon: Icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 glass-panel rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all card-3d border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <div className="inline-flex p-4 rounded-full bg-primary/20 text-accent mb-4 shadow-[0_0_20px_rgba(46,139,87,0.3)]">
        <Icon size={32} />
      </div>
      <div className="text-4xl font-bold text-white mb-2">{count}+</div>
      <div className="text-gray-400 font-medium uppercase tracking-wide text-sm">{label}</div>
    </div>
  );
};

export const Home: React.FC = () => {
  const highlightsImages = [
    BRAND_ASSETS.hero_wins,
    BRAND_ASSETS.trophy_moment,
    BRAND_ASSETS.meetup_1,
    BRAND_ASSETS.meetup_2,
    BRAND_ASSETS.meetup_3,
    ...MOCK_GALLERY.map(item => item.src)
  ];

  return (
    <div className="w-full overflow-hidden bg-dark text-white">
      
      {/* Hero Section with Cursor Reveal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Heatmap always visible */}
        <HeatmapBackground />
        
        {/* Cursor Reveal Container */}
        <div className="absolute inset-0 z-0">
          <CursorMaskReveal
            size={400}
            // Masked Content (Dimmed)
            maskedContent={
               <div className="w-full h-full relative">
                 <img src={BRAND_ASSETS.hero_wins} className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" alt="Background" />
                 <div className="absolute inset-0 bg-dark/80" />
               </div>
            }
            // Reveal Content (Vibrant)
            revealContent={
              <div className="w-full h-full relative">
                 <img src={BRAND_ASSETS.hero_wins} className="w-full h-full object-cover" alt="Revealed Background" />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            }
            className="w-full h-full"
          />
        </div>

        <FloatingParticles />
        
        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 pt-20">
          <div className="flex flex-col items-center text-center">
            
            <Unfocused>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-accent/20 text-accent font-bold text-sm mb-8 animate-float shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Welcome to the Pride
              </div>
            </Unfocused>
            
            <div className="relative mb-6">
              <AppleHello className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-50" />
              <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-none tracking-tight drop-shadow-2xl">
                <Unfocused delay={0.1}>
                  Community.
                </Unfocused>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-2">
                   <Unfocused delay={0.2}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Nature.</span>
                   </Unfocused>
                   <div className="h-[1.2em] text-white">
                      <Typewriter 
                        words={['Legacy.', 'Family.', 'Future.']} 
                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                      />
                   </div>
                </div>
              </h1>
            </div>
            
            <Unfocused delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                Gir House Society — where the spirit of the forest meets the ambition of the future.
              </p>
            </Unfocused>

            <Unfocused delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <a href="https://whatsapp.com" className="px-8 py-4 bg-accent text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:bg-yellow-400 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Join WhatsApp <ArrowRight size={20} />
                </a>
                <Link to="/events" className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-bold shadow-lg hover:bg-white/10 hover:border-accent transition-all flex items-center justify-center gap-2 group">
                  Explore Events <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Unfocused>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
           </div>
        </div>
      </section>

      {/* Stats Section with Heatmap Effect */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUp end={1200} label="Happy Residents" icon={Users} />
            <CountUp end={45} label="Annual Events" icon={Calendar} />
            <CountUp end={12} label="Active Clubs" icon={Trophy} />
            <CountUp end={24} label="Hour Support" icon={Heart} />
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-primary/5 -z-10 skew-y-3 transform origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-3 translate-x-2 translate-y-2 transition-transform group-hover:rotate-6 opacity-60 mix-blend-overlay"></div>
              <img 
                src={BRAND_ASSETS.meetup_1} 
                alt="Community Meeting" 
                className="relative rounded-3xl shadow-2xl w-full card-3d opacity-90 hover:opacity-100"
              />
            </div>
            <div>
              <Unfocused>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  More Than Just A Hostel. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">A Home in the Wild.</span>
                </h2>
              </Unfocused>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Gir House Society connects residents with activities, support, and leadership opportunities. Like the ecosystem of Gir National Park, every member plays a vital role in our thriving community.
              </p>
              <Link to="/about" className="text-accent font-bold hover:text-white transition-colors inline-flex items-center gap-2 border-b-2 border-transparent hover:border-accent pb-1 text-lg">
                Read our full story <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold text-white">Happening in Gir</h2>
              <p className="text-gray-400 mt-2 text-lg">Don't miss out on the latest buzz.</p>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_EVENTS.slice(0, 3).map(event => (
              <div key={event.id} className="group glass-panel rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(46,139,87,0.2)] hover:-translate-y-2 transition-all duration-300 border-white/5">
                <div className="h-64 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-accent uppercase shadow-sm border border-white/10">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent font-semibold text-sm mb-2">{new Date(event.date).toLocaleDateString()}</p>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">{event.description}</p>
                  <Link to="/events" className="text-white hover:text-accent text-sm font-bold flex items-center gap-2">Register Now <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Stories Section with 3D Carousel */}
      <section className="py-24 bg-gradient-to-b from-dark to-black text-white relative overflow-hidden">
        {/* Forest Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <Unfocused>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Highlights Reel</h2>
              <p className="text-gray-400 text-lg">Stories of success, grit, and joy from our residents.</p>
            </Unfocused>
          </div>

          <div className="h-[500px] w-full relative">
             <Carousel3D images={highlightsImages} height="500px" />
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Unfocused>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Ready to join the pride?</h2>
          </Unfocused>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you want to lead, play, create, or just relax, there's a spot for you at Gir House.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-accent text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]">
              Become a Member
            </button>
            <Link to="/contact" className="px-10 py-5 bg-transparent border-2 border-white/20 backdrop-blur text-white rounded-full font-bold hover:bg-white hover:text-black transition-all">
              Contact Council
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
