import React, { useState, useEffect } from 'react';

const SvgBase = ({ children, size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const ShieldIcon = (p) => <SvgBase {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></SvgBase>;
const XIcon = (p) => <SvgBase {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></SvgBase>;
const BuildingIcon = (p) => <SvgBase {...p}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></SvgBase>;
const GlobeIcon = (p) => <SvgBase {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></SvgBase>;
const BankIcon = (p) => <SvgBase {...p}><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></SvgBase>;
const ArrowRightIcon = (p) => <SvgBase {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></SvgBase>;
const ClockIcon = (p) => <SvgBase {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></SvgBase>;
const MailIcon = (p) => <SvgBase {...p}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></SvgBase>;
const UsersIcon = (p) => <SvgBase {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></SvgBase>;
const CheckCircleIcon = (p) => <SvgBase {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></SvgBase>;
const ServerIcon = (p) => <SvgBase {...p}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></SvgBase>;
const TerminalIcon = (p) => <SvgBase {...p}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></SvgBase>;
const LayoutIcon = (p) => <SvgBase {...p}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></SvgBase>;

const CryptoSealIcon = (p) => (
  <svg viewBox="0 0 100 100" width={p.size || 100} height={p.size || 100} className={p.className}>
    <defs>
      <radialGradient id="foil" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#foil)" stroke="#334155" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2,2" />
    <circle cx="50" cy="50" r="38" fill="#0f172a" />
    <path d="M50 16 L79 33 L79 67 L50 84 L21 67 L21 33 Z" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.9" />
    <path d="M50 16 L50 84 M21 33 L79 67 M21 67 L79 33" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
    <circle cx="50" cy="50" r="14" fill="#020617" stroke="#38bdf8" strokeWidth="1.5" />
    <rect x="45" y="45" width="10" height="10" fill="none" stroke="#fff" strokeWidth="1.5" transform="rotate(45 50 50)" />
    <circle cx="50" cy="50" r="2" fill="#fff" />
  </svg>
);

const BackgroundGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export default function BearerProspectus() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('state');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const audienceData = {
    state: {
      title: "For State & Federal Offices",
      headline: "Deploy a 100% Online Registry in Days, Not Years.",
      description: "Replace physical mailrooms, long in-person notary lines, and manual data entry with the Bearer Whitelabel SDK. Offer your citizens and corporations an instantly accessible, cryptographically secure online portal to manage titles, charters, and deeds.",
      benefits: [
        "Reduce mail processing overhead by 94%",
        "Eliminate in-person DMV/Registry bottlenecks",
        "Automated FinCEN & OFAC compliance polling",
        "Plug-and-play Whitelabel SDK for '.gov' domains"
      ],
      icon: <BuildingIcon size={32} className="text-blue-500" />
    },
    investors: {
      title: "For Capital Investors",
      headline: "Modernizing a $400 Trillion Addressable Market.",
      description: "State registries and commercial instruments represent the largest untokenized asset class on earth. Bearer captures this value by providing the critical infrastructure required to move physical paper to instant, online cryptographic settlement.",
      benefits: [
        "SaaS and Transactional Revenue Models",
        "High switching costs ensuring zero churn",
        "Patent-pending Dual-Path Execution (SRM)",
        "Bridging TradFi and Web3 Institutional Capital"
      ],
      icon: <BankIcon size={32} className="text-emerald-500" />
    },
    partners: {
      title: "For Commercial Partners",
      headline: "Automated Encumbrances & Atomic Settlement.",
      description: "Financial institutions, commercial banks, and legal trustees can hook directly into the Bearer API. Automate UCC-1 lien placements, execute Delivery-versus-Payment (DvP) swaps, and manage escrow entirely online.",
      benefits: [
        "Instant Webhook integration for Loan Payoffs",
        "Zero counterparty settlement risk",
        "API-driven Trustee Recovery Matrix",
        "Direct integration with enterprise Core Banking"
      ],
      icon: <GlobeIcon size={32} className="text-indigo-500" />
    },
    users: {
      title: "For End Users",
      headline: "Your Assets, Always Available Online.",
      description: "No more waiting weeks for a paper title in the mail, or taking a day off work to stand in line at the county clerk. Manage, transfer, and verify your regulated assets securely from your computer or smartphone.",
      benefits: [
        "Instant transfers to buyers",
        "Cryptographic proof of ownership",
        "Impossible to lose, damage, or misplace",
        "24/7 accessibility without office hour limitations"
      ],
      icon: <UsersIcon size={32} className="text-rose-500" />
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Hide Scrollbars Globally for the Prospectus */}
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <ShieldIcon size={28} className="text-blue-500" />
            <span className="text-xl font-black text-white tracking-tight">BEARER</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wider text-slate-400">
            <button onClick={() => scrollToSection('the-problem')} className="hover:text-white transition-colors cursor-pointer">The Problem</button>
            <button onClick={() => scrollToSection('online-service')} className="hover:text-white transition-colors cursor-pointer">Online Services</button>
            <button onClick={() => scrollToSection('stakeholders')} className="hover:text-white transition-colors cursor-pointer">Stakeholders</button>
            <button onClick={() => scrollToSection('sdk')} className="hover:text-white transition-colors cursor-pointer">Whitelabel SDK</button>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] cursor-pointer">
              Read Whitepaper
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <BackgroundGrid />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Institutional Prospectus
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Skip the Line.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digitize the Registry.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Transition regulated instruments, charters, and deeds from physical mailrooms and in-person visits to an instant, cryptographically secure <strong>Online Service</strong>.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button onClick={() => scrollToSection('online-service')} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center cursor-pointer">
                Explore the Online Transition <ArrowRightIcon size={16} className="ml-2" />
              </button>
              <button onClick={() => scrollToSection('stakeholders')} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-md text-sm font-bold transition-all flex items-center justify-center cursor-pointer">
                View Stakeholder Impact
              </button>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
            <div className="relative w-full max-w-md transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
              {/* Mockup of the institutional UI Document */}
              <div className="bg-[#fdfbf7] rounded border-[8px] border-[#1e293b] overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBMMDAgMEgyMEwwIDIwTTQwIDQwVjIwTDIwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')]"></div>
                <div className="p-8">
                  <div className="flex justify-between items-start border-b-2 border-slate-300 pb-4 mb-6">
                    <CryptoSealIcon size={60} className="text-blue-900" />
                    <div className="text-right">
                      <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Encrypted Value Script</p>
                      <p className="font-mono text-xs font-black text-slate-900 mt-1">RVBI-DEL-8832</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                    <div className="py-6">
                       <div className="border border-green-500 bg-green-50 text-green-700 px-4 py-3 rounded text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center">
                         <CheckCircleIcon size={16} className="mr-2" /> AML/KYC Oracle Verified
                       </div>
                    </div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="the-problem" className="py-24 bg-[#080c17] relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">The Legacy Bottleneck</h2>
            <p className="text-slate-400 text-lg">
              For decades, states and institutions have relied on physical presence and analog mail to establish legal truth. This is slow, expensive, and fundamentally broken for the modern era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mail */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-900 group-hover:bg-red-500 transition-colors"></div>
              <MailIcon size={32} className="text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Physical Mail</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start"><XIcon size={16} className="text-red-500 mr-2 shrink-0 mt-0.5"/> Processing takes 3-6 weeks</li>
                <li className="flex items-start"><XIcon size={16} className="text-red-500 mr-2 shrink-0 mt-0.5"/> High risk of lost or damaged documents</li>
                <li className="flex items-start"><XIcon size={16} className="text-red-500 mr-2 shrink-0 mt-0.5"/> Expensive manual data entry overhead</li>
              </ul>
            </div>

            {/* In Person */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-900 group-hover:bg-amber-500 transition-colors"></div>
              <ClockIcon size={32} className="text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">In-Person Office Visits</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start"><XIcon size={16} className="text-amber-500 mr-2 shrink-0 mt-0.5"/> Requires taking hours off work</li>
                <li className="flex items-start"><XIcon size={16} className="text-amber-500 mr-2 shrink-0 mt-0.5"/> Limited to 9-to-5 business hours</li>
                <li className="flex items-start"><XIcon size={16} className="text-amber-500 mr-2 shrink-0 mt-0.5"/> Expensive physical infrastructure for states</li>
              </ul>
            </div>

            {/* Online (Bearer) */}
            <div id="online-service" className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-xl relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.1)] transform md:-translate-y-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,1)]"></div>
              <GlobeIcon size={32} className="text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Bearer Online Services</h3>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex items-start"><CheckCircleIcon size={16} className="text-blue-400 mr-2 shrink-0 mt-0.5"/> Instant issuance and settlement</li>
                <li className="flex items-start"><CheckCircleIcon size={16} className="text-blue-400 mr-2 shrink-0 mt-0.5"/> Accessible 24/7/365 from any device</li>
                <li className="flex items-start"><CheckCircleIcon size={16} className="text-blue-400 mr-2 shrink-0 mt-0.5"/> Zero manual processing via State SDK</li>
                <li className="flex items-start"><CheckCircleIcon size={16} className="text-blue-400 mr-2 shrink-0 mt-0.5"/> Automated cryptographically enforced compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="stakeholders" className="py-24 bg-[#020617] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Value Creation Across the Board</h2>
            <p className="text-slate-400 text-lg">
              Bearer aligns the incentives of governments, capital allocators, financial institutions, and citizens by providing a unified protocol.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Tabs List */}
            <div className="w-full lg:w-1/3 space-y-2">
              {Object.keys(audienceData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left px-6 py-5 rounded-xl transition-all border cursor-pointer ${
                    activeTab === key 
                      ? 'bg-slate-800/80 border-slate-600 shadow-md text-white' 
                      : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-900/50 hover:text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">{audienceData[key].title}</div>
                  <div className="font-semibold text-lg">{audienceData[key].headline.split('.')[0]}</div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3">
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12 h-full relative overflow-hidden">
                {/* Decorative background glow based on active tab */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none transition-colors duration-500 ${
                  activeTab === 'state' ? 'bg-blue-500' : activeTab === 'investors' ? 'bg-emerald-500' : activeTab === 'partners' ? 'bg-indigo-500' : 'bg-rose-500'
                }`}></div>

                <div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
                  <div className="mb-6 inline-block p-4 bg-slate-900 rounded-2xl border border-slate-700 shadow-inner">
                    {audienceData[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{audienceData[activeTab].headline}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {audienceData[activeTab].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {audienceData[activeTab].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start p-4 bg-slate-900/60 rounded-lg border border-slate-800">
                        <CheckCircleIcon size={18} className="text-emerald-500 mr-3 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sdk" className="py-24 bg-[#080c17] relative border-t border-slate-800 overflow-hidden">
         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-[0.02] pointer-events-none">
           <TerminalIcon size={600} />
         </div>

         <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             <div>
               <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                 Technical Integration
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                 The Whitelabel SDK. <br/>State Services, Embedded.
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed mb-8">
                 We don't force citizens to visit a third-party site. The Bearer SDK allows state offices to embed the entire cryptographic issuing and transfer portal directly into their existing <code className="bg-slate-800 text-indigo-300 px-2 py-0.5 rounded">.gov</code> websites with just a few lines of code.
               </p>
               
               <div className="space-y-6">
                 <div className="flex">
                   <div className="mt-1 bg-slate-800 p-2 rounded text-indigo-400 shrink-0"><LayoutIcon size={20}/></div>
                   <div className="ml-4">
                     <h4 className="text-white font-bold">Themable Frontend</h4>
                     <p className="text-sm text-slate-500 mt-1">Match the state's official branding perfectly to maintain citizen trust.</p>
                   </div>
                 </div>
                 <div className="flex">
                   <div className="mt-1 bg-slate-800 p-2 rounded text-indigo-400 shrink-0"><ServerIcon size={20}/></div>
                   <div className="ml-4">
                     <h4 className="text-white font-bold">Zero Backend Overhead</h4>
                     <p className="text-sm text-slate-500 mt-1">Bearer handles the ledger mapping, AML/KYC oracles, and consensus natively.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Code / UI Mockup */}
             <div className="bg-[#0f172a] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col">
               <div className="bg-[#1e293b] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 </div>
                 <span className="text-[10px] font-mono text-slate-400">sdk-integration.jsx</span>
               </div>
               <div className="p-6 font-mono text-sm text-slate-300 overflow-x-auto bg-[#020617] leading-relaxed">
                 <p><span className="text-purple-400">import</span> {'{'} BearerProvider {'}'} <span className="text-purple-400">from</span> <span className="text-amber-300">'@bearer/sdk-react'</span>;</p>
                 <br/>
                 <p><span className="text-blue-400">export default function</span> <span className="text-emerald-300">StatePortalApp</span>() {'{'}</p>
                 <p className="pl-4"><span className="text-blue-400">return</span> (</p>
                 <p className="pl-8 text-slate-500">{'<!-- Drops right into existing state sites -->'}</p>
                 <p className="pl-8 text-slate-400">{'<'}<span className="text-indigo-400">BearerProvider</span></p>
                 <p className="pl-12">jurisdiction=<span className="text-amber-300">"Delaware"</span></p>
                 <p className="pl-12">agencyName=<span className="text-amber-300">"Dept of Revenue"</span></p>
                 <p className="pl-12">theme=<span className="text-amber-300">"slate"</span></p>
                 <p className="pl-12">apiKey=<span className="text-amber-300">"sk_live_...9f2a"</span></p>
                 <p className="pl-8 text-slate-400">{'>'}</p>
                 <p className="pl-12">{'<'}<span className="text-emerald-300">YourStateApplicationFrontend</span> /{'>'}</p>
                 <p className="pl-8 text-slate-400">{'</'}<span className="text-indigo-400">BearerProvider</span>{'>'}</p>
                 <p className="pl-4">);</p>
                 <p>{'}'}</p>
               </div>
             </div>

           </div>
         </div>
      </section>

      <section className="py-24 bg-blue-600 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-700 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Ready to transition?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you're a state CIO looking to cut costs, an investor seeking allocation, or a financial institution requiring API access, Bearer is ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-700 hover:bg-slate-50 px-8 py-4 rounded-md text-sm font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl cursor-pointer">
              Contact Institutional Sales
            </button>
            <button className="bg-blue-800/50 text-white border border-blue-400/50 hover:bg-blue-800 px-8 py-4 rounded-md text-sm font-bold transition-all backdrop-blur-sm cursor-pointer">
              Launch Interactive Demo
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#020617] border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <ShieldIcon size={20} className="text-slate-500" />
            <span className="text-lg font-black text-slate-500 tracking-tight">BEARER</span>
          </div>
          <div className="text-slate-600 text-xs font-mono text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Bearer Protocol Inc. All rights reserved.</p>
            <p className="mt-1">Patent Pending (Claim 1: Dual-Path Execution Matrix, Claim 3: Virtual Bearer Value Scripts)</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>

    </div>
  );
}