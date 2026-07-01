import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import heroImg from "@/assets/hero-dental.jpg";
import aboutImg from "@/assets/about-office.jpg";
import techImg from "@/assets/tech-dental.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clearwater Family Dental | Dentist in Clearwater, FL" },
      { name: "description", content: "Family, cosmetic, implant & emergency dentistry in Clearwater, FL. 5.0★ rated, 967+ reviews. Same-day emergency visits. Call (727) 442-3363." },
      { property: "og:title", content: "Clearwater Family Dental | Dentist in Clearwater, FL" },
      { property: "og:description", content: "Modern, patient-first dentistry in Clearwater, Florida." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PHONE = "(727) 442-3363";
const PHONE_HREF = "tel:+17274423363";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Offers", href: "#offers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 group" aria-label="Clearwater Family Dental home">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M12 2c3.2 0 5.5 2.1 5.5 5.1 0 2-.6 3-1.4 5.4-.7 2-1.4 5.5-2.4 7.6-.5 1-1.1 1.4-1.7 1.4-.7 0-1-.5-1.3-1.8l-.7-3.2c-.1-.6-.4-.9-.9-.9s-.8.3-.9.9l-.7 3.2C7.2 20.5 6.9 21 6.2 21c-.6 0-1.2-.4-1.7-1.4-1-2.1-1.7-5.6-2.4-7.6C1.3 9.6.7 8.6.7 6.6.7 3.6 3 1.5 6.2 1.5c1.6 0 2.8.5 3.8 1.2.7.5 1.3.7 2 .7s1.3-.2 2-.7C15 2 16.2 1.5 17.8 1.5" opacity=".0"/>
          <path d="M17 3c-1.7 0-2.7.6-3.7 1.1-.5.2-.9.4-1.3.4s-.8-.2-1.3-.4C9.7 3.6 8.7 3 7 3 4.2 3 2 5.1 2 8c0 1.7.5 2.7 1.2 4.7.6 1.7 1.3 5 2.2 7 .4.9 1 1.3 1.6 1.3.6 0 1-.4 1.2-1.5l.7-3c.1-.5.4-.7.8-.7s.7.2.8.7l.7 3c.2 1.1.6 1.5 1.2 1.5.6 0 1.2-.4 1.6-1.3.9-2 1.6-5.3 2.2-7C21.5 10.7 22 9.7 22 8c0-2.9-2.2-5-5-5Z"/>
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display font-bold text-[15px] text-foreground">Clearwater Family Dental</span>
        <span className="text-[11px] text-muted-foreground tracking-wide uppercase">Clearwater, FL</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-18 py-3">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="btn-ghost text-sm">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={PHONE_HREF} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
            {PHONE}
          </a>
          <a href="#contact" className="btn-primary text-sm">Schedule Appointment</a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-border bg-white/80"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-foreground">
                {n.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-border flex flex-col gap-3">
              <a href={PHONE_HREF} className="btn-secondary">Call {PHONE}</a>
              <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>Schedule Appointment</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src={teamPhotoAsset.url}
          alt="The Clearwater Family Dental team smiling together in Clearwater, Florida"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A2B49]/90 via-[#1A2B49]/60 to-[#1A2B49]/20" aria-hidden />
      <div className="container-px mx-auto max-w-7xl w-full pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-2xl fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white px-3.5 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Accepting New Patients
          </span>
          <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
            We Love Helping Create{" "}
            <span className="text-primary">Beautiful & Healthy</span> Smiles
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 font-medium">
            Exceptional Family Dentistry in Clearwater, Florida.
          </p>
          <p className="mt-3 text-base text-white/70 max-w-xl">
            Providing compassionate, comprehensive dental care with advanced technology and a patient-first approach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Schedule Appointment</a>
            <a href={PHONE_HREF} className="btn-secondary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A18 18 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2z"/></svg>
              Call Now
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-xs sm:text-sm">
            {[
              { t: "5.0★", s: "Google Rating" },
              { t: "967+", s: "Reviews" },
              { t: "Patients First", s: "Philosophy" },
              { t: "Same-Day", s: "Emergencies" },
            ].map((b) => (
              <li key={b.t} className="flex flex-col">
                <span className="font-display font-bold text-white text-base sm:text-lg">{b.t}</span>
                <span className="text-white/70">{b.s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactElement> = {
    badge: <path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.6L12 14.9 7.1 17.5 8 11.9 4 8l5.6-1.2L12 2z"/>,
    heart: <path d="M12 21s-7-4.4-9.3-9C1.3 9 3 5 7 5c2 0 3.4 1 5 3 1.6-2 3-3 5-3 4 0 5.7 4 4.3 7-2.3 4.6-9.3 9-9.3 9z"/>,
    cpu: <path d="M9 3v2H7a2 2 0 00-2 2v2H3v2h2v2H3v2h2v2a2 2 0 002 2h2v2h2v-2h2v2h2v-2h2a2 2 0 002-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 00-2-2h-2V3h-2v2h-2V3h-2v2H9V3H9z"/>,
    grid: <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/>,
    tooth: <path d="M17 3c-1.7 0-2.7.6-3.7 1.1-.5.2-.9.4-1.3.4s-.8-.2-1.3-.4C9.7 3.6 8.7 3 7 3 4.2 3 2 5.1 2 8c0 1.7.5 2.7 1.2 4.7.6 1.7 1.3 5 2.2 7 .4.9 1 1.3 1.6 1.3.6 0 1-.4 1.2-1.5l.7-3c.1-.5.4-.7.8-.7s.7.2.8.7l.7 3c.2 1.1.6 1.5 1.2 1.5.6 0 1.2-.4 1.6-1.3.9-2 1.6-5.3 2.2-7C21.5 10.7 22 9.7 22 8c0-2.9-2.2-5-5-5Z"/>,
    sparkle: <path d="M12 2l1.8 4.7L18 8l-4.2 1.3L12 14l-1.8-4.7L6 8l4.2-1.3L12 2zM5 14l.9 2.4L8 17l-2.1.6L5 20l-.9-2.4L2 17l2.1-.6L5 14zM19 13l.9 2.4L22 16l-2.1.6L19 19l-.9-2.4L16 16l2.1-.6L19 13z"/>,
    implant: <path d="M12 2a4 4 0 014 4v1h-2V6a2 2 0 10-4 0v1H8V6a4 4 0 014-4zM7 9h10l-1 4h-1l-1 9h-2l-1-6h-2l-1 6H8l-1-9H6L7 9z"/>,
    root: <path d="M12 3c4 0 6 2 6 5 0 1.5-.6 2.6-1.4 4.4l-1.1 2.4c-.5 1.2-.8 4-1.7 5.4-.5.8-1 1-1.4 1-.6 0-.9-.5-1.1-1.5L11 18c-.1-.4-.3-.6-.6-.6s-.5.2-.6.6L9.2 19.7c-.2 1-.5 1.5-1.1 1.5-.5 0-.9-.3-1.3-1-.9-1.5-1.4-4.2-1.9-5.4l-1-2.4C3 11 2.4 9.9 2.4 8.4 2.4 5 4.7 3 8.4 3"/>,
    brace: <path d="M3 9h18v2H3zM3 13h18v2H3zM6 7h2v10H6zM10 7h2v10h-2zM14 7h2v10h-2z"/>,
    crown: <path d="M2 18l2-10 5 4 3-7 3 7 5-4 2 10H2zM3 20h18v2H3z"/>,
    bridge: <path d="M3 12c0-3 3-5 6-5h6c3 0 6 2 6 5v8h-3v-6c0-2-2-3-4-3s-4 1-4 3v6H6v-8z"/>,
    veneer: <path d="M5 4h14l-2 16H7L5 4zm3 3l1 11h6l1-11H8z"/>,
    drop: <path d="M12 2s7 8.5 7 13a7 7 0 11-14 0c0-4.5 7-13 7-13z"/>,
    shield: <path d="M12 2l8 3v6c0 5-3.5 9.4-8 11-4.5-1.6-8-6-8-11V5l8-3z"/>,
    laser: <path d="M3 12h6l3-6 3 6h6l-2 4h-4l-3 6-3-6H5l-2-4z"/>,
    moon: <path d="M21 13A9 9 0 1111 3a7 7 0 1010 10z"/>,
    leaf: <path d="M5 19c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2 0-2-2zM4 21c2-4 5-7 9-9"/>,
    siren: <path d="M5 19h14v2H5zM12 3a7 7 0 017 7v7H5v-7a7 7 0 017-7zM3 9h2v2H3zM19 9h2v2h-2zM4 4l1.4 1.4M18.6 5.4L20 4"/>,
    phone: <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A18 18 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2z"/>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
      {paths[name] ?? paths.tooth}
    </svg>
  );
}

function WhyUs() {
  const items = [
    { icon: "badge", title: "Experienced Dentists", text: "Decades of combined experience across every specialty." },
    { icon: "heart", title: "Patient-First Care", text: "Compassionate, judgment-free dentistry built around you." },
    { icon: "cpu", title: "Advanced Technology", text: "Digital X-rays, intraoral cameras, and same-day crowns." },
    { icon: "grid", title: "Comprehensive Services", text: "From cleanings to implants — your full-service dental home." },
  ];
  return (
    <section className="section-pad bg-muted">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">A different kind of dental experience.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.title} className="card-soft p-7">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <Icon name={it.icon} />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Modern Clearwater Family Dental reception and waiting area"
            width={1280}
            height={1280}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-elevated aspect-square"
          />
          <div className="absolute -bottom-6 -right-6 hidden sm:block glass rounded-2xl px-5 py-4 shadow-soft">
            <div className="font-display text-2xl font-bold text-primary">25+ yrs</div>
            <div className="text-xs text-muted-foreground">Serving Clearwater families</div>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">About Clearwater Family Dental</h2>
          <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
            Founded on a <strong>Patients First</strong> philosophy and led by Dr. Theresa Rodeghero, our practice
            blends decades of clinical experience with a holistic, modern approach to dentistry.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From routine cleanings to advanced cosmetic and biological dentistry, every treatment is delivered with
            care, transparency, and the latest technology. Same-day emergency appointments are always available.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {["Holistic & biological approach", "Same-day emergency visits", "Family-friendly environment", "Modern, advanced technology"].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Become a Patient</a>
            <a href="#team" className="btn-ghost border border-border">Meet the Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const doctors = [
    { name: "Dr. Theresa Rodeghero", title: "Owner & Dentist", bio: "Founder of Clearwater Family Dental, championing a patients-first, holistic approach to modern dental care.", initials: "TR", color: "from-[#1565C0] to-[#1A2B49]" },
    { name: "Dr. Grace Garcia", title: "Dentist", bio: "Compassionate, family-focused dentist with a gentle chairside manner and a passion for preventive care.", initials: "GG", color: "from-[#2E7D32] to-[#1565C0]" },
    { name: "Dr. Vinh Dang", title: "Dentist", bio: "Skilled clinician focused on cosmetic, restorative, and implant dentistry with meticulous attention to detail.", initials: "VD", color: "from-[#1A2B49] to-[#2E7D32]" },
  ];
  const hygienists = ["Camila", "Rommy", "Nicole", "Flavia"];
  return (
    <section id="team" className="section-pad bg-muted">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Meet Our Doctors</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Experienced clinicians who truly care.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <article key={d.name} className="card-soft overflow-hidden">
              <div className={`aspect-[4/3] bg-gradient-to-br ${d.color} grid place-items-center`}>
                <span className="font-display font-bold text-white text-6xl tracking-tight" aria-hidden>{d.initials}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground">{d.name}</h3>
                <div className="text-sm text-primary font-medium">{d.title}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="font-display font-bold text-2xl text-foreground">Meet Our Hygiene Team</h3>
          <p className="text-muted-foreground mt-2">The gentle hands behind every great cleaning.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hygienists.map((h, i) => (
              <div key={h} className="card-soft p-5 flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-full text-white font-display font-semibold bg-gradient-to-br ${["from-primary to-secondary","from-secondary to-primary","from-foreground to-primary","from-primary to-foreground"][i]}`}>
                  {h[0]}
                </span>
                <div>
                  <div className="font-semibold text-foreground">{h}</div>
                  <div className="text-xs text-muted-foreground">Dental Hygienist</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: "tooth", title: "General Dentistry", text: "Cleanings, exams, and preventive care for the whole family." },
    { icon: "sparkle", title: "Cosmetic Dentistry", text: "Smile makeovers tailored to natural, radiant results." },
    { icon: "implant", title: "Dental Implants", text: "Permanent tooth replacement that looks and feels real." },
    { icon: "root", title: "Root Canals", text: "Gentle, modern endodontics that save your natural tooth." },
    { icon: "brace", title: "Orthodontics", text: "Modern alignment options for kids, teens, and adults." },
    { icon: "crown", title: "Crowns", text: "Custom-crafted crowns — many available same day." },
    { icon: "bridge", title: "Bridges", text: "Durable, beautiful solutions for missing teeth." },
    { icon: "veneer", title: "Veneers", text: "Hand-crafted porcelain veneers for a flawless smile." },
    { icon: "drop", title: "Teeth Whitening", text: "Professional whitening for a brighter, confident smile." },
    { icon: "shield", title: "Periodontics", text: "Healthy gums are the foundation of a healthy smile." },
    { icon: "laser", title: "Laser Dentistry", text: "Precise, comfortable treatment with minimal downtime." },
    { icon: "moon", title: "Sleep Apnea", text: "Custom oral appliances for restful, restorative sleep." },
    { icon: "leaf", title: "Biological Dentistry", text: "Whole-body, mercury-free, biocompatible care." },
    { icon: "siren", title: "Emergency Dentistry", text: "Same-day relief when you need it most." },
  ];
  return (
    <section id="services" className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 max-w-4xl">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Comprehensive dentistry, all under one roof.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From preventive care to advanced cosmetic and biological dentistry — we have you covered at every stage of life.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s) => (
            <a key={s.title} href="#contact" className="card-soft p-6 group block">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Learn more
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offers() {
  const offers = [
    { title: "Free Second Opinion + X-Rays", value: "$195 Value", text: "Not sure about a treatment plan? Get a complimentary expert review." },
    { title: "No-Cost Consultation", value: "Complimentary", text: "Meet our doctors and discuss your goals — no obligation, no pressure." },
    { title: "$10 Emergency Exam + X-Rays", value: "Same-Day", text: "Urgent dental pain? We'll see you today and get to the root of it." },
  ];
  return (
    <section id="offers" className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-secondary text-secondary-foreground overflow-hidden relative px-6 md:px-12 py-14 md:py-20 shadow-elevated">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90">New Patient Offers</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Special welcomes for new patients.</h2>
            <p className="mt-4 opacity-90">Exceptional dentistry should be accessible. Take advantage of these limited-time welcomes.</p>
          </div>
          <div className="relative mt-10 grid md:grid-cols-3 gap-5">
            {offers.map((o) => (
              <div key={o.title} className="rounded-2xl bg-white text-foreground p-6 shadow-soft">
                <div className="inline-flex items-center rounded-full bg-secondary-soft text-secondary px-3 py-1 text-xs font-semibold">{o.value}</div>
                <h3 className="mt-4 font-display font-bold text-lg">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-10">
            <a href={PHONE_HREF} className="btn-primary text-base">
              <Icon name="phone" /> Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Technology() {
  const features = [
    { title: "Digital X-Rays", text: "Up to 90% less radiation with instant, high-resolution imaging." },
    { title: "Intraoral Cameras", text: "See exactly what we see, in vivid detail, in real time." },
    { title: "Same-Day Crowns", text: "Custom restorations milled and placed in a single visit." },
    { title: "Modern Treatment Rooms", text: "Quiet, comfortable, and designed around your wellbeing." },
  ];
  return (
    <section className="section-pad bg-muted">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Technology & Care</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Modern technology, gentler experience.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We invest in the technology that makes your visit faster, more accurate, and more comfortable — so you spend less time in the chair and more time smiling.
          </p>
          <dl className="mt-8 grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white border border-border p-5">
                <dt className="font-display font-semibold text-foreground">{f.title}</dt>
                <dd className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <img
            src={techImg}
            alt="Digital intraoral scanner displaying a 3D model of teeth"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] object-cover shadow-elevated aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Sarah M.", text: "The whole team is amazing. Dr. Rodeghero genuinely cares and explains everything. Best dental experience I've ever had.", initials: "SM" },
    { name: "James K.", text: "I came in for an emergency and they took me the same day. Painless, professional, and incredibly kind staff.", initials: "JK" },
    { name: "Lily P.", text: "Beautiful office, modern tech, zero pressure. My kids actually look forward to their cleanings now!", initials: "LP" },
    { name: "Marcus D.", text: "Got veneers here — the results are unbelievable. Worth every penny. Couldn't recommend more highly.", initials: "MD" },
  ];
  const [i, setI] = useState(0);
  const visible = [reviews[i % reviews.length], reviews[(i + 1) % reviews.length]];
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Loved by Clearwater families.</h2>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {[0,1,2,3,4].map((s) => <svg key={s} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.6L12 14.9 7.1 17.5 8 11.9 4 8l5.6-1.2L12 2z"/></svg>)}
              </div>
              <div className="font-semibold text-foreground">5.0</div>
              <div className="text-muted-foreground">• 967+ Google reviews</div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft text-primary px-2.5 py-1 text-[11px] font-semibold">Google Verified</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)} aria-label="Previous review" className="h-11 w-11 grid place-items-center rounded-full border border-border bg-white hover:bg-primary-soft transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setI((v) => (v + 1) % reviews.length)} aria-label="Next review" className="h-11 w-11 grid place-items-center rounded-full border border-border bg-white hover:bg-primary-soft transition-colors">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {visible.map((r, idx) => (
            <figure key={`${r.name}-${idx}`} className="card-soft p-7">
              <div className="flex items-center gap-1 text-amber-500" aria-hidden>
                {[0,1,2,3,4].map((s) => <svg key={s} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.6L12 14.9 7.1 17.5 8 11.9 4 8l5.6-1.2L12 2z"/></svg>)}
              </div>
              <blockquote className="mt-4 text-lg text-foreground leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-display font-semibold">{r.initials}</span>
                <div>
                  <div className="font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Google review</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const tiles = [
    { c: "from-[#1565C0] to-[#1A2B49]", label: "Modern treatment room" },
    { c: "from-[#2E7D32] to-[#1565C0]", label: "Friendly staff" },
    { c: "from-[#1A2B49] to-[#2E7D32]", label: "Bright reception" },
    { c: "from-[#1565C0] to-[#2E7D32]", label: "Advanced technology" },
    { c: "from-[#1A2B49] to-[#1565C0]", label: "Happy patient" },
    { c: "from-[#2E7D32] to-[#1A2B49]", label: "Comfortable lounge" },
  ];
  const imgs = [heroImg, aboutImg, techImg];
  return (
    <section id="gallery" className="section-pad bg-muted">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Step inside our practice.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          <div className="row-span-2 col-span-2 overflow-hidden rounded-3xl shadow-soft group">
            <img src={imgs[0]} alt="Dental office interior" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft group">
            <img src={imgs[1]} alt="Reception area" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className={`overflow-hidden rounded-3xl shadow-soft bg-gradient-to-br ${tiles[0].c} grid place-items-end p-5`}>
            <span className="text-white/90 text-xs font-medium">{tiles[0].label}</span>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft group">
            <img src={imgs[2]} alt="Modern dental technology" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className={`overflow-hidden rounded-3xl shadow-soft bg-gradient-to-br ${tiles[1].c} grid place-items-end p-5`}>
            <span className="text-white/90 text-xs font-medium">{tiles[1].label}</span>
          </div>
          <div className={`row-span-1 overflow-hidden rounded-3xl shadow-soft bg-gradient-to-br ${tiles[3].c} grid place-items-end p-5`}>
            <span className="text-white/90 text-xs font-medium">{tiles[3].label}</span>
          </div>
          <div className={`overflow-hidden rounded-3xl shadow-soft bg-gradient-to-br ${tiles[5].c} grid place-items-end p-5`}>
            <span className="text-white/90 text-xs font-medium">{tiles[5].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyBanner() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-primary text-primary-foreground px-6 md:px-12 py-12 md:py-16 shadow-elevated grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90">Dental Emergency?</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Same-Day Appointments Available</h2>
            <p className="mt-3 opacity-90 max-w-xl">If you're in pain, don't wait. Call us now and our team will see you today.</p>
          </div>
          <a href={PHONE_HREF} className="btn-secondary text-base whitespace-nowrap">
            <Icon name="phone" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you accept new patients?", a: "Yes! We're happily welcoming new patients of all ages — book online or call (727) 442-3363." },
    { q: "Do you offer financing?", a: "We offer flexible financing including CareCredit and in-house membership plans to fit your budget." },
    { q: "Do you take insurance?", a: "We accept most major PPO insurance plans and will gladly file claims on your behalf." },
    { q: "What if I have a dental emergency?", a: "Call us right away — we reserve same-day emergency slots and will get you out of pain fast." },
    { q: "Do you offer cosmetic dentistry?", a: "Absolutely. From whitening to veneers and full smile makeovers, we'll design a smile you love." },
    { q: "What is biological dentistry?", a: "A holistic, whole-body approach to dentistry using biocompatible materials and mercury-free techniques." },
  ];
  return (
    <section className="section-pad">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Frequently asked questions.</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, idx) => (
            <details key={f.q} className="group card-soft p-6 [&_summary::-webkit-details-marker]:hidden" open={idx === 0}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-display font-semibold text-foreground text-base md:text-lg">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="section-pad bg-muted">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">Request your appointment.</h2>
          <p className="mt-3 text-muted-foreground">We'll get back to you within one business day — usually much sooner.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="card-soft overflow-hidden">
              <iframe
                title="Clearwater Family Dental location"
                src="https://www.google.com/maps?q=215+S+Myrtle+Ave,+Clearwater,+FL+33756&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                className="border-0 block"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="card-soft p-7 space-y-5">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Icon name="grid" /></span>
                <div>
                  <div className="font-semibold text-foreground">Address</div>
                  <div className="text-sm text-muted-foreground">215 S Myrtle Ave, Clearwater, FL 33756</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Icon name="phone" /></span>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <a href={PHONE_HREF} className="text-sm text-primary hover:underline">{PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary"><Icon name="heart" /></span>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a href="mailto:info@myclearwaterfamilydental.com" className="text-sm text-primary hover:underline break-all">info@myclearwaterfamilydental.com</a>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="card-soft p-7 md:p-9 space-y-5"
            aria-label="Appointment request form"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary-soft text-secondary">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="mt-4 font-display font-bold text-xl text-foreground">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">We've received your request and will reach out shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="name" label="Name" required />
                  <Field id="phone" label="Phone" type="tel" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="email" label="Email" type="email" required />
                  <Field id="date" label="Preferred Date" type="date" />
                </div>
                <div>
                  <label htmlFor="msg" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea id="msg" name="message" rows={4} className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary outline-none transition-colors" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="btn-primary w-full text-base">Submit Request</button>
                <p className="text-xs text-muted-foreground text-center">By submitting, you agree to be contacted about your appointment.</p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required = false }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-primary outline-none transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-px mx-auto max-w-7xl py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
              <Icon name="tooth" />
            </span>
            <span className="font-display font-bold">Clearwater Family Dental</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Patient-first dentistry serving Clearwater, FL families with compassion and modern care.
          </p>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-white transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider">Office Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex justify-between gap-4"><span>Mon – Thu</span><span>8AM – 5PM</span></li>
            <li className="flex justify-between gap-4"><span>Friday</span><span>8AM – 2PM</span></li>
            <li className="flex justify-between gap-4"><span>Sat – Sun</span><span>Closed</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>215 S Myrtle Ave<br/>Clearwater, FL 33756</li>
            <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a></li>
            <li><a href="mailto:info@myclearwaterfamilydental.com" className="hover:text-white transition-colors break-all">info@myclearwaterfamilydental.com</a></li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["Facebook", "Instagram", "Google"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-wrap gap-4 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Clearwater Family Dental. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors">Financing</a>
            <a href="#" className="hover:text-white transition-colors">Forms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <Team />
        <Services />
        <Offers />
        <Technology />
        <Testimonials />
        <Gallery />
        <EmergencyBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
