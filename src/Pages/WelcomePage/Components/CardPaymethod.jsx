import React, { useState } from 'react';

const CardPaymethod = ({ amount, onPaymentConfirmed, onBack }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onPaymentConfirmed();
    }, 2000);
  };

  return (
    <div>
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mt-2 font-bold text-white sm:text-5xl">
          Confirma tu reserva
        </h1>
      </div>
      <p className="mx-auto mt-6 text-center font-medium text-pretty text-white font-size-8 mb-8">
        El monto total es: <span className="text-[#ff0080] text-3xl font-bold">{amount}</span>
      </p>

      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit} className="rounded-lg border border-gray-700 bg-black/30 p-8">
          <p className="text-white text-center mb-6">
            Métodos de Pago. 
            <br /> 
          </p>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onBack}
              className='btn bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 border-0 text-white font-bold px-8 py-3 rounded-full'
              disabled={isProcessing}
            >
              Volver
            </button>

            <button
              type="submit"
              className='btn bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:from-[#b8025d] hover:to-[#781685] border-0 text-white font-bold px-8 py-3 rounded-full'
              disabled={isProcessing}
            >
              {isProcessing ? 'Procesando...' : 'Confirmar Reserva'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPaymethod;