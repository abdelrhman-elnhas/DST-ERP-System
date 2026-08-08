"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

/* ─── Data ──────────────────────────────────────────────────── */

const modules = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Dashboard Overview",
    description:
      "Get a bird's-eye view of your entire operation — KPIs, activity summaries, and real-time metrics all in one place.",
    color: "from-[#2a809c]/20 to-[#27c0bb]/10",
    accent: "#2a809c",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Asset Control",
    description:
      "Track assets lifecycle from acquisition to retirement. Manage checkout, returns, categories, and maintenance schedules effortlessly.",
    color: "from-[#27c0bb]/20 to-[#2a809c]/10",
    accent: "#27c0bb",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: "Document & Version Control",
    description:
      "Centralise all your company documents, maintain version history, and collaborate with your team without losing a single revision.",
    color: "from-[#4a8fa3]/20 to-[#27c0bb]/10",
    accent: "#4a8fa3",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Task Board (Kanban)",
    description:
      "Visualise work in progress with drag-and-drop Kanban boards. Move tasks across stages and keep every project on track.",
    color: "from-[#2a809c]/20 to-[#1d5c72]/10",
    accent: "#2a809c",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Follow-Up",
    description:
      "Monitor team performance, attendance, and task completion rates. Keep leadership aligned with progress at every level.",
    color: "from-[#27c0bb]/20 to-[#1d9490]/10",
    accent: "#27c0bb",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
    title: "HR Management & Core Operations",
    description:
      "Manage employee records, track attendance, and streamline daily operations with a unified HR and operations dashboard.",
    color: "from-[#4a8fa3]/20 to-[#2a809c]/10",
    accent: "#4a8fa3",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Field Operations & Geo AI",
    description:
      "Manage field operations, track employee location, and streamline daily operations with a field operations dashboard.",
    color: "from-[#27c0bb]/20 to-[#2a809c]/10",
    accent: "#27c0bb",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.8}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Data Collection",
    description:
      "Manage data collection, track data, and streamline daily data collection with a unified data collection dashboard.",
    color: "from-[#2a809c]/20 to-[#4a8fa3]/10",
    accent: "#2a809c",
  },
];

const faqs = [
  {
    q: "Who is TST ERP designed for?",
    a: "TST ERP is built for small-to-medium organisations that need a unified platform to manage assets, documents, tasks, and team performance — without the complexity or cost of enterprise-grade systems.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. TST ERP is fully web-based. You can access all modules from any modern browser across desktop and mobile devices.",
  },
  {
    q: "Can multiple users work simultaneously?",
    a: "Yes. TST ERP is designed for team collaboration. Multiple users can work across different modules at the same time with real-time data updates across the platform.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is transmitted over HTTPS and authenticated sessions expire automatically. Role-based access ensures users only see what they're permitted to view.",
  },
  {
    q: "How do I get started?",
    a: "Simply click 'Get Started' to create your account. Onboarding takes less than two minutes and your team can start managing operations immediately.",
  },
];

