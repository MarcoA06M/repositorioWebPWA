import React from 'react'
import GradientBackground from '../../../ComponentsUI/GradientBackground';

const SectionAbout = () => {
  return (
    <div id="about" className="hero min-h-screen bg-black/70">
      <GradientBackground />
    <div className="hero-content flex-col lg:flex-row relative z-10">
      <img
        src="https://images.unsplash.com/photo-1541126274323-dbac58d14741?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
     
        <h1 className="text-5xl font-bold">SOBRE NOSOTROS
        </h1>
        <p className="py-6 text-[20px] text-justify">
        Estamos aquí para convertir cada evento en un momento inolvidable. Somos expertos en DJ, sonido profesional y eventos infantiles, creando experiencias que van más allá de lo convencional
        </p>
        {/* <button className=" bg-[#a10151] hover:bg-[#781685]
        px-3 py-2 border-0 text-white font-bold sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12">Ver más</button> */}
      </div>
    </div>
  </div>
  )
}


export default SectionAbout;