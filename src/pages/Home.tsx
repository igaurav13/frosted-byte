import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Layered gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-500/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/10 via-transparent to-pink-500/15"></div>
      
      {/* Subtle mesh pattern overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
      </div>
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-400/8 to-purple-400/12 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-l from-purple-400/6 to-pink-400/10 rounded-3xl blur-2xl animate-bounce-slow opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/4 to-blue-400/8 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <h1 className="bg-gradient-to-r from-red-500 to-pink-500 w-full flex justify-center my-6 sm:my-12 px-4 sm:px-12 py-3 sm:py-4 backdrop-blur-2xl text-white font-bold text-2xl sm:text-3xl lg:text-4xl  hover:animate-text-glow-red transition-all duration-300 rounded-2xl border border-red-300/30 cursor-pointer group">
          <span className="group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300">Hello World</span>
        </h1>
        
        <div className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300 cursor-pointer mb-6 sm:mb-8 text-center">
          Welcome to Frosted Byte
        </div>

        {/* Glassmorphism Preview Card */}
        <Link to="/glassmorphism" className="group mb-6 sm:mb-8 w-full max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">🌟 Glassmorphism Showcase</h2>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Explore beautiful glass morphism effects with various styles, colors, and animations.
              </p>
              <div className="flex gap-2 justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/40 backdrop-blur-sm rounded-full border border-blue-300/50"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/40 backdrop-blur-sm rounded-full border border-purple-300/50"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400/40 backdrop-blur-sm rounded-full border border-pink-300/50"></div>
              </div>
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-white font-medium group-hover:bg-white/30 transition-all duration-300 inline-block text-sm sm:text-base">
                Enter Showcase →
              </div>
            </div>
          </div>
        </Link>

        {/* Text Glow Preview Card */}
        <Link to="/text-glow" className="group mb-6 sm:mb-8 w-full max-w-md mx-auto">
          <div className="bg-black/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-black/30 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4 group-hover:animate-text-glow transition-all duration-300">✨ Text Glow Effects</h2>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Discover stunning text illumination with neon glows, shimmers, and radiant typography effects.
              </p>
              <div className="flex gap-2 justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full group-hover:animate-text-glow transition-all duration-300"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full group-hover:animate-text-pulse transition-all duration-300"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full group-hover:animate-neon-flicker transition-all duration-300"></div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-300/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-purple-200 font-medium group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300 inline-block text-sm sm:text-base">
                Explore Effects →
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
