import React from 'react';

const Reserved = ({ bookingData, user, reserved }) => {
  if (!reserved || !reserved.reserve) {
    return <div className="loading text-white">Cargando detalles de la reserva...</div>;
  }

  const reserveData = reserved.reserve;
  const serviceAddress = bookingData.address || 'No establecida'; 
  const serviceFolio = `#${reserveData.id || 'DEMO'}`;

  function formatDate(date) {
    return new Date(date).toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return (
    <div>
      <section className="py-8 antialiased md:py-16">
        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-white sm:text-2xl mb-2">
            ¡Gracias por reservar!
          </h2>
          <p className="text-gray-400 mb-6 md:mb-8">
            Tu reserva <span className="font-medium text-yellow-500">{serviceFolio}</span> fue procesada exitosamente.
          </p>

          <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-700 bg-gray-800/50 p-6 mb-6 md:mb-8">
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Servicio</dt>
              <dd className="font-medium text-white sm:text-end">{bookingData.serviceOption}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Fecha</dt>
              <dd className="font-medium text-white sm:text-end">{formatDate(bookingData.date)}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Hora de inicio</dt>
              <dd className="font-medium text-white sm:text-end">{bookingData.time}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Cliente</dt>
              <dd className="font-medium text-white sm:text-end">{user?.name || 'Usuario'}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Dirección</dt>
              <dd className="font-medium text-white sm:text-end">{serviceAddress}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-400">Teléfono</dt>
              <dd className="font-medium text-white sm:text-end">{user?.phone || 'No disponible'}</dd>
            </dl>
            <dl className="sm:flex items-center justify-between gap-4 border-t border-gray-600 pt-2 mt-2">
              <dt className="font-bold mb-1 sm:mb-0 text-gray-300">Total</dt>
              <dd className="font-bold text-[#ff0080] sm:text-end text-xl">{bookingData.serviceCost}</dd>
            </dl>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/myreserves"
              className="w-full sm:w-auto text-center bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:from-[#b8025d] hover:to-[#781685] text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Ver mis reservas
            </a>
            <a
              href="/profile"
              className="w-full sm:w-auto text-center bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Mi perfil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reserved;
