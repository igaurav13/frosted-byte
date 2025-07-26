import { Link } from 'react-router-dom';

function GlassmorphismShowcase() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Wallpaper Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/anders-jilden-cYrMQA7a3Wc-unsplash.jpg')`
        }}
      />
      
      {/* Overlay for better glassmorphism effect */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated floating elements for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2 tracking-tight">
              Glassmorphism
            </h1>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg font-light">Apple-inspired glass effects</p>
          </div>
          <div className="w-0 sm:w-32 lg:w-40 order-3"></div> {/* Spacer for centering */}
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Hero Section */}
          <div className="mb-12 lg:mb-20">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[24px] sm:rounded-[32px] blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-2xl hover:bg-white/15 hover:border-white/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.3)] transition-all duration-700 hover:scale-[1.02]">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4">Premium Glass Effect</h2>
                  <p className="text-white/80 text-base sm:text-lg lg:text-xl font-light mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Experience the perfect blend of transparency, blur, and depth that defines modern Apple design language.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <button className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
                      Primary Action
                    </button>
                    <button className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-white font-medium hover:bg-white/15 transition-all duration-300">
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Glass Cards */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Basic Glass Effects</h2>
            <div className="flex gap-2 sm:gap-4 justify-center flex-wrap px-4">
              <button className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white font-medium hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                Glass Light
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white font-medium hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                Glass Medium
              </button>
              <button className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white font-medium hover:bg-white/25 transition-all duration-300 text-sm sm:text-base">
                Glass Strong
              </button>
              <button className="bg-white/25 backdrop-blur-2xl border border-white/40 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white font-medium hover:bg-white/35 shadow-lg transition-all duration-300 text-sm sm:text-base">
                Glass Ultra
              </button>
            </div>
          </section>

          {/* Gradient Glass Cards */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Gradient Glass Effects</h2>
            <div className="flex gap-2 sm:gap-4 justify-center flex-wrap px-4">
              <button className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white font-medium hover:from-white/20 hover:to-white/15 transition-all duration-300 text-sm sm:text-base">
                Gradient Glass
              </button>
              <button className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm sm:text-base">
                Dual Gradient
              </button>
              <button className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-300/30 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-cyan-100 font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm sm:text-base">
                Cyan Gradient
              </button>
            </div>
          </section>

          {/* Colored Glass Cards */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Colored Glass Effects</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
              <button className="bg-blue-500/20 backdrop-blur-md border border-blue-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-blue-100 font-medium hover:bg-blue-500/30 transition-all duration-300 text-sm">
                Blue Glass
              </button>
              <button className="bg-purple-500/20 backdrop-blur-lg border border-purple-300/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-purple-100 font-medium hover:bg-purple-500/30 transition-all duration-300 text-sm">
                Purple Glass
              </button>
              <button className="bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-green-100 font-medium hover:bg-green-500/30 transition-all duration-300 text-sm">
                Green Glass
              </button>
              <button className="bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-red-100 font-medium hover:bg-red-500/30 transition-all duration-300 text-sm">
                Red Glass
              </button>
              <button className="bg-yellow-500/20 backdrop-blur-md border border-yellow-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-yellow-100 font-medium hover:bg-yellow-500/30 transition-all duration-300 text-sm">
                Yellow Glass
              </button>
              <button className="bg-pink-500/20 backdrop-blur-lg border border-pink-300/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-pink-100 font-medium hover:bg-pink-500/30 transition-all duration-300 text-sm">
                Pink Glass
              </button>
              <button className="bg-indigo-500/20 backdrop-blur-md border border-indigo-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-indigo-100 font-medium hover:bg-indigo-500/30 transition-all duration-300 text-sm">
                Indigo Glass
              </button>
              <button className="bg-orange-500/20 backdrop-blur-md border border-orange-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-orange-100 font-medium hover:bg-orange-500/30 transition-all duration-300 text-sm">
                Orange Glass
              </button>
              <button className="bg-teal-500/20 backdrop-blur-md border border-teal-300/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-teal-100 font-medium hover:bg-teal-500/30 transition-all duration-300 text-sm">
                Teal Glass
              </button>
              <button className="bg-black/30 backdrop-blur-xl border border-gray-500/40 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-200 font-medium hover:bg-black/40 transition-all duration-300 text-sm">
                Dark Glass
              </button>
            </div>
          </section>

          {/* Advanced Glass Cards */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Advanced Glass Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Glass Card</h3>
                <p className="text-white/80 text-sm mb-3 sm:mb-4">A beautiful glassmorphism card with blur effects and transparency.</p>
                <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 sm:px-4 py-2 text-white font-medium hover:bg-white/30 transition-all duration-300 text-sm">
                  Learn More
                </button>
              </div>

              {/* Colored Glass Card */}
              <div className="bg-gradient-to-br from-blue-500/15 to-purple-500/15 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 hover:from-blue-500/25 hover:to-purple-500/25 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Gradient Card</h3>
                <p className="text-white/80 text-sm mb-3 sm:mb-4">Enhanced with gradient backgrounds for more visual appeal.</p>
                <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 sm:px-4 py-2 text-white font-medium hover:bg-white/30 transition-all duration-300 text-sm">
                  Explore
                </button>
              </div>

              {/* Interactive Glass Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Interactive</h3>
                <p className="text-white/80 text-sm mb-3 sm:mb-4">Hover effects with scaling and enhanced shadows.</p>
                <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 sm:px-4 py-2 text-white font-medium hover:bg-white/30 transition-all duration-300 text-sm">
                  Try It
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismShowcase;
