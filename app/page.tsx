"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Play,
  Music,
  Mail,
  Menu,
  X,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

/* =========================
   ANIMATION COMPONENTS
========================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================
   MAIN
========================= */

export default function MiguelOrtegaPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* =========================
     LETTERBOXD
  ========================= */

  useEffect(() => {
    const loadLetterboxd = () => {
      fetch(
        "https://lb-embed-content.bokonon.dev?username=maikk"
      )
        .then((response) => response.text())
        .then((data) => {
          const wrapper = document.getElementById(
            "letterboxd-embed-wrapper-tc"
          );

          if (wrapper) {
            wrapper.innerHTML = data;
          }
        })
        .catch((err) => {
          console.log("Letterboxd embed error:", err);
        });
    };

    const timeout = setTimeout(loadLetterboxd, 500);

    return () => clearTimeout(timeout);
  }, []);

  /* =========================
     HERO PARALLAX
  ========================= */

  const { scrollY } = useScroll();

  const heroVideoY = useTransform(
    scrollY,
    [0, 700],
    [0, 110]
  );

  const heroVideoScale = useTransform(
    scrollY,
    [0, 700],
    [1.06, 1.14]
  );

  const heroTextY = useTransform(
    scrollY,
    [0, 700],
    [0, -70]
  );

  /* =========================
     FILM STRIP
  ========================= */

  const filmStrip = (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-16" />
  );

  /* =========================
     FILMS
  ========================= */

  const films = [
    {
      id: 1,
      title: "DETENERSE A MIRAR",
      year: "2026",
      type: "Documental",
      url: "https://www.youtube.com/watch?v=j-_Ym5k2UuA",
      thumbnail:
        "https://img.youtube.com/vi/j-_Ym5k2UuA/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "CORPUS YO",
      year: "2024",
      type: "Cortometraje",
      url: "https://www.instagram.com/p/C7c_1j6JJHe/",
      thumbnail: "https://i.imgur.com/Yvoo1UD.jpg",
    },
    {
      id: 3,
      title: "SUEÑO CON VOLVER",
      year: "2021",
      type: "Cortometraje",
      url: "https://www.youtube.com/watch?v=V4icyDcICC4",
      thumbnail:
        "https://img.youtube.com/vi/V4icyDcICC4/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "ESE SOY YO",
      year: "2021",
      type: "Cortometraje",
      url: "https://www.youtube.com/watch?v=SfCJq2izfrQ",
      thumbnail:
        "https://i.imgur.com/crQaxOm.jpg",
    },
  ];

  /* =========================
     SOCIALS
  ========================= */

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/maikposting",
      icon: "📷",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@maikposting",
      icon: "🎵",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@maikeldelosvideos",
      icon: "▶️",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/maikposting",
      icon: "👥",
    },
    {
      name: "Letterboxd",
      url: "https://letterboxd.com/maikk/",
      icon: "🎬",
    },
    {
      name: "Substack",
      url: "https://substack.com/@maikposting",
      icon: "📝",
    },
  ];

  /* =========================
     NAVIGATION
  ========================= */

  const navigation = [
    { name: "CREADOR", href: "#creador" },
    { name: "FILMMAKER", href: "#filmmaker" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "SOBRE MÍ", href: "#about" },
    { name: "CONTACTO", href: "#contact" },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-50 font-sans min-h-screen overflow-x-hidden">

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/80 backdrop-blur-xl bg-neutral-950/85">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex justify-between items-center">

          <motion.a
            href="#top"
            className="flex items-center"
            aria-label="Inicio"
            whileHover={{
              scale: 1.08,
              rotate: -3,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            <img
              src="https://i.imgur.com/gwC5RvN.png"
              alt="Maik"
              className="w-9 h-9 md:w-10 md:h-10 object-contain"
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-7 text-xs tracking-widest font-medium">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-neutral-400 hover:text-neutral-50 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="md:hidden text-neutral-300 hover:text-white transition"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-neutral-800 bg-neutral-950"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="px-6 py-5 flex flex-col">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="py-4 text-sm tracking-widest text-neutral-400 hover:text-white border-b border-neutral-900 transition"
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* =========================
          HERO
      ========================= */}

      <section
        id="top"
        className="pt-20 md:pt-24 pb-20"
      >
        <div className="relative w-full h-[60vh] min-h-[450px] md:h-[78vh] md:min-h-[650px] overflow-hidden">

          <motion.video
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            style={{
              y: heroVideoY,
              scale: heroVideoScale,
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Hero"
          >
            <source
              src="/hero.mp4"
              type="video/mp4"
            />
          </motion.video>

          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-transparent to-neutral-950 pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-transparent to-neutral-950/50 pointer-events-none" />
        </div>

        <motion.div
          className="max-w-5xl mx-auto text-center px-5 md:px-6"
          style={{ y: heroTextY }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-neutral-50 mt-[-20px] md:mt-[-30px] relative z-10"
            style={{
              letterSpacing: "-0.04em",
            }}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            MIGUEL
            <br />
            ORTEGA
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl md:text-2xl text-neutral-400 mt-5 font-light tracking-wide"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: "easeOut",
            }}
          >
            FILMMAKER · CREADOR · CRÍTICO
          </motion.p>
        </motion.div>
      </section>

      {filmStrip}

      {/* =========================
          CREADOR
      ========================= */}

      <section
        id="creador"
        className="py-24 px-5 md:px-6"
      >
        <div className="max-w-5xl mx-auto">

          <Reveal>
            <div className="mb-14">

              <p className="text-xs tracking-[0.3em] text-neutral-500 mb-5">
                01 — CREADOR
              </p>

              <h2
                className="text-5xl md:text-7xl font-black text-neutral-50"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                VIDEOS
                <br />

                <span className="text-neutral-500">
                  100% HECHOS POR 1 HUMANO.
                </span>
              </h2>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12">
              Más de 10 años haciendo videos sobre las cosas que me gustan:
              cine, música, cultura, internet y todo aquello que me da algo
              que decir.
            </p>
          </Reveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{
                  y: -5,
                  rotate: -0.5,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 20,
                }}
                className="group p-5 md:p-6 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900/70 hover:shadow-[0_15px_40px_rgba(255,255,255,0.04)] transition-colors duration-300"
              >
                <motion.span
                  className="text-2xl mb-4 block"
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 15,
                  }}
                >
                  {social.icon}
                </motion.span>

                <span className="text-sm font-semibold tracking-wide group-hover:text-neutral-200 transition">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {filmStrip}

      {/* =========================
          FILMMAKER
      ========================= */}

      <section
        id="filmmaker"
        className="py-24 px-5 md:px-6"
      >
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="mb-12">

              <p className="text-xs tracking-[0.3em] text-neutral-500 mb-5">
                02 — FILMMAKER
              </p>

              <h2
                className="text-5xl md:text-7xl font-black text-neutral-50"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                MIS PELÍCULAS
              </h2>

            </div>
          </Reveal>

          <div className="overflow-x-auto pb-6 -mx-5 px-5 md:-mx-6 md:px-6 scrollbar-thin">

            <motion.div
              className="flex gap-6 min-w-max"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              {films.map((film) => (
                <motion.a
                  key={film.id}
                  href={film.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="group flex-shrink-0 w-[78vw] sm:w-80 md:w-96"
                >

                  <div className="relative overflow-hidden mb-4 aspect-video bg-neutral-900">

                    <motion.img
                      src={film.thumbnail}
                      alt={film.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">

                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" />

                    </div>
                  </div>

                  <div className="space-y-2">

                    <h3 className="text-lg font-semibold group-hover:text-neutral-300 transition">
                      {film.title}
                    </h3>

                    <p className="text-sm text-neutral-500">
                      {film.year} · {film.type}
                    </p>

                  </div>

                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* =========================
          REVIEWS
      ========================= */}

      <section
        id="reviews"
        className="py-24 px-5 md:px-6"
      >
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="mb-12">

              <p className="text-xs tracking-[0.3em] text-neutral-500 mb-5">
                03 — REVIEWS
              </p>

              <h2
                className="text-5xl md:text-7xl font-black text-neutral-50"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                REVIEWS
              </h2>

            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* LETTERBOXD */}

            <Reveal>
              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  Cine
                </h3>

                <div className="min-h-96 bg-neutral-900 rounded-lg p-6 border border-neutral-800 overflow-hidden">
                  <div id="letterboxd-embed-wrapper-tc">
                    Loading...
                  </div>
                </div>

                <motion.a
                  href="https://letterboxd.com/maikk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-neutral-400 hover:bg-neutral-900 transition-colors mt-6"
                >
                  VER MÁS EN LETTERBOXD
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

              </div>
            </Reveal>

            {/* MUSICBOARD */}

            <Reveal delay={0.12}>
              <div className="flex flex-col justify-center">

                <div>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="inline-block"
                  >
                    <Music className="w-16 h-16 text-neutral-500 mb-8" />
                  </motion.div>

                  <h3 className="text-3xl font-semibold mb-6">
                    Música
                  </h3>

                  <p className="text-neutral-400 mb-10 text-lg leading-relaxed max-w-md">
                    Crítica y análisis de álbumes. Mis opiniones,
                    obsesiones y pensamientos sobre música en Musicboard.
                  </p>

                  <motion.a
                    href="https://musicboard.app/maikchemicalromance"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors shadow-lg hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)]"
                  >
                    IR A MUSICBOARD
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>

                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {filmStrip}

      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="py-24 px-5 md:px-6"
      >
        <div className="max-w-5xl mx-auto">

          <Reveal>
            <div className="mb-12">

              <p className="text-xs tracking-[0.3em] text-neutral-500 mb-5">
                04 — SOBRE MÍ
              </p>

              <h2
                className="text-5xl md:text-7xl font-black text-neutral-50"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                SOBRE MÍ
              </h2>

            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            <Reveal>
              <motion.div
                className="relative aspect-square overflow-hidden bg-neutral-900"
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >

                <motion.img
                  src="https://i.imgur.com/d4ZDMcg.jpg?v=2"
                  alt="Miguel Ortega"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 to-transparent pointer-events-none" />

              </motion.div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="space-y-6">

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  Hola, soy maik. Tengo más de 10 años creando videos
                  sobre lo que amo.
                </p>

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  Estudié teología, pero aún no me titulo lol. Hago
                  películas, videos, reviews y, básicamente, cosas que
                  me parecen interesantes.
                </p>

                <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
                  Sígueme y te prometo buenos tiempos.
                </p>

                <div className="pt-5">

                  <motion.a
                    href="#contact"
                    whileHover={{
                      y: -3,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    CONTACTO
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>

                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {filmStrip}

      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="py-24 px-5 md:px-6 text-center border-t border-neutral-800"
      >
        <div className="max-w-2xl mx-auto">

          <Reveal>

            <p className="text-xs tracking-[0.3em] text-neutral-500 mb-8">
              05 — CONTACTO
            </p>

            <h2
              className="text-5xl md:text-7xl font-black text-neutral-50 mb-8"
              style={{
                letterSpacing: "-0.04em",
              }}
            >
              HAGAMOS
              <br />
              ALGO CHILO
            </h2>

            <p className="text-neutral-400 mb-12 text-lg">
              Abierto a colaboraciones y proyectos creativos.
            </p>

            <motion.a
              href="mailto:contactomaikyt@gmail.com"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 20,
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors mb-12 shadow-lg hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)]"
            >
              <Mail className="w-5 h-5" />
              <span>ENVIAR EMAIL</span>
            </motion.a>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">

              {[
                [
                  "Instagram",
                  "https://www.instagram.com/maikposting",
                ],
                [
                  "TikTok",
                  "https://www.tiktok.com/@maikposting",
                ],
                [
                  "YouTube",
                  "https://www.youtube.com/@maikeldelosvideos",
                ],
                [
                  "Letterboxd",
                  "https://letterboxd.com/maikk/",
                ],
              ].map(([name, url]) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {name}
                </motion.a>
              ))}

            </div>

          </Reveal>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="border-t border-neutral-800 py-20 px-5 md:px-6 bg-neutral-900">

        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="text-center mb-12">

              <p
                className="text-4xl md:text-6xl font-black text-neutral-50 mb-2"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                GOD IS.
              </p>

              <p
                className="text-4xl md:text-6xl font-black text-neutral-50 mb-8"
                style={{
                  letterSpacing: "-0.04em",
                }}
              >
                GOD LOVES.
              </p>

              <p className="text-neutral-400 text-lg italic">
                — John Coltrane
              </p>

            </div>
          </Reveal>

          <div className="border-t border-neutral-700 pt-12 text-center space-y-4">

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">

              {[
                [
                  "Instagram",
                  "https://www.instagram.com/maikposting",
                ],
                [
                  "TikTok",
                  "https://www.tiktok.com/@maikposting",
                ],
                [
                  "YouTube",
                  "https://www.youtube.com/@maikeldelosvideos",
                ],
                [
                  "Facebook",
                  "https://www.facebook.com/maikposting",
                ],
                [
                  "Letterboxd",
                  "https://letterboxd.com/maikk/",
                ],
                [
                  "Substack",
                  "https://substack.com/@maikposting",
                ],
              ].map(([name, url]) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {name}
                </motion.a>
              ))}

            </div>

            <p className="text-xs text-neutral-600 pt-4">
              © 2026 MAIK. Todos los derechos reservados.
            </p>

          </div>
        </div>
      </footer>

    </div>
  );
}