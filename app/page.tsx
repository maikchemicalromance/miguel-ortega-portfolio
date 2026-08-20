'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

export default function MiguelOrtegaPortfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filmStrip = (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-16" />
  );

  const projects = [
    {
      id: 1,
      title: 'DETENERSE A MIRAR',
      year: '2026',
      type: 'Documentary',
      description: 'A visual exploration of artistic obsession.',
      thumbnail: 'https://images.unsplash.com/photo-1485579149c0-123123123123?w=800&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'ESE SOY YO',
      year: '2021',
      type: 'Short Film',
      description: '2nd place, Cinema Culturas - Riverside, CA',
      thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80',
      featured: false,
    },
    {
      id: 3,
      title: 'UNTITLED PROJECT',
      year: '2026',
      type: 'Short Film',
      description: 'Coming soon.',
      thumbnail: 'https://images.unsplash.com/photo-1493514789560-586cb221d7f7?w=800&q=80',
      featured: false,
    },
  ];

  const reviews = [
    {
      id: 1,
      title: 'THE MANDALORIAN & GROGU',
      artist: 'Jon Favreau',
      type: 'TV/Film',
      rating: 5,
      excerpt: 'A masterclass in character-driven storytelling within a vast universe.',
      year: '2024',
      featured: true,
    },
    {
      id: 2,
      title: 'PINK FLOYD: THE WALL',
      artist: 'Pink Floyd',
      type: 'Music',
      rating: 5,
      excerpt: 'A concept album that redefined what rock music could be.',
      year: '2024',
      featured: false,
    },
    {
      id: 3,
      title: 'DUNE: PART TWO',
      artist: 'Denis Villeneuve',
      type: 'Film',
      rating: 4,
      excerpt: 'Visual poetry meets epic scale.',
      year: '2024',
      featured: false,
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'AI-Generated Music: The Future of Art?',
      platform: 'YouTube',
      date: '2024-08-15',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80',
    },
    {
      id: 2,
      title: 'Toy Story 5: Why This Matters',
      platform: 'TikTok',
      date: '2024-08-12',
      thumbnail: 'https://images.unsplash.com/photo-1533148935980-86512ce4caea?w=400&q=80',
    },
    {
      id: 3,
      title: 'The Art of Short-Form Criticism',
      platform: 'Instagram',
      date: '2024-08-10',
      thumbnail: 'https://images.unsplash.com/photo-1594909122845-11bced451b4e?w=400&q=80',
    },
  ];

  return (
    <div className="bg-neutral-950 text-neutral-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 backdrop-blur-sm bg-neutral-950/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xs font-mono tracking-widest text-neutral-400">MIGUEL ORTEGA</div>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:text-neutral-300 transition">WORK</a>
            <a href="#videos" className="hover:text-neutral-300 transition">VIDEOS</a>
            <a href="#reviews" className="hover:text-neutral-300 transition">REVIEWS</a>
            <a href="#about" className="hover:text-neutral-300 transition">ABOUT</a>
          </div>
          <div className="flex gap-4 text-xs">
            <a href="https://instagram.com/maikposting" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition">INSTAGRAM</a>
            <a href="https://tiktok.com/@maikposting" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition">TIKTOK</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-4 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            MIGUEL
            <br />
            ORTEGA
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-8 font-light tracking-wide">
            FILMMAKER · CREATOR · CRITIC
          </p>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            Filmmaker, content creator and critic exploring cinema, music and contemporary culture.
          </p>

          {/* Hero Visual */}
          <div className="relative w-full aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 mx-auto text-neutral-400 mb-4 opacity-50" />
                <p className="text-neutral-500 text-sm">Showreel or Featured Project</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button className="px-8 py-3 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition">
              EXPLORE WORK
            </button>
            <button className="px-8 py-3 border border-neutral-700 hover:border-neutral-500 transition">
              LATEST VIDEOS
            </button>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Selected Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            SELECTED WORK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-video md:aspect-auto">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black group-hover:text-neutral-300 transition">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-2">
                        {project.year} · {project.type}
                      </p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-neutral-300 transition mt-1" />
                  </div>
                  <p className="text-neutral-400 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Latest Videos */}
      <section id="videos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            LATEST
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
                    {video.platform}
                  </p>
                  <h3 className="text-lg font-semibold group-hover:text-neutral-300 transition">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-600">{video.date}</p>
                </div>
              </div>
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
          <p className="text-neutral-500 text-lg mb-12">Film & Music Criticism</p>

          {/* Featured Review */}
          {reviews[0] && (
            <div className="mb-20 pb-20 border-b border-neutral-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square bg-neutral-900 rounded-lg border border-neutral-800" />
                <div className="space-y-8">
                  <div>
                    <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-4">
                      Featured Review
                    </p>
                    <h3 className="text-4xl md:text-5xl font-black mb-2">
                      {reviews[0].title}
                    </h3>
                    <p className="text-neutral-400 text-lg">
                      {reviews[0].artist} · {reviews[0].year}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(reviews[0].rating)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-neutral-300 leading-relaxed italic">
                    "{reviews[0].excerpt}"
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 hover:border-neutral-400 transition">
                    READ REVIEW <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.slice(1).map((review) => (
              <div key={review.id} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-900 rounded-lg border border-neutral-800 mb-6 group-hover:border-neutral-600 transition" />
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-2">
                      {review.type}
                    </p>
                    <h3 className="text-xl font-semibold group-hover:text-neutral-300 transition">
                      {review.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      {review.artist}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-neutral-400 text-sm italic">"{review.excerpt}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {filmStrip}

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            ABOUT MIGUEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-neutral-900 rounded-lg border border-neutral-800" />
            <div className="space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                Filmmaker and content creator exploring cinema, music and contemporary culture through short-form and long-form video, criticism, and visual essays.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Driven by curiosity about narrative, aesthetics, and the intersection of art and digital culture. Passionate about building a personal creative universe beyond social platforms.
              </p>
              <div className="flex gap-8 pt-6">
                <a href="https://instagram.com/maikposting" className="text-neutral-400 hover:text-neutral-200 transition font-mono text-sm">
                  INSTAGRAM →
                </a>
                <a href="https://tiktok.com/@maikposting" className="text-neutral-400 hover:text-neutral-200 transition font-mono text-sm">
                  TIKTOK →
                </a>
                <a href="https://letterboxd.com/maikposting" className="text-neutral-400 hover:text-neutral-200 transition font-mono text-sm">
                  LETTERBOXD →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filmStrip}

      {/* Contact */}
      <section className="py-24 px-6 text-center border-t border-neutral-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-neutral-50" style={{letterSpacing: '-0.02em'}}>
            LET'S MAKE
            <br />
            SOMETHING
          </h2>
          <p className="text-neutral-400 mb-12 text-lg">
            Open to collaboration, speaking engagements, and creative projects.
          </p>
          <button className="px-8 py-4 bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 transition mb-12">
            SEND EMAIL
          </button>
          <div className="flex justify-center gap-8 text-sm">
            <a href="https://instagram.com/maikposting" className="text-neutral-500 hover:text-neutral-300 transition">
              Instagram
            </a>
            <a href="https://tiktok.com/@maikposting" className="text-neutral-500 hover:text-neutral-300 transition">
              TikTok
            </a>
            <a href="https://youtube.com/@maikposting" className="text-neutral-500 hover:text-neutral-300 transition">
              YouTube
            </a>
            <a href="https://letterboxd.com/maikposting" className="text-neutral-500 hover:text-neutral-300 transition">
              Letterboxd
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-xs text-neutral-600 space-y-4">
          <p className="font-mono tracking-widest">MIGUEL ORTEGA</p>
          <p>Filmmaker · Creator · Critic</p>
          <p>© 2026 Miguel Ortega. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}