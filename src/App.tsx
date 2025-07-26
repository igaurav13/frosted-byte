function App () {
  return (
    <>
        <div className="bg-black h-screen flex flex-col items-center justify-center">
                <h1 className="bg-red-500 w-full flex justify-center my-12 px-12 py-4 backdrop-blur-2xl text-white font-bold text-4xl hover:text-shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff,0_0_40px_#ff0000] transition-all duration-300">Hello World</h1>
      <div className="custom-card text-white text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:text-shadow-[0_0_15px_#8b5cf6,0_0_25px_#8b5cf6,0_0_35px_#8b5cf6] hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300 cursor-pointer">Hi There</div>
      <div className="flex gap-4 justify-center mt-8">
        <button className="bg-black/20 backdrop-blur-md border border-white/30 rounded-lg px-6 py-3 text-white font-medium shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300">
          Hi Nitish
        </button>
        <button className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4 text-white font-semibold shadow-xl hover:from-blue-500/30 hover:to-purple-500/30 hover:border-white/40 transition-all duration-300">
          Gaurav
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 text-white font-medium shadow-lg hover:text-shadow-[0_0_5px_#ffffff,0_0_10px_#ffffff] hover:scale-105 transition-all duration-300">
          Subtle Glow- Koth Gaming
        </button>
      </div>
      
      <div className="flex gap-3 justify-center mt-6 flex-wrap">
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_2px_#ffffff] hover:scale-105 transition-all duration-300">
          Min Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_4px_#ffffff,0_0_6px_#ffffff] hover:scale-105 transition-all duration-300">
          Low Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_6px_#ffffff,0_0_10px_#ffffff] hover:scale-105 transition-all duration-300">
          Med Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_8px_#ffffff,0_0_15px_#ffffff,0_0_20px_#ffffff] hover:scale-105 transition-all duration-300">
          High Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_10px_#ffffff,0_0_20px_#ffffff,0_0_30px_#ffffff] hover:scale-105 transition-all duration-300">
          Ultra Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium shadow-lg hover:text-shadow-[0_0_15px_#ffffff,0_0_25px_#ffffff,0_0_35px_#ffffff,0_0_45px_#ffffff] hover:scale-105 transition-all duration-300">
          Max Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-purple-300 font-medium shadow-lg hover:text-shadow-[0_0_12px_#8b5cf6,0_0_24px_#8b5cf6,0_0_36px_#8b5cf6] hover:scale-105 transition-all duration-300">
          Purple Glow
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-blue-300 font-medium shadow-lg hover:text-shadow-[0_0_12px_#3b82f6,0_0_24px_#3b82f6,0_0_36px_#3b82f6] hover:scale-105 transition-all duration-300">
          Blue Glow
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-6 flex-wrap max-w-6xl">
        <button className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-white font-medium hover:bg-white/10 transition-all duration-300">
          Glass 1
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white font-medium hover:bg-white/20 transition-all duration-300">
          Glass 2
        </button>
        <button className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-xl px-3 py-2 text-white font-medium hover:bg-white/25 transition-all duration-300">
          Glass 3
        </button>
        <button className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white font-medium hover:from-white/20 hover:to-white/15 transition-all duration-300">
          Gradient Glass
        </button>
        <button className="bg-blue-500/20 backdrop-blur-md border border-blue-300/30 rounded-lg px-3 py-2 text-blue-100 font-medium hover:bg-blue-500/30 transition-all duration-300">
          Blue Glass
        </button>
        <button className="bg-purple-500/20 backdrop-blur-lg border border-purple-300/30 rounded-xl px-3 py-2 text-purple-100 font-medium hover:bg-purple-500/30 transition-all duration-300">
          Purple Glass
        </button>
        <button className="bg-green-500/20 backdrop-blur-md border border-green-300/30 rounded-lg px-3 py-2 text-green-100 font-medium hover:bg-green-500/30 transition-all duration-300">
          Green Glass
        </button>
        <button className="bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-lg px-3 py-2 text-red-100 font-medium hover:bg-red-500/30 transition-all duration-300">
          Red Glass
        </button>
        <button className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-2xl px-3 py-2 text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
          Dual Glass
        </button>
        <button className="bg-black/30 backdrop-blur-xl border border-gray-500/40 rounded-lg px-3 py-2 text-gray-200 font-medium hover:bg-black/40 transition-all duration-300">
          Dark Glass
        </button>
        <button className="bg-white/25 backdrop-blur-2xl border border-white/40 rounded-full px-4 py-2 text-white font-medium hover:bg-white/35 shadow-lg transition-all duration-300">
          Bright Glass
        </button>
        <button className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-300/30 rounded-lg px-3 py-2 text-cyan-100 font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300">
          Cyan Glass
        </button>
        <button className="bg-yellow-500/20 backdrop-blur-md border border-yellow-300/30 rounded-lg px-3 py-2 text-yellow-100 font-medium hover:bg-yellow-500/30 transition-all duration-300">
          Yellow Glass
        </button>
        <button className="bg-pink-500/20 backdrop-blur-lg border border-pink-300/30 rounded-xl px-3 py-2 text-pink-100 font-medium hover:bg-pink-500/30 transition-all duration-300">
          Pink Glass
        </button>
        <button className="bg-indigo-500/20 backdrop-blur-md border border-indigo-300/30 rounded-lg px-3 py-2 text-indigo-100 font-medium hover:bg-indigo-500/30 transition-all duration-300">
          Indigo Glass
        </button>
      </div>
        </div>
    </>
  )
}

export default App