"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Music, Mail } from 'lucide-react';

export default function MiguelOrtegaPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [letterboxdLoaded, setLetterboxdLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Cargar embed de Letterboxd
    const loadLetterboxd = () => {
      fetch('https://lb-embed-content.bokonon.dev?username=maikk')
        .then(response => response.text())
        .then(data => {
          const wrapper = document.getElementById('letterboxd-embed-wrapper-tc');
          if (wrapper) {
            wrapper.innerHTML = data;
            setLetterboxdLoaded(true);
          }
        })
        .catch(err => console.log('Letterboxd embed error:', err));
    };

    setTimeout(loadLetterboxd, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filmStrip = (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-16" />
  );

  // DATOS - fácil de actualizar
  const films = [
    {
      id: 1,
      title: 'DETENERSE A MIRAR',
      year: '2026',
      type: 'Documental',
      url: 'https://www.youtube.com/watch?v=j-_Ym5k2UuA',
      thumbnail: 'https://img.youtube.com/vi/j-_Ym5k2UuA/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'CORPUS YO',
      year: '2024',
      type: 'Cortometraje',
      url: 'https://www.instagram.com/p/C7c_1j6JJHe/',
      thumbnail: 'https://images.unsplash.com/photo-1493514789560-586cb221d7f7?w=400&h=400&q=80',
    },
    {
      id: 3,
      title: 'SUEÑO CON VOLVER',
      year: '2021',
      type: 'Cortometraje',
      url: '#',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'ESE SOY YO',
      year: '2021',
      type: 'Cortometraje',
      url: 'https://www.youtube.com/watch?v=SfCJq2izfrQ',
      thumbnail: 'https://img.youtube.com/vi/SfCJq2izfrQ/maxresdefault.jpg',
    },
  ];

  const socials = [
    { name: 'Instagram', url: 'https://www.instagram.com/maikposting', icon: '📷' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@maikposting', icon: '🎵' },
    { name: 'YouTube', url: 'https://www.youtube.com/@maikeldelosvideos', icon: '▶️' },
    { name: 'Facebook', url: 'https://www.facebook.com/maikposting', icon: '👥' },
    { name: 'Letterboxd', url: 'https://letterboxd.com/maikk/', icon: '🎬' },
    { name: 'Substack', url: 'https://substack.com/@maikposting', icon: '📝' },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 backdrop-blur-sm bg-neutral-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xs font-mono tracking-widest text-neutral-400">MAIK</div>
          <div className="flex gap-8 text-sm">
            <a href="#filmmaker" className="hover:text-neutral-300 transition">FILMMAKER</a>
            <a href="#creador" className="hover:text-neutral-300 transition">CREADOR</a>
            <a href="#reviews" className="hover:text-neutral-300 transition">REVIEWS</a>
            <a href="#about" className="hover:text-neutral-300 transition">SOBRE MI</a>
            <a href="#contact" className="hover:text-neutral-300 transition">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-4 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            MAIK
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light tracking-wide">
            FILMMAKER · CREADOR · CRÍTICO
          </p>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Creador, filmmaker y crítico explorando cine, música y cultura contemporánea.
          </p>

          {/* Hero Visual */}
          <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto text-neutral-400 mb-4 opacity-50" />
                <p className="text-neutral-500 text-sm">Showreel o Proyecto Destacado</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#filmmaker" className="px-8 py-3 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition">
              MIS PELÍCULAS
            </a>
            <a href="#creador" className="px-8 py-3 border border-neutral-700 hover:border-neutral-500 transition">
              SÍGUEME
            </a>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Filmmaker - Scroll Horizontal */}
      <section id="filmmaker" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            FILMMAKER
          </h2>

          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6 min-w-min">
              {films.map((film) => (
                <a 
                  key={film.id}
                  href={film.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-80"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition" />
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Creador - Links a Redes */}
      <section id="creador" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            CREADOR
          </h2>

          <p className="text-lg text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Sígueme en mis redes. Más de 10 años creando videos sobre lo que amo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-neutral-700 hover:border-neutral-400 hover:bg-neutral-900 transition group"
              >
                <span className="text-2xl mb-2 block">{social.icon}</span>
                <span className="text-sm font-semibold group-hover:text-neutral-200 transition">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            REVIEWS
          </h2>
          <p className="text-neutral-500 text-lg mb-12">Crítica de Cine y Música</p>

          {/* Letterboxd Embed */}
          <div className="mb-20 pb-20 border-b border-neutral-800">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Mis Reseñas en Letterboxd</h3>
              <div 
                id="letterboxd-embed-wrapper-tc" 
                className="min-h-96 bg-neutral-900 rounded-lg p-6 border border-neutral-800"
              >
                <p className="text-neutral-500">Cargando reseñas de Letterboxd...</p>
              </div>
            </div>
            <a 
              href="https://letterboxd.com/maikk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-neutral-400 transition"
            >
              VER MÁS EN LETTERBOXD <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Musicboard Section */}
          <div className="py-12 text-center">
            <div className="mb-8">
              <Music className="w-16 h-16 mx-auto text-neutral-400 mb-6" />
              <h3 className="text-3xl font-semibold mb-4">Reseñas de Música</h3>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Crítica y análisis de álbumes en Musicboard
              </p>
              <a 
                href="https://musicboard.app/maikchemicalromance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition"
              >
                IR A MUSICBOARD <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            SOBRE MI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-neutral-900 rounded-lg border border-neutral-800" />
            <div className="space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Hola soy maik, tengo más de 10 años creando videos sobre lo que amo. 
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Estudié teología pero aun no me titulo lol. Sígueme y te prometo buenos tiempos.
              </p>
              <div className="pt-6">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition"
                >
                  CONTACTO <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            HAGAMOS
            <br />
            ALGO CHILO
          </h2>
          <p className="text-neutral-400 mb-12 text-lg">
            Abierto a colaboraciones y proyectos creativos.
          </p>
          
          <a 
            href="mailto:contactomaikyt@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition mb-12 relative overflow-hidden"
          >
            <Mail className="w-5 h-5" />
            <span>ENVIAR EMAIL</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          <div className="flex justify-center gap-8 text-sm">
            <a href="https://www.instagram.com/maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
              TikTok
            </a>
            <a href="https://www.youtube.com/@maikeldelosvideos" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
              YouTube
            </a>
            <a href="https://letterboxd.com/maikk/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
              Letterboxd
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-20 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl md:text-5xl font-black text-neutral-50 mb-2" style={{letterSpacing: '-0.02em'}}>
              GOD IS.
            </p>
            <p className="text-4xl md:text-5xl font-black text-neutral-50 mb-8" style={{letterSpacing: '-0.02em'}}>
              GOD LOVES.
            </p>
            <p className="text-neutral-400 text-lg italic">— John Coltrane</p>
          </div>

          <div className="border-t border-neutral-700 pt-12 text-center space-y-4">
            <div className="flex justify-center gap-6 text-sm">
              <a href="https://www.instagram.com/maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                TikTok
              </a>
              <a href="https://www.youtube.com/@maikeldelosvideos" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                YouTube
              </a>
              <a href="https://www.facebook.com/maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                Facebook
              </a>
              <a href="https://letterboxd.com/maikk/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                Letterboxd
              </a>
              <a href="https://substack.com/@maikposting" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-300 transition">
                Substack
              </a>
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
