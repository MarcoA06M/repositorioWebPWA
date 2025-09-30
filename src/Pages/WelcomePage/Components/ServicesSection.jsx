import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const PrincingSections = ( { selectService }) => {

  const tiers = [
    {
      name: 'Celebrations',
      id: 'Celebrations',
      href: '#',
      priceMonthly: '$8999',
      description: "El paquete perfecto para no olvidar ese día por años.",
      features: ['6 horas', 'Accesorios', 'Animación y show', 'Shots'],
      featured: false,
    },
    {
      name: 'Weeding or Xv´s',
      id: 'Weeding or Xv´s',
      href: '#',
      priceMonthly: '$16999',
      description: 'El toque ideal para convertir ese día tan especial en un evento único.',
      features: [
        '8 horas',
        'Animación, show y regalos',
        'Shots',
        'Accesorios',
        'Efectos',
        'Pista iluminada',
      ],
      featured: true,
    },
    {
      name: 'Kids Show',
      id: 'Kids Show',
      href: '#',
      priceMonthly: '$4999',
      description: "Alegría, color y mucha diversión ¡Garantizada!",
      features: ['4 horas', 'Animación y accesorios', 'Pinta caritas y SPA', 'Mine Feria'],
      featured: false,
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    
    <div className="relative">
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="mt-2 font-bold text-white sm:text-5xl">
        Elige tu experiencia
      </h1>
    </div>
    <p className="mx-auto mt-6 text-center font-medium text-pretty text-white font-size-8">
    Da clic en el botón "Elegir" en el paquete que desees. Estaremos encantados de llevar a tu evento lo mejor de nosotros. Si ya tienes una fecha da clic en el botón e ir al perfil.
    </p>
    <div className="mx-auto max-w-4xl text-center mt-5 mb-2">
    <a 
            type="button" 
            href="/myreserves"
            className='btn btn-wide bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:bg-gradient-to-r hover:from-[#b8025d] hover:to-[#781685] border-0 text-white font-bold hover:bg-purple-800 sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-11 mb-5 mr-2'
          >
            Ya tengo una reserva
          </a>
          </div>
    <div className="mx-auto grid max-w-lg grid-cols-1 items-center sm:mt-5 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
      {tiers.map((tier, tierIdx) => (
        <div
          key={tier.id}
          className={classNames(
            tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/100 sm:mx-8 lg:mx-0',
            tier.featured
              ? ''
              : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
          )}
        >
          <h3
            id={tier.id}
            className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
          >
            {tier.name}
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span
              className={classNames(
                tier.featured ? 'text-white' : 'text-gray-900',
                'text-5xl font-semibold tracking-tight',
              )}
            >
              {tier.priceMonthly}
            </span>
            <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/Sin IVA.</span>
          </p>
          <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
            {tier.description}
          </p>
          <ul
            role="list"
            className={classNames(
              tier.featured ? 'text-gray-300' : 'text-gray-600',
              'mt-8 space-y-3 text-sm/6 sm:mt-10',
            )}
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                />
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => selectService(tier.id, tier.priceMonthly)}
            className={classNames(
              tier.featured
                ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
              'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
            )}
          >
            Elegir
          </button>
        </div>
      ))}
    </div>
  </div>

  )
}

export default PrincingSections;

