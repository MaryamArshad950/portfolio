import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Projects", "Skills", "About", "Contact"];

const data = {
  name: "Maryam Arshad",
  initials: "MA",
  titleHighlight: "4+ Years Experience",
  bio: "Building scalable web applications with modern technologies. Specialized in creating intuitive dashboards, real-time data systems, and secure financial platforms.",
  skills: [
    { name: "ASP.NET Core", level: 85, icon: "🔷" },
    { name: "React.Js", level: 90, icon: "⚛️" },
    { name: "Next.Js", level: 75, icon: "🅝" },
    { name: "SQL Server", level: 85, icon: "🗄️" },
    { name: "JavaScript", level: 88, icon: "🟨" },
    { name: "TypeScript", level: 88, icon: "🟦" },
    { name: "REST APIs", level: 85, icon: "🔷" },
    { name: "JWT Auth", level: 80, icon: "🔐" },
  ],
  projects: [
    {
      title: "Terminal Management System",
      description:
        "The Terminal Management System (TMS) is a web-based platform designed to centrally manage, monitor, and configure payment terminals and merchant operations in real time. The system enables administrators to define terminal parameters and configurations through a unified portal, which are then securely downloaded and applied by POS terminals, ensuring consistent and controlled device behavior across the network. The application features a modern, responsive user interface built with React.js, providing an intuitive user experience for operational and administrative tasks.",
      tech: [
        "React.js",
        ".NET Core",
        "RESTful APIs",
        "SQL Server",
        "JWT Authentication",
        "AES-256",
      ],
      features: [
        "Real-time terminal monitoring and status tracking",
        "Comprehensive user management with role-based access control",
        "Advanced security configuration and settings management",
        "Detailed audit logging for all system activities",
        "Multi-location terminal deployment and management",
        "Responsive dashboard with data visualization",
        "Secure authentication and authorization system",
      ],
      live: "https://tms-portal.mflltd.com/#/",
      github: "https://github.com/MaryamArshad950/TMS_WEBPORTAL.git",
      images: [
        `${import.meta.env.BASE_URL}TMS.png`,
        `${import.meta.env.BASE_URL}TMS_dashboard.png`,
        `${import.meta.env.BASE_URL}TMS_terminals.png`,
        `${import.meta.env.BASE_URL}TMS_merchants.png`,
        `${import.meta.env.BASE_URL}TMS_reports.png`,
        `${import.meta.env.BASE_URL}TMS_users.png`,
        `${import.meta.env.BASE_URL}TMS_formsecurity.png`,
        `${import.meta.env.BASE_URL}TMS_audits.png`,
        `${import.meta.env.BASE_URL}TMS_cleanup.png`,
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "Merchant Portal",
      description:
        "A dedicated Merchant Portal was developed, providing merchants with a comprehensive dashboard to monitor and manage their financial operations. The portal offers real-time visibility into transaction data, including settled and unsettled transactions, along with discount and offer management capabilities — enabling merchants to track performance, reconcile payments, and manage promotions from a single interface. The application features a modern, responsive user interface built with React.js, providing an intuitive user experience for both administrative and merchant-facing tasks.",
      tech: [
        "React.js",
        ".NET Core",
        "RESTful APIs",
        "SQL Server",
        "JWT Authentication",
        "AES-256",
      ],
      features: [
        "Real-time transaction visibility and monitoring",
        "Settled and unsettled transaction management",
        "Discount and offer management capabilities",
        "Merchant performance tracking and reconciliation",
        "Comprehensive financial reporting dashboard",
        "Role-based access for merchant operations",
        "Secure payment data handling",
      ],
      live: "https://merchantportal.ubldigital.com/#/",
      github: "https://github.com/MaryamArshad950/MerchantPortal.git",
      images: [
        `${import.meta.env.BASE_URL}MP.jpg`,
        `${import.meta.env.BASE_URL}MP_dashboard.png`,
        `${import.meta.env.BASE_URL}MP_TrxnRpt.jpg`,
        `${import.meta.env.BASE_URL}MP_SettleRpt.jpg`,
      ],
      color: "from-violet-600 to-blue-700",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "NEW POS Technology Private Limited",
      period: "Nov 2025 – Present",
      type: "Full-time",
      bullets: [
        "Developed a Terminal Management System using React.js and .NET Core for multiple merchants, enabling POS device provisioning and remote configuration.",
        "Developed a merchant-facing portal using React.js and .NET Core for transaction details, analytics dashboards, downloadable reports, and automated discount campaign management.",
        "Implemented security controls for sensitive merchant and transaction data.",
      ],
    },
    {
      role: "Full-stack Developer",
      company: "OMA Pakistan Pvt. Ltd.",
      period: "Sep 2024 – Nov 2025",
      type: "Full-time",
      bullets: [
        "Architected and developed enterprise-grade .NET applications including Web Forms, Web APIs, and MVC frameworks for multiple banking clients, ensuring scalable and secure financial solutions",
        "Developed a Reconciliation System for Imtiaz Super Store with automated data processing and analysis, featuring a user-friendly UI for data verification and dual schedulers (merchant and bank side) to perform daily end-of-day reconciliation",
      ],
    },
    {
      role: ".NET Developer",
      company: "APPEDOLOGY PVT. LTD",
      period: "Dec 2023 – Aug 2024",
      type: "Full-time",
      bullets: [
        "Maintained a comprehensive Medical Lien Management System (Web Forms), automating monitoring workflows and reporting processes for healthcare providers and legal entities",
        "Implemented advanced reporting solutions using Microsoft Reporting Services and RDLC technology, enabling dynamic report generation",
      ],
    },
    {
      role: "Junior Software Developer",
      company: "SALAAM TAKAFUL LIMITED",
      period: "Dec 2021 – Aug 2023",
      type: "Full-time",
      bullets: [
        "Architected and delivered a customer-centric digital onboarding portal (Point of Sales) using .NET Core, enabling seamless individual life insurance policy registration with enhanced UX/UI design and enterpriselevel data security protocols",
        "Developed secure RESTful APIs leveraging .NET Core and JWT authentication mechanisms, ensuring encrypted data transmission and robust user authentication across multiple integrated applications",
      ],
    },
  ],
  education: [
    {
      degree: "BS Software Engineering",
      institution: "University of Karachi",
      year: "2018-2021",
    },
  ],
  contact: {
    email: "maryamarshad950@gmail.com",
    github: "MaryamArshad950",
    githubUrl: "https://github.com/MaryamArshad950",
    linkedin: "maryam-arshad-845139203",
    linkedinUrl: "https://www.linkedin.com/in/maryam-arshad-845139203/",
    location: "Karachi, Pakistan",
  },
};

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SkillBar({ skill, index }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="font-semibold text-slate-200 text-sm">
            {skill.name}
          </span>
        </div>
        <span className="text-blue-400 font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transition: `width 1s ease ${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

function ProjectCarousel({ project, isActive, onClick }) {
  const [slide, setSlide] = useState(0);
  const images = project.images;
  const prev = (e) => {
    e.stopPropagation();
    setSlide((s) => (s - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setSlide((s) => (s + 1) % images.length);
  };

  return (
    <button
      onClick={onClick}
      className={`group text-left bg-slate-900 rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 w-full ${
        isActive
          ? "border-blue-500 shadow-lg shadow-blue-900/30 ring-2 ring-blue-500/20"
          : "border-slate-800"
      }`}
    >
      {/* Carousel image area */}
      <div className="relative h-56 bg-slate-800 overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} screenshot ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ${
              i === slide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Prev / Next arrows — only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-slate-100 shadow transition-all opacity-0 group-hover:opacity-100 text-sm font-bold"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-slate-100 shadow transition-all opacity-0 group-hover:opacity-100 text-sm font-bold"
            >
              ›
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setSlide(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === slide
                    ? "w-5 h-2 bg-white"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}

        {isActive && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            ✓ Selected
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </button>
  );
}

/* Rotating wireframe "network" sphere, drawn on a 2D canvas (no extra dependencies) */
function WireSphere({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const golden = Math.PI * (3 - Math.sqrt(5));

    const makeSphere = (count, linkDist, scale, rgb, speed) => {
      const pts = [];
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const t = golden * i;
        const j = 1 + (Math.random() - 0.5) * 0.1; // slight irregularity
        pts.push([Math.cos(t) * r * j, y * j, Math.sin(t) * r * j]);
      }
      const edges = [];
      for (let i = 0; i < count; i++) {
        for (let k = i + 1; k < count; k++) {
          const dx = pts[i][0] - pts[k][0];
          const dy = pts[i][1] - pts[k][1];
          const dz = pts[i][2] - pts[k][2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < linkDist)
            edges.push([i, k]);
        }
      }
      return { pts, edges, scale, rgb, speed };
    };

    const spheres = [
      makeSphere(110, 0.55, 0.92, "96,165,250", 0.00018), // outer, blue
      makeSphere(50, 0.85, 0.5, "167,139,250", -0.00026), // inner, violet
    ];

    let size = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      size = canvas.clientWidth;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, size, size);
      const c = size / 2;
      const tilt = 0.35;
      const cosB = Math.cos(tilt);
      const sinB = Math.sin(tilt);

      spheres.forEach((s) => {
        const a = time * s.speed;
        const cosA = Math.cos(a);
        const sinA = Math.sin(a);
        const R = c * s.scale;

        const proj = s.pts.map(([x, y, z]) => {
          const x1 = x * cosA + z * sinA;
          const z1 = -x * sinA + z * cosA;
          const y2 = y * cosB - z1 * sinB;
          const z2 = y * sinB + z1 * cosB;
          const p = 2.6 / (2.6 - z2);
          return { x: c + x1 * R * p, y: c + y2 * R * p, d: (z2 + 1) / 2 };
        });

        ctx.lineWidth = 1;
        s.edges.forEach(([i, k]) => {
          const d = (proj[i].d + proj[k].d) / 2;
          ctx.strokeStyle = `rgba(${s.rgb},${0.06 + d * 0.4})`;
          ctx.beginPath();
          ctx.moveTo(proj[i].x, proj[i].y);
          ctx.lineTo(proj[k].x, proj[k].y);
          ctx.stroke();
        });

        proj.forEach((p) => {
          ctx.fillStyle = `rgba(${s.rgb},${0.25 + p.d * 0.75})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1 + p.d * 1.8, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf;
    if (reduce) {
      draw(0);
    } else {
      const loop = (t) => {
        draw(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      ["home", "projects", "skills", "about", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'); * { font-family: 'Inter', sans-serif; } html { scroll-behavior: smooth; color-scheme: dark; background: #020617; } body { margin: 0; background: #020617; }`}</style>

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg font-bold text-slate-100 hover:text-blue-400 transition-colors"
          >
            {data.name}
          </button>
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className={`relative px-4 py-2 rounded-lg text-sm cursor-pointer font-medium transition-colors ${active === l ? "text-blue-400" : "text-slate-400 hover:text-slate-100"}`}
                >
                  {l}
                  {active === l && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium ${active === l ? "text-blue-400 bg-blue-500/10" : "text-slate-400"}`}
              >
                {l}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 pt-16 bg-slate-950 overflow-hidden"
      >
        {/* faint grid, fading out away from the sphere */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            WebkitMaskImage:
              "radial-gradient(ellipse at 75% 45%, black, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse at 75% 45%, black, transparent 70%)",
          }}
        />
        {/* glow behind the sphere */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-40 w-[40rem] h-[40rem] rounded-full bg-blue-600/15 blur-3xl" />
        {/* 3D wireframe sphere */}
        <WireSphere className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-24 lg:right-0 w-[28rem] lg:w-[42rem] aspect-square opacity-30 lg:opacity-100" />
        <div className="relative max-w-6xl mx-auto w-full py-28">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-900 text-slate-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-slate-800">
              <span className="text-blue-400">&lt;/&gt;</span>
              Open to Full-time & Remote Opportunities
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-3">
              Full-stack Software Engineer
            </h1>
            <h2 className="text-5xl md:text-6xl font-black text-blue-500 leading-[1.05] tracking-tight mb-8">
              {data.titleHighlight}
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed mb-10">
              {data.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-900/50 hover:-translate-y-0.5 active:scale-95"
              >
                View My Projects <span className="text-lg">→</span>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 border-2 border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 text-slate-200 hover:text-blue-400 font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium px-4 py-2 rounded-full mb-5">
                🏛️ Featured Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Recent Projects
              </h2>
              <p className="text-slate-400 text-lg">
                Explore my latest work in building enterprise-level applications
              </p>
            </div>

            {/* Carousel card grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {data.projects.map((p, i) => (
                <ProjectCarousel
                  key={p.title}
                  project={p}
                  isActive={activeProject === i}
                  onClick={() => setActiveProject(i)}
                />
              ))}
            </div>

            {/* Detail panel */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {data.projects[activeProject].title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {data.projects[activeProject].description}
                </p>
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.projects[activeProject].tech.map((t) => (
                      <span
                        key={t}
                        className="bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Key Features
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                    {data.projects[activeProject].features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-[7px] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={data.projects[activeProject].live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-900/50"
                  >
                    ↗ View Live
                  </a>
                  <a
                    href={data.projects[activeProject].github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                  >
                    ⌥ View Code
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-2 rounded-full mb-5">
                🛠️ Technical Skills
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Technologies I work with to build robust enterprise applications
              </p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.skills.map((s, i) => (
              <SkillBar key={s.name} skill={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-slate-900/60">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium px-4 py-2 rounded-full mb-5">
                👩‍💻 About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Experience & Education
              </h2>
            </div>
            {/* Work Experience — 2 per row */}
            <div className="mb-10">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                Work Experience
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {data.experience.map((e) => (
                  <div
                    key={e.company}
                    className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-slate-100 leading-snug">
                          {e.role}
                        </h4>
                        <p className="text-blue-400 font-semibold text-sm mt-0.5">
                          {e.company}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20 whitespace-nowrap">
                          {e.type}
                        </span>
                        <p className="text-slate-500 text-xs mt-1.5 whitespace-nowrap">
                          {e.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-[7px] flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                Education
              </p>
              <div className="grid md:grid-cols-2 gap-5">
                {data.education.map((e) => (
                  <div
                    key={e.institution}
                    className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex items-center gap-5"
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      🎓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-base mb-0.5">
                        {e.degree}
                      </h4>
                      <p className="text-blue-400 font-semibold text-sm">
                        {e.institution}
                      </p>
                      <p className="text-slate-500 text-sm mt-0.5">{e.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Feel free to reach out for project collaborations or general
                inquiries.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: "✉",
                      label: "Email",
                      value: data.contact.email,
                      href: null,
                    },
                    {
                      icon: "⌥",
                      label: "GitHub",
                      value: data.contact.github,
                      href: data.contact.githubUrl,
                    },
                    {
                      icon: "in",
                      label: "LinkedIn",
                      value: data.contact.linkedin,
                      href: data.contact.linkedinUrl,
                    },
                    {
                      icon: "📍",
                      label: "Location",
                      value: data.contact.location,
                      href: null,
                    },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">
                          {c.label}
                        </p>
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-200 font-semibold text-sm hover:text-blue-400 transition-colors"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-slate-200 font-semibold text-sm">
                            {c.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-48 gap-3 text-center">
                    <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center text-2xl">
                      ✅
                    </div>
                    <p className="font-semibold text-white">Message sent!</p>
                    <p className="text-slate-400 text-sm">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-blue-400 text-sm font-medium hover:underline"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {[
                      {
                        key: "name",
                        label: "Name",
                        placeholder: "Your name",
                        type: "text",
                      },
                      {
                        key: "email",
                        label: "Email",
                        placeholder: "your.email@example.com",
                        type: "email",
                      },
                      {
                        key: "subject",
                        label: "Subject",
                        placeholder: "What is this about?",
                        type: "text",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={(e) =>
                            setForm({ ...form, [f.key]: e.target.value })
                          }
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        placeholder="Tell me about your project..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>
                    <a
                      href={`mailto:${data.contact.email}?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`}
                      onClick={() => setTimeout(() => setSent(true), 300)}
                      className="block w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3.5 rounded-xl text-center transition-all hover:shadow-lg hover:shadow-blue-900/50 active:scale-95"
                    >
                      Send Message →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center bg-slate-950">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-300">{data.name}</span> ·
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}
