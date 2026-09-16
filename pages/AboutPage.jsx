import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Rocket,
  Globe,
  MapPin,
  Mail,
  Phone,
  Check,
  Server,
  Building2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Newspaper,
  ShoppingCart,
  Gem,
  UtensilsCrossed,
  Clock,
  Layers,
  Sparkles,
} from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import HeroScrollReveal from "@/components/HeroScrollReveal";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import CopyableText from "@/components/CopyableText";
import LocationMap from "@/components/LocationMap";

export default function AboutPage() {
  /* ──────────────────── Data ──────────────────── */

  const whatWeBuildItems = [
    {
      title: "1688 API-based China sourcing and reseller platforms",
      desc: "Direct supplier catalog sync, automated translations, currency markup, and dual-warehouse tracking.",
      icon: Globe,
      href: "/products/1688-api",
      tag: "Import Sourcing",
    },
    {
      title: "Shipping and logistics management systems",
      desc: "Full sourcing & logistics-only freight workflows, barcode parcel intake, and cargo manifest reconciliation.",
      icon: Layers,
      href: "/products/shipping-management",
      tag: "Logistics ERP",
    },
    {
      title: "General e-commerce websites and platforms",
      desc: "Single-vendor e-commerce architectures with conversion landing pages, checkout recovery, and courier APIs.",
      icon: ShoppingCart,
      href: "/products/ecommerce",
      tag: "E-Commerce",
    },
    {
      title: "Custom brand e-commerce solutions",
      desc: "Bespoke full-stack digital storefronts built with modern web frameworks and enterprise scalability.",
      icon: Gem,
      href: "/products/branded-ecommerce",
      tag: "Bespoke Retail",
    },
    {
      title: "Restaurant business management platforms",
      desc: "Omnichannel POS billing, live kitchen display systems, ESC/POS thermal printing, and recipe stock control.",
      icon: UtensilsCrossed,
      href: "/products/restaurant-management",
      tag: "Hospitality POS",
    },
    {
      title: "Company portfolio and corporate websites",
      desc: "Elevating corporate identities with Next.js, Headless CMS dashboards, and smooth micro-animations.",
      icon: Building2,
      href: "/products/company-profile",
      tag: "Corporate Brand",
    },
    {
      title: "News portals and content-driven digital platforms",
      desc: "High-concurrency digital publishing newsrooms powered by Next.js SSR, headless content nodes, and ad slots.",
      icon: Newspaper,
      href: "/products/news-portal",
      tag: "Media Engine",
    },
    {
      title: "Custom enterprise business applications",
      desc: "Purpose-built business platforms tailored to unique workflows, database models, and operational goals.",
      icon: Server,
      href: "/solutions",
      tag: "Custom Solutions",
    },
  ];

  const approachPillars = [
    {
      badge: "Pillar 01",
      title: "Strategy & Technology Alignment",
      text: "We combine business understanding, product strategy, modern web technologies, and user-focused development to create platforms that are not only visually professional but also operationally valuable.",
      icon: Zap,
    },
    {
      badge: "Pillar 02",
      title: "Sustainable Business Infrastructure",
      text: "Our goal is simple: to build digital infrastructure that helps businesses work smarter, serve customers better, and grow with confidence.",
      icon: Rocket,
    },
    {
      badge: "Pillar 03",
      title: "Trusted Bangladesh Technology Partner",
      text: "Redmun Digitech is committed to becoming a trusted technology partner for businesses seeking reliable, scalable, and purpose-built enterprise software and digital platforms from Bangladesh.",
      icon: ShieldCheck,
    },
  ];

  const team = [
    {
      name: "Redwanul Haque",
      role: "Creative Head",
      image: "/redwan.jpeg",
    },
    {
      name: "Murtaza Kamal Pasha",
      role: "Project Manager",
      image: "/murtaza.jpeg",
    },
    {
      name: "Arif Hossain",
      role: "Project Lead",
      image: "/arif.jpeg",
    },
    {
      name: "Shahidul Shakil",
      role: "Lead Developer",
      image: "/shahidul.jpeg",
    },
    {
      name: "Jahidul Islam",
      role: "Lead Designer",
      image: "/jahidul.jpeg",
    },
  ];

  /* ──────────────────── Render ──────────────────── */

  return (
    <div className="bg-light-secondary/40">

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-dark text-white min-h-[75vh] flex items-center">
        {/* Decorative Grid & Glows */}
        <div className="absolute inset-0 line-grid pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary opacity-10 rounded-full blur-[140px] animate-pulse-glow pointer-events-none"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Copy */}
            <HeroScrollReveal className="lg:col-span-7 space-y-8">
              <div className="reveal-item opacity-0 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass text-brand">
                  <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  Enterprise Business Platforms Development
                </span>
                <span className="text-[11px] text-text-muted/80 tracking-wide font-medium">
                  A wing of Redmun company
                </span>
              </div>

              <h1 className="reveal-item opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                Building Digital Platforms That{" "}
                <span className="text-gradient-brand">Power Modern</span>{" "}
                <span className="text-gradient-primary">Businesses</span>
              </h1>

              <p className="reveal-item opacity-0 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
                Redmun Digitech is a Dhaka, Bangladesh-based Enterprise Business Platforms Development Company focused on building scalable, practical, and business-driven digital solutions for growing organizations.
              </p>

              <div className="reveal-item opacity-0 flex flex-wrap gap-4">
                <Button variant="brand" size="lg" href="/contact">
                  Talk to Our Team
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#what-we-build"
                  className="border-border-dark text-white hover:bg-dark-tertiary"
                >
                  What We Build
                </Button>
              </div>
            </HeroScrollReveal>

            {/* Right Architectural Highlight (Clean UI, No Heavy Images) */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <ParallaxSection speed={-20}>
                <div className="relative rounded-3xl border border-white/10 bg-dark-secondary/80 backdrop-blur-xl p-8 shadow-2xl space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white">Platform Core</p>
                        <p className="text-[11px] text-text-muted">Enterprise Architecture</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Active
                    </span>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-3">
                    {[
                      { label: "1688 API Automation", value: "Real-Time Sync", color: "text-brand" },
                      { label: "Logistics & Freight ERP", value: "Dual Warehouse", color: "text-primary" },
                      { label: "Omnichannel Restaurant POS", value: "Live KDS & Thermal", color: "text-brand" },
                      { label: "High-Concurrency CMS", value: "Sub-Second Edge", color: "text-primary" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                      >
                        <span className="text-xs text-text-muted font-medium">{item.label}</span>
                        <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Silent Wing Badge / Subtitle */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand" />
                      Dhaka, Bangladesh HQ
                    </span>
                    <span>Redmun Wing</span>
                  </div>
                </div>
              </ParallaxSection>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — COMPANY OVERVIEW NARRATIVE
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-4xl mx-auto space-y-8">

            <div className="sr-item opacity-0 inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand/10 text-brand">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Company Overview
            </div>

            <h2 className="sr-item opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Technology Systems Built Around{" "}
              <span className="text-gradient-brand">Real Business Requirements</span>
            </h2>

            {/* Verbatim Paragraph 2 */}
            <div className="sr-item opacity-0 p-6 md:p-8 rounded-2xl bg-light border border-border/80 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand" />
              <p className="text-base md:text-lg text-dark font-medium leading-relaxed">
                We specialize in developing customized business platforms that simplify complex operations, connect multiple business functions, and create a stronger digital foundation for long-term growth. Our work goes beyond conventional website development—we design and develop technology systems that help businesses operate, manage, sell, and scale more efficiently.
              </p>
            </div>

            {/* Verbatim Paragraph 3 & 4 with background gradient */}
            <div className="sr-item opacity-0 grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-500/[0.06] via-white to-brand/[0.02] border border-brand/20 shadow-xs hover:shadow-lg hover:border-brand/40 transition-all duration-300 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">Purpose-Built Digital Products</h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  From 1688 API-integrated China sourcing platforms and shipping management systems to general e-commerce platforms, custom brand e-commerce solutions, restaurant business management systems, company portfolio websites, and news portal platforms, we build digital products around real business requirements.
                </p>
              </div>

              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-rose-500/[0.06] via-white to-primary/[0.02] border border-primary/20 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">Tailored Operational Alignment</h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  At Redmun Digitech, we understand that every business has different workflows, customers, operational challenges, and growth objectives. That is why our approach focuses on custom functionality, scalable architecture, intuitive user experiences, and technology aligned with business goals.
                </p>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — WHAT WE BUILD
          ═══════════════════════════════════════════ */}
      <section id="what-we-build" className="py-24 lg:py-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">
              Core Development Expertise
            </span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              What We <span className="text-gradient-brand">Build</span>
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-base md:text-lg leading-relaxed">
              Our core development expertise includes:
            </p>
          </ScrollReveal>

          {/* 8 Expertise Items Grid */}
          <ScrollReveal stagger={0.08} scale>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whatWeBuildItems.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="sr-item opacity-0 group p-6 rounded-2xl border border-border bg-white hover:border-brand/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                          <ItemIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted bg-light px-2.5 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-dark mb-2 group-hover:text-brand transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-brand">
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Verbatim Concluding Paragraph (Full Container Width) */}
          <ScrollReveal className="w-full">
            <div className="sr-item opacity-0 p-8 md:p-12 lg:p-14 rounded-3xl bg-dark text-white border border-border-dark relative overflow-hidden text-center shadow-2xl w-full">
              <div className="absolute inset-0 line-grid pointer-events-none opacity-30" />
              <div className="relative z-10 max-w-4xl mx-auto space-y-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
                  Scalable Execution
                </span>
                <p className="text-base sm:text-lg md:text-xl text-text-inverse font-medium leading-relaxed">
                  Whether you are launching a new digital venture, modernizing an existing operation, or building a technology platform from the ground up, Redmun Digitech helps transform your business concept into a functional, scalable digital solution.
                </p>
                <div className="pt-3">
                  <Button variant="brand" size="lg" href="/contact">
                    Discuss Your Platform
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — OUR APPROACH
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-white border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 dot-grid pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">
              Methodology & Standards
            </span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-5 leading-tight">
              Our <span className="text-gradient-brand">Approach</span>
            </h2>
          </ScrollReveal>

          {/* 3 Approach Cards Grid */}
          <ScrollReveal stagger={0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approachPillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="sr-item opacity-0 bg-light/50 p-8 md:p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 flex flex-col justify-between space-y-6 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <PillarIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand/5 px-3 py-1 rounded-full border border-brand/10">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-brand transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                        {pillar.text}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/80 flex items-center gap-2 text-xs font-semibold text-text-tertiary">
                      <Check className="w-4 h-4 text-brand" />
                      <span>Operational Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — TEAM SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-light-secondary/40 relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="mb-16 text-center max-w-3xl mx-auto">
            <span className="sr-item opacity-0 text-xs font-bold uppercase tracking-widest text-brand block mb-3">
              Our People
            </span>
            <h2 className="sr-item opacity-0 text-3xl md:text-5xl font-bold text-dark mb-4 leading-tight">
              Meet Our Team
            </h2>
            <p className="sr-item opacity-0 text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              As a team, we move forward with deep trust in our vision, believing that with focus, dedication, and heart, meaningful success is always within reach.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger={0.1} scale>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((t, idx) => (
                <div
                  key={idx}
                  className="sr-item opacity-0 bg-white rounded-2xl p-3 pb-6 border border-border/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 mb-4">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="px-1 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-dark leading-snug group-hover:text-brand transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-xs font-medium text-text-secondary">
                        {t.role}
                      </p>
                      {/* Accent Line */}
                      <div className="pt-2">
                        <div className="w-6 h-0.5 bg-dark group-hover:w-10 group-hover:bg-brand transition-all duration-300 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — OFFICE HEADQUARTERS
          ═══════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="sr-item opacity-0 bg-light/50 p-8 md:p-16 rounded-3xl border border-border shadow-sm flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand block">Operational Base</span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                  Central Operations & Tech Hub
                </h2>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  Our central office houses database managers, API sourcing specialists, and core developers. Visit us for technical scoping workshops or platform architecture reviews.
                </p>
                <div className="space-y-3 pt-2 text-sm font-semibold text-text-secondary">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white shadow-xs border border-border flex items-center justify-center text-brand">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>House 16, Road 12, Sector 03, Uttara, Dhaka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white shadow-xs border border-border flex items-center justify-center text-brand">
                      <Mail className="w-4 h-4" />
                    </span>
                    <CopyableText text="contact@redmun.com" className="hover:text-brand transition-colors" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white shadow-xs border border-border flex items-center justify-center text-brand">
                      <Phone className="w-4 h-4" />
                    </span>
                    <CopyableText text="+880 1711 994608" valueToCopy="+8801711994608" className="hover:text-brand transition-colors" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="brand" size="md" href="/contact">
                    Schedule Office Visit
                  </Button>
                </div>
              </div>

              {/* Interactive Office / Map Section */}
              <div className="w-full lg:w-[480px] h-80">
                <LocationMap className="w-full h-80 rounded-2xl" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — CTA SECTION
          ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CTASection />
      </div>

    </div>
  );
}
