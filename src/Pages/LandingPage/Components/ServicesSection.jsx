import React from 'react'

const ServicesSection = () => {

  const cardHeight = "500px"; 

  return (
    <div id="services" className="w-full py-8 bg-black">


  <div className='container mx-auto mt-35 mb-35'>
    <div className='text-center mb-12 '>
      <h1 className="text-5xl font-bold mb-6">NUESTROS SERVICIOS</h1>
      <p className="max-w-4xl mx-auto text-[20px] text-justify">
      Nuestra misión es brindarte tranquilidad y seguridad en los momentos más importantes de tu vida.
      Cada evento es único, por eso trabajamos contigo desde el primer momento,
      diseñando cada detalle para que sea inigualable.
      </p>
    </div>

      <div className="flex flex-wrap justify-center gap-8">
      
        <div className="card w-96 shadow-sm bg-black" style={{ height: cardHeight }}>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1622023115060-8ba23e0d0e1c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Servicio 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weeding & XV’s – Magia en cada momento</h2>
            <p className='text-justify'>Las mejores historias de amor y celebración comienzan con la música perfecta. Diseñamos la atmósfera ideal para que tu boda o XV se sienta como un cuento de hadas. Luces, beats y emociones en su máxima expresión.</p>
            <div className="card-actions justify-end">
            <a href="/login" className=" bg-[#a10151] hover:bg-[#781685]
        px-3 py-2 border-0 text-white font-bold sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12">Contratar</a>
            </div>
          </div>
        </div>


        <div className="card w-96 shadow-sm bg-black" style={{ height: cardHeight }}>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Servicio 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Celebraciones – ¡La fiesta que te mereces!</h2>
            <p className='text-justify'>Desde cumpleaños hasta aniversarios, cualquier pretexto es bueno para una gran fiesta. Hacemos que cada evento sea una explosión de diversión, ritmo y energía. Tú solo disfruta, nosotros nos encargamos de que nadie deje de bailar.</p>
            <div className="card-actions justify-end">
            <a href="/login" className=" bg-[#a10151] hover:bg-[#781685]
        px-3 py-2 border-0 text-white font-bold sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12">Contratar</a>
            </div>
          </div>
        </div>


        <div className="card w-96 shadow-sm bg-black" style={{ height: cardHeight }}>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Servicio 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Infantiles – Magia, risas y diversión</h2>
            <p className='text-justify'>Los más pequeños merecen momentos épicos. Con juegos, animación y la mejor música, creamos fiestas infantiles llenas de alegría, color y sorpresas. ¡Ver sus caritas de felicidad no tiene precio!</p>
            <div className="card-actions justify-end">
            <a href="/login" className=" bg-[#a10151] hover:bg-[#781685]
        px-3 py-2 border-0 text-white font-bold sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12">Contratar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default ServicesSection;