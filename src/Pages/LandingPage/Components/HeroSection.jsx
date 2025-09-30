import React from 'react'

const HeroSection = () => {
  return (
    <div
    id="home"
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1546006508-5bd647796a4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    }}>
    <div className="hero-overlay bg-black/70"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-full">
        <h1 className="mb-2 text-5xl font-extrabold bg-[#a10151]">Somos DM Querétaro</h1>
        <p className="text-[35px] font-extrabold mb-8">
        Más que un evento, una experiencia única
        </p>
        <a href="/login" className=" bg-[#a10151] hover:bg-[#781685]
        px-3 py-2 border-0 text-white font-bold sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12">Reservar</a>
      </div>
    </div>
  </div>
  )
}

export default HeroSection;
