import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900"></div>
      
      {/* Layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-transparent to-purple-400/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-400/8 via-transparent to-pink-400/12"></div>
      
      {/* Subtle mesh pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(168,85,247,0.08)_0%,transparent_70%)]"></div>
      </div>
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-300/6 to-purple-300/10 rounded-full blur-3xl animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-gradient-to-l from-purple-300/5 to-pink-300/8 rounded-3xl blur-2xl animate-bounce-slow opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-teal-300/3 to-blue-300/6 rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        {/* <h1 className="bg-gradient-to-r from-indigo-400/15 via-purple-400/20 to-pink-400/18 w-full flex justify-center my-6 sm:my-12 px-4 sm:px-12 py-3 sm:py-4 backdrop-blur-2xl text-white font-bold text-2xl sm:text-3xl lg:text-4xl hover:bg-gradient-to-r hover:from-indigo-400/25 hover:via-purple-400/30 hover:to-pink-400/28 transition-all duration-500 rounded-2xl border border-indigo-300/25 hover:border-purple-400/45 cursor-pointer group shadow-lg hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_25px_rgba(168,85,247,0.5)]">Hello World</span>
        </h1> */}

        <div className="text-center p-4 sm:p-6 md:p-8 bg-white/5 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer group">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r px-4 sm:px-8 md:px-16 lg:px-80 from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent group-hover:animate-text-pulse transition-all duration-300 group-hover:[text-shadow:0_0_20px_rgba(236,72,153,0.6)]">
                HELLO WORLD
                </span>
            </h3>
            <p className="text-white/70 text-sm sm:text-base">Warm fire-like radiance</p>
        </div>
        
        <div className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.6)] transition-all duration-300 cursor-pointer mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-6 text-center">
          Welcome to Frosted Byte
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-6xl'>
                        {/* Glassmorphism Preview Card */}
            <Link to="/glassmorphism" className="group mb-4 sm:mb-6 lg:mb-8 w-full max-w-sm lg:max-w-md">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">🌟 Glassmorphism Showcase</h2>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                    Explore beautiful glass morphism effects with various styles, colors, and animations.
                </p>
                <div className="flex gap-2 justify-center mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/40 backdrop-blur-sm rounded-full border border-blue-300/50"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/40 backdrop-blur-sm rounded-full border border-purple-300/50"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400/40 backdrop-blur-sm rounded-full border border-pink-300/50"></div>
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-white font-medium group-hover:bg-white/30 transition-all duration-300 inline-block text-sm sm:text-base">
                    Enter Showcase 
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
                </div>
            </div>
            </Link>

            {/* Text Glow Preview Card */}
            <Link to="/text-glow" className="group mb-4 sm:mb-6 lg:mb-8 w-full max-w-sm lg:max-w-md">
            <div className="bg-black/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-black/30 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-3 sm:mb-4 group-hover:animate-text-glow transition-all duration-300">✨ Text Glow Effects</h2>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                    Discover stunning text illumination with neon glows, shimmers, and radiant typography effects.
                </p>
                <div className="flex gap-2 justify-center mb-3 sm:mb-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full group-hover:animate-text-glow transition-all duration-300"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full group-hover:animate-text-pulse transition-all duration-300"></div>
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full group-hover:animate-neon-flicker transition-all duration-300"></div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-300/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-purple-200 font-medium group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300 inline-block text-sm sm:text-base">
                    Explore Effects 
                    <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>

                </div>
                </div>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
