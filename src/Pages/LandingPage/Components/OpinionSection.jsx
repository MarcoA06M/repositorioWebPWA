import React, { useState } from 'react'

const OpinionSection = () => {

const opiniones = [
    {
        name: "Marco A Marquez",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Una experiencia única, tal como lo dicen!, por supuesto que estarán en más de mis eventos",
        rating: "1"
    }, 
    {
        name: "Denisse Lugo",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Quedamos encantados con todo, muchas gracias!",
        rating: "5"
    }, 
    {
        name: "Sebastian Juarez",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Muy buenos, prendieron de lujo el evento!",
        rating: "4.5"
    }, 
    {
        name: "Alfredo Sanchez",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: "Excelente servicio.",
        rating: "5"
    }, 
]

const [currentIndex, setCurrentIndex] = useState(0);
const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= opiniones.length ? 0 : prevIndex + 2);
};

const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
    prevSlide - 2 < 0 ? opiniones.length - 2 : prevIndex -2 );
};

const OpinionCard = ({ opinion}) => (
    <div className="card w-96 mb-15">
    <div className="card-body">
<div className='flex items-center mb-4'>
    <div className="avatar mr-4">
<div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
<img src={opinion.image} alt={opinion.name} />
</div>
</div>
        <h2 className="card-title">{opinion.name}</h2>
        </div>
        <p>{opinion.content}</p>
        <div className="card-actions justify-end mt-3">
        <div className="rating gap-1">
        {[...Array(5)].map((_, i) => (
              <input 
                key={i}
                type="radio" 
                name={`rating-${opinion.id}`} 
                className="mask mask-heart bg-red-700" 
                aria-label={`${i+1} star`}
                defaultChecked={i+1 <= opinion.rating} 
                readOnly
              />
            ))}
</div>
        </div>
    </div>       
</div>

);

  return (
    <div id="opinions" className="flex flex-col items-center bg-black/70 text-white py-16 px-4 max-w-full">
  
    <div className="text-center max-w-full mt-35 mb-35">
      <h1 className="text-5xl font-bold mb-6 uppercase">¡Ellos ya vivieron la experiencia!, ¿Te lo perderás?</h1>
      <p className="text-justify max-w-3xl mx-auto text-[20px]">
      La mejor garantía de una fiesta inolvidable es la sonrisa de quienes la viven.
¡Descubre lo que dicen quienes ya confiaron en nosotros!
      </p>
    </div>


   <div className="relative w-full max-w-5xl mb-16">
        <div className="flex justify-center items-stretch">
          {opiniones.slice(currentIndex, currentIndex + 2).map((opinion) => (
            <OpinionCard key={opinion.id} opinion={opinion} />
          ))}
        </div>
        
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle bg-primary text-white -ml-5"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle bg-primary text-white -mr-5"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>



<div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title text-white">Total de Likes en redes sociales</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc text-white">21% más que el mes pasado</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title text-white">Visitas al sitio web</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc text-white">21% más que el més pasado</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
    <div className="stat-value">95%</div>
    <div className="stat-title text-white">Aprobación del cliente</div>
    <div className="stat-desc text-secondary">El otro 5% no ha contratado.</div>
  </div>
</div>

  

  </div>
  )
}

export default OpinionSection;
