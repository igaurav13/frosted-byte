import { Link } from 'react-router-dom';

function TextGlowShowcase() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Dark gradient background for better text glow visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated floating elements for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
          <Link 
            to="/" 
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-500 flex items-center gap-3 shadow-2xl order-2 sm:order-1"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
            Back to Home
          </Link>
          <div className="text-center order-1 sm:order-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 tracking-tight animate-text-glow">
              Text Glow Effects
            </h1>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg font-light">Stunning text illumination and neon effects</p>
          </div>
          <div className="w-0 sm:w-32 lg:w-40 order-3"></div> {/* Spacer for centering */}
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Hero Section */}
          <div className="mb-12 lg:mb-20">
            <div className="relative group max-w-4xl mx-auto text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[24px] sm:rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-2xl hover:bg-white/10 hover:border-white/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.02]">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
                    Illuminated Typography
                  </span>
                </h2>
                <p className="text-white/80 text-lg sm:text-xl lg:text-2xl font-light mb-6 sm:mb-8 max-w-3xl mx-auto animate-text-pulse">
                  Experience the mesmerizing world of glowing text effects that bring your content to life with radiant beauty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <button className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-300/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-blue-200 font-semibold hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transition-all duration-300 shadow-xl animate-text-glow">
                    Explore Effects
                  </button>
                  <button className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-medium hover:bg-white/15 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Glow Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Basic Glow Effects - Static</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2" style={{textShadow: '0 0 10px rgba(59, 130, 246, 0.8)'}}>
                  Blue Glow
                </h3>
                <p className="text-white/70 text-sm">Soft blue radiance</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2" style={{textShadow: '0 0 10px rgba(147, 51, 234, 0.8)'}}>
                  Purple Glow
                </h3>
                <p className="text-white/70 text-sm">Royal purple shine</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-2" style={{textShadow: '0 0 10px rgba(236, 72, 153, 0.8)'}}>
                  Pink Glow
                </h3>
                <p className="text-white/70 text-sm">Vibrant pink aura</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2" style={{textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'}}>
                  Cyan Glow
                </h3>
                <p className="text-white/70 text-sm">Electric cyan light</p>
              </div>
            </div>
          </section>

          {/* Basic Glow Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Basic Glow Effects - Hover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(59,130,246,0.8)]">
                  Blue Glow
                </h3>
                <p className="text-white/70 text-sm">Soft blue radiance</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-2 group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(147,51,234,0.8)]">
                  Purple Glow
                </h3>
                <p className="text-white/70 text-sm">Royal purple shine</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg sm:text-xl font-bold text-pink-400 mb-2 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(236,72,153,0.8)]">
                  Pink Glow
                </h3>
                <p className="text-white/70 text-sm">Vibrant pink aura</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)]">
                  Cyan Glow
                </h3>
                <p className="text-white/70 text-sm">Electric cyan light</p>
              </div>
            </div>
          </section>

          {/* Animated Glow Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Animated Glow Effects - Static</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 animate-text-glow">
                  Pulsing Glow
                </h3>
                <p className="text-white/70 text-sm">Rhythmic light pulsation</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 animate-text-pulse">
                  Breathing Effect
                </h3>
                <p className="text-white/70 text-sm">Gentle breathing motion</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 animate-neon-flicker">
                  Neon Flicker
                </h3>
                <p className="text-white/70 text-sm">Classic neon sign effect</p>
              </div>
            </div>
          </section>

          {/* Animated Glow Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Animated Glow Effects - Hover</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 group-hover:animate-text-glow transition-all duration-300">
                  Pulsing Glow
                </h3>
                <p className="text-white/70 text-sm">Rhythmic light pulsation</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 group-hover:animate-text-pulse transition-all duration-300">
                  Breathing Effect
                </h3>
                <p className="text-white/70 text-sm">Gentle breathing motion</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:animate-neon-flicker transition-all duration-300">
                  Neon Flicker
                </h3>
                <p className="text-white/70 text-sm">Classic neon sign effect</p>
              </div>
            </div>
          </section>

          {/* Gradient Text Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Gradient Glow Effects - Static</h2>
            <div className="space-y-6 px-4">
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]" style={{textShadow: '0 0 30px rgba(139, 92, 246, 0.5)'}}>
                    Shimmer Gradient
                  </span>
                </h3>
                <p className="text-white/70">Animated gradient with shimmer effect</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)'}}>
                    Ocean Depths
                  </span>
                </h3>
                <p className="text-white/70">Deep ocean color transition</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-text-pulse" style={{textShadow: '0 0 20px rgba(236, 72, 153, 0.6)'}}>
                    Fire Glow
                  </span>
                </h3>
                <p className="text-white/70">Warm fire-like radiance</p>
              </div>
            </div>
          </section>

          {/* Gradient Text Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Gradient Glow Effects - Hover</h2>
            <div className="space-y-6 px-4">
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-text-shimmer bg-[length:200%_100%] transition-all duration-300 group-hover:[text-shadow:0_0_30px_rgba(139,92,246,0.5)]">
                    Shimmer Gradient
                  </span>
                </h3>
                <p className="text-white/70">Animated gradient with shimmer effect</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(59,130,246,0.6),0_0_40px_rgba(139,92,246,0.4)]">
                    Ocean Depths
                  </span>
                </h3>
                <p className="text-white/70">Deep ocean color transition</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(236,72,153,0.6)]">
                    Fire Glow
                  </span>
                </h3>
                <p className="text-white/70">Warm fire-like radiance</p>
              </div>
            </div>
          </section>

          {/* Neon Sign Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Neon Sign Effects - Static</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
              <div className="text-center p-8 bg-black/50 rounded-xl border border-pink-500/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 animate-neon-flicker font-mono" style={{textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899, 0 0 20px #ec4899'}}>
                  NEON LIGHTS
                </h3>
                <p className="text-pink-200/70">Classic neon tube lighting</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-cyan-500/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 font-mono" style={{textShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee, 0 0 20px #22d3ee, 0 0 35px #22d3ee'}}>
                  ELECTRIC
                </h3>
                <p className="text-cyan-200/70">High-voltage electric glow</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-green-500/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 animate-text-pulse font-mono" style={{textShadow: '0 0 5px #22c55e, 0 0 10px #22c55e, 0 0 15px #22c55e, 0 0 20px #22c55e'}}>
                  MATRIX
                </h3>
                <p className="text-green-200/70">Digital matrix aesthetic</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-yellow-500/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 font-mono" style={{textShadow: '0 0 5px #eab308, 0 0 10px #eab308, 0 0 15px #eab308, 0 0 20px #eab308, 0 0 35px #eab308'}}>
                  GOLDEN
                </h3>
                <p className="text-yellow-200/70">Luxurious golden radiance</p>
              </div>
            </div>
          </section>

          {/* Neon Sign Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Neon Sign Effects - Hover</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
              <div className="text-center p-8 bg-black/50 rounded-xl border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-4 group-hover:animate-neon-flicker font-mono transition-all duration-300 group-hover:[text-shadow:0_0_5px_#ec4899,0_0_10px_#ec4899,0_0_15px_#ec4899,0_0_20px_#ec4899]">
                  NEON LIGHTS
                </h3>
                <p className="text-pink-200/70">Classic neon tube lighting</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 font-mono group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_5px_#22d3ee,0_0_10px_#22d3ee,0_0_15px_#22d3ee,0_0_20px_#22d3ee,0_0_35px_#22d3ee]">
                  ELECTRIC
                </h3>
                <p className="text-cyan-200/70">High-voltage electric glow</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 group-hover:animate-text-pulse font-mono transition-all duration-300 group-hover:[text-shadow:0_0_5px_#22c55e,0_0_10px_#22c55e,0_0_15px_#22c55e,0_0_20px_#22c55e]">
                  MATRIX
                </h3>
                <p className="text-green-200/70">Digital matrix aesthetic</p>
              </div>
              <div className="text-center p-8 bg-black/50 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 font-mono group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_5px_#eab308,0_0_10px_#eab308,0_0_15px_#eab308,0_0_20px_#eab308,0_0_35px_#eab308]">
                  GOLDEN
                </h3>
                <p className="text-yellow-200/70">Luxurious golden radiance</p>
              </div>
            </div>
          </section>

          {/* Multi-Color Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Multi-Color Glow Gallery - Static</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 px-4">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-red-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(239, 68, 68, 0.8)'}}>Red</span>
                <span className="text-white/60 text-xs">Fiery</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-orange-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(251, 146, 60, 0.8)'}}>Orange</span>
                <span className="text-white/60 text-xs">Warm</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-yellow-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(250, 204, 21, 0.8)'}}>Yellow</span>
                <span className="text-white/60 text-xs">Bright</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-green-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(34, 197, 94, 0.8)'}}>Green</span>
                <span className="text-white/60 text-xs">Nature</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-blue-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(59, 130, 246, 0.8)'}}>Blue</span>
                <span className="text-white/60 text-xs">Cool</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-indigo-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(99, 102, 241, 0.8)'}}>Indigo</span>
                <span className="text-white/60 text-xs">Deep</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-purple-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(147, 51, 234, 0.8)'}}>Purple</span>
                <span className="text-white/60 text-xs">Royal</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-pink-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(236, 72, 153, 0.8)'}}>Pink</span>
                <span className="text-white/60 text-xs">Vibrant</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-teal-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(20, 184, 166, 0.8)'}}>Teal</span>
                <span className="text-white/60 text-xs">Fresh</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-cyan-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(34, 211, 238, 0.8)'}}>Cyan</span>
                <span className="text-white/60 text-xs">Electric</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-emerald-400 font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(52, 211, 153, 0.8)'}}>Emerald</span>
                <span className="text-white/60 text-xs">Gem</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white font-bold text-lg block mb-1" style={{textShadow: '0 0 8px rgba(255, 255, 255, 0.8)'}}>White</span>
                <span className="text-white/60 text-xs">Pure</span>
              </div>
            </div>
          </section>

          {/* Multi-Color Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Multi-Color Glow Gallery - Hover</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 px-4">
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10  transition-all duration-300 cursor-pointer group">
                <span className="text-red-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(239,68,68,0.8)]">Red</span>
                <span className="text-white/60 text-xs">Fiery</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-orange-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(251,146,60,0.8)]">Orange</span>
                <span className="text-white/60 text-xs">Warm</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-yellow-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(250,204,21,0.8)]">Yellow</span>
                <span className="text-white/60 text-xs">Bright</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-green-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(34,197,94,0.8)]">Green</span>
                <span className="text-white/60 text-xs">Nature</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-blue-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(59,130,246,0.8)]">Blue</span>
                <span className="text-white/60 text-xs">Cool</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-indigo-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(99,102,241,0.8)]">Indigo</span>
                <span className="text-white/60 text-xs">Deep</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-purple-400 font-bold text-lg block mb-1 group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(147,51,234,0.8)]">Purple</span>
                <span className="text-white/60 text-xs">Royal</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-pink-400 font-bold text-lg block mb-1 group-hover:animate-neon-flicker transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(236,72,153,0.8)]">Pink</span>
                <span className="text-white/60 text-xs">Vibrant</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-teal-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(20,184,166,0.8)]">Teal</span>
                <span className="text-white/60 text-xs">Fresh</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-cyan-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(34,211,238,0.8)]">Cyan</span>
                <span className="text-white/60 text-xs">Electric</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-emerald-400 font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(52,211,153,0.8)]">Emerald</span>
                <span className="text-white/60 text-xs">Gem</span>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 cursor-pointer group">
                <span className="text-white font-bold text-lg block mb-1 group-hover:animate-text-glow transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8)]">White</span>
                <span className="text-white/60 text-xs">Pure</span>
              </div>
            </div>
          </section>

          {/* Advanced Text Effects - Static */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Advanced Typography Effects - Static</h2>
            <div className="space-y-8 px-4">
              <div className="text-center p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]" style={{textShadow: '0 0 30px rgba(236, 72, 153, 0.5)'}}>
                    COSMIC
                  </span>
                </h3>
                <p className="text-white/70">Interstellar text with cosmic vibes</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-xl border border-white/10">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 font-mono">
                  <span className="text-green-400 animate-text-pulse" style={{textShadow: '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e, 0 0 40px #22c55e'}}>
                    &lt;CODE/&gt;
                  </span>
                </h3>
                <p className="text-white/70">Digital coding aesthetic</p>
              </div>
            </div>
          </section>

          {/* Advanced Text Effects - Hover */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Advanced Typography Effects - Hover</h2>
            <div className="space-y-8 px-4">
              <div className="text-center p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent group-hover:animate-text-shimmer bg-[length:200%_100%] transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(147,51,234,0.6)]">
                    COSMIC
                  </span>
                </h3>
                <p className="text-white/70">Interstellar text with cosmic vibes</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-xl border border-white/10 hover:bg-gradient-to-r hover:from-green-900/30 hover:to-cyan-900/30 transition-all duration-300 cursor-pointer group">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 font-mono">
                  <span className="text-green-400 group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_15px_rgba(34,197,94,0.8)]">
                    &lt;CODE/&gt;
                  </span>
                </h3>
                <p className="text-white/70">Digital coding aesthetic</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TextGlowShowcase;