/* ─── FAQ Item Component ────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border border-stroke dark:border-dark-3 rounded-xl overflow-hidden transition-all duration-300 ${open ? "bg-white dark:bg-dark-2 shadow-card" : "bg-gray-1 dark:bg-dark-2/50"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-dark dark:text-white text-base leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${open ? "bg-primary border-primary rotate-45" : "border-stroke dark:border-dark-3"}`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke={open ? "white" : "currentColor"} strokeWidth={2.5}>
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-6 pb-5 text-dark-5 dark:text-dark-6 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-2 dark:bg-[#020d1a] font-sans">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 border-b border-stroke dark:border-dark-3 bg-white/80 dark:bg-[#020d1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex justify-start items-center gap-2.5">
            <Logo className="" />
            {/* <span className="font-bold text-dark dark:text-white text-lg tracking-tight">TST<span className="text-primary"> ERP</span></span> */}
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark-5 dark:text-dark-6">
            <a href="#modules" className="hover:text-primary dark:hover:text-secondary transition-colors">Modules</a>
            <a href="#faq" className="hover:text-primary dark:hover:text-secondary transition-colors">FAQ</a>
          </div>
          <Link
            href="/auth/signin"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Sign In
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-16 px-6">
        {/* Background decorations */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/4 blur-3xl" />
        </div> */}

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary dark:text-secondary text-xs font-semibold tracking-wide uppercase">Tech Smart Tree</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-dark dark:text-white leading-tight mb-6">
            Run Your Organisation
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smarter, Faster.
            </span>
          </h1>

          <p className="text-lg text-dark-5 dark:text-dark-6 max-w-2xl mx-auto leading-relaxed mb-10">
            TST ERP brings together asset management, document control, team collaboration, and project tracking
            into one coherent platform — purpose-built for modern organisations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signin"
              id="cta-get-started"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-[#27c0bb] hover:from-blue-dark hover:to-green-dark text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 max-w-lg mx-auto gap-8 border-t border-stroke dark:border-dark-3 pt-10">
            {[
              { value: "9+", label: "Modules" },
              { value: "100%", label: "Web-Based" },
              { value: "∞", label: "Scalability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs text-dark-5 dark:text-dark-6 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section id="modules" className="py-24 px-6 bg-white dark:bg-dark-2/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary dark:text-secondary text-sm font-semibold uppercase tracking-widest mb-3">Platform Modules</p>
            <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">Everything You Need, In One Place</h2>
            <p className="text-dark-5 dark:text-dark-6 max-w-xl mx-auto">
              Each module is purpose-built to solve a real operational challenge and integrates seamlessly with the rest of the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => (
              <div
                key={mod.title}
                className="group relative bg-gray-1 dark:bg-dark-2 border border-stroke dark:border-dark-3 rounded-2xl p-6 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-card-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${mod.accent}18`, color: mod.accent }}
                  >
                    {mod.icon}
                  </div>
                  <h3 className="text-base font-bold text-dark dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-dark-5 dark:text-dark-6 leading-relaxed">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why TST ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[#1d5c72] dark:from-dark-3 dark:to-dark-2 border border-primary/20 dark:border-dark-3 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-12 items-center p-10 md:p-16">
              <div>
                <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-4">Why Choose TST?</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Designed for Teams That Mean Business
                </h2>
                <p className="text-blue-light-3 text-base leading-relaxed mb-8">
                  TST ERP was built from real operational pain points. We focused on clarity, speed, and simplicity
                  so your team spends less time managing tools and more time doing real work.
                </p>
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-1 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Start Today
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                    ),
                    title: "Visual Analytics",
                    desc: "Interactive ApexCharts for deep data insights"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    title: "Geo-Spatial AI",
                    desc: "Field mapping and location-based intelligence"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                    ),
                    title: "Unified Display",
                    desc: "All operational KPIs in one single dashboard"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="8" y1="13" x2="16" y2="13" />
                        <line x1="8" y1="17" x2="16" y2="17" />
                      </svg>
                    ),
                    title: "Smart Reporting",
                    desc: "Export data and generate automated reports"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                    title: "Secure Access",
                    desc: "Enterprise-grade encryption for your data"
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary dark:text-secondary" stroke="currentColor" strokeWidth={2}>
                        <path d="m22 10-6 6M2 10l6 6M12 2v20" />
                      </svg>
                    ),
                    title: "Agile Tracking",
                    desc: "Real-time task and asset lifecycle monitoring"
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white/90 dark:bg-dark-3/50 rounded-xl p-4 border border-white/20 dark:border-dark-3 hover:bg-white transition-all shadow-sm group">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="font-bold text-dark dark:text-white text-sm">{item.title}</div>
                    <div className="text-dark-5 dark:text-dark-6 text-xs mt-1 leading-tight">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 bg-white dark:bg-dark-2/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary dark:text-secondary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-dark dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-dark-5 dark:text-dark-6">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Ready to transform how your team works?
          </h2>
          <p className="text-dark-5 dark:text-dark-6 mb-8">
            Join organisations already using TST ERP to streamline their daily operations.
          </p>
          <Link
            href="/auth/signin"
            id="cta-footer-btn"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-secondary hover:from-blue-dark hover:to-green-dark text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Now
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stroke dark:border-dark-3 bg-white dark:bg-[#020d1a]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Logo />
                {/* <span className="font-bold text-dark dark:text-white text-lg tracking-tight">TST<span className="text-primary"> ERP</span></span> */}
              </div>
              <p className="text-sm text-dark-5 dark:text-dark-6 leading-relaxed max-w-xs">
                Tech Smart Tree ERP — a unified platform for asset management, documents, tasks, and team collaboration.
              </p>
            </div>

            {/* Modules */}
            <div>
              <h4 className="font-semibold text-dark dark:text-white text-sm mb-4">Modules</h4>
              <ul className="space-y-2.5 text-sm text-dark-5 dark:text-dark-6">
                {["Dashboard", "Asset Control", "Document Control", "Task Board", "Team Follow-Up", "Calendar"].map((m) => (
                  <li key={m}>
                    <Link href="/auth/signin" className="hover:text-primary dark:hover:text-secondary transition-colors">{m}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-dark dark:text-white text-sm mb-4">Access</h4>
              <ul className="space-y-2.5 text-sm text-dark-5 dark:text-dark-6">
                <li><Link href="/auth/signin" className="hover:text-primary dark:hover:text-secondary transition-colors">Sign In</Link></li>
                <li><a href="#faq" className="hover:text-primary dark:hover:text-secondary transition-colors">FAQ</a></li>
                <li><a href="#modules" className="hover:text-primary dark:hover:text-secondary transition-colors">Modules</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stroke dark:border-dark-3 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-dark-5 dark:text-dark-6">
            <span>© {new Date().getFullYear()} Tech Smart Tree. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Built with
              <span className="text-red-light">♥</span>
              by AE Studio
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
