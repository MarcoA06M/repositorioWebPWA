import React, { useEffect, useState } from 'react';
import { useReserves } from '../../Context/reservesContext';
import { useAuth } from "../../Context/authContext";
import Navbar from '../../Layouts/Navbar';
import { Backforms } from '../../ComponentsUI/Backforms';

export const MyReservsPage = () => {
  const { getReservationsByUserId } = useReserves();
  const { user, logout } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const loadReservations = async () => {
      setLoading(true);
      try {
        const userReservations = await getReservationsByUserId(user.id);
        setReservations(userReservations);
      } catch (err) {
        console.error('Error cargando reservas:', err);
        setError('No se pudieron cargar las reservas');
      } finally {
        setLoading(false);
      }
    };

    loadReservations();
  }, [user, getReservationsByUserId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      confirmed: 'badge badge-success',
      pending: 'badge badge-warning',
      cancelled: 'badge badge-error'
    };
    return badges[status] || 'badge badge-ghost';
  };

  const getStatusText = (status) => {
    const texts = {
      confirmed: 'Confirmada',
      pending: 'Pendiente',
      cancelled: 'Cancelada'
    };
    return texts[status] || status;
  };

  if (loading) {
    return (
      <div className="relative flex flex-col min-h-screen bg-black overflow-hidden">
        <Backforms />
        <Navbar user={user} logout={logout} />
        <div className="flex-1 flex items-center justify-center">
          <div className="loading loading-spinner loading-lg text-[#ff0080]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex flex-col min-h-screen bg-black overflow-hidden">
        <Backforms />
        <Navbar user={user} logout={logout} />
        <div className="flex-1 flex items-center justify-center">
          <div className="alert alert-error max-w-md">
            <span>{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden">
      <Backforms />
      <Navbar user={user} logout={logout} />
      
      <div className="flex-1 flex flex-col items-start bg-black px-6 py-5 sm:py-15 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Mis Reservas</h1>
            <a
              href="/welcome"
              className="btn bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:from-[#b8025d] hover:to-[#781685] border-0 text-white"
            >
              + Nueva Reserva
            </a>
          </div>

          {reservations.length === 0 ? (
            <div className="card bg-base-100/10 shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white">No tienes reservas</h2>
                <p className="text-gray-400">
                  Aún no has realizado ninguna reserva. ¡Crea tu primera reserva ahora!
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="/welcome"
                    className="btn bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:from-[#b8025d] hover:to-[#781685] border-0 text-white"
                  >
                    Crear Reserva
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Vista Desktop - Tabla */}
              <div className="hidden md:block overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-white">
                      <th>ID</th>
                      <th>Servicio</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Dirección</th>
                      <th>Costo</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((reservation) => (
                      <tr key={reservation.id} className="hover">
                        <td className="text-white">#{reservation.id}</td>
                        <td className="text-white font-medium">
                          {reservation.serviceOption}
                        </td>
                        <td className="text-white">
                          {formatDate(reservation.date)}
                        </td>
                        <td className="text-white">{reservation.time}</td>
                        <td className="text-white max-w-xs truncate">
                          {reservation.address || reservation.adress || 'No especificada'}
                        </td>
                        <td className="text-[#ff0080] font-bold">
                          {reservation.serviceCost}
                        </td>
                        <td>
                          <span className={getStatusBadge(reservation.status)}>
                            {getStatusText(reservation.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Vista Mobile - Cards */}
              <div className="md:hidden space-y-4">
                {reservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="card bg-base-100/10 shadow-xl border border-gray-700"
                  >
                    <div className="card-body">
                      <div className="flex justify-between items-start">
                        <h2 className="card-title text-white">
                          {reservation.serviceOption}
                        </h2>
                        <span className={getStatusBadge(reservation.status)}>
                          {getStatusText(reservation.status)}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">ID:</span>
                          <span className="text-white">#{reservation.id}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Fecha:</span>
                          <span className="text-white">
                            {formatDate(reservation.date)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Hora:</span>
                          <span className="text-white">{reservation.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Dirección:</span>
                          <span className="text-white text-right max-w-[200px] truncate">
                            {reservation.address || reservation.adress || 'No especificada'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                          <span className="text-gray-400 font-bold">Total:</span>
                          <span className="text-[#ff0080] font-bold text-xl">
                            {reservation.serviceCost}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumen */}
              <div className="mt-8 card bg-base-100/10 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-white">Resumen</h3>
                  <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent">
                    <div className="stat">
                      <div className="stat-title text-gray-400">Total de Reservas</div>
                      <div className="stat-value text-white">{reservations.length}</div>
                    </div>
                    
                    <div className="stat">
                      <div className="stat-title text-gray-400">Confirmadas</div>
                      <div className="stat-value text-green-500">
                        {reservations.filter(r => r.status === 'confirmed').length}
                      </div>
                    </div>
                    
                    <div className="stat">
                      <div className="stat-title text-gray-400">Próxima Reserva</div>
                      <div className="stat-value text-[#ff0080] text-2xl">
                        {reservations.length > 0
                          ? formatDate(
                              reservations.sort(
                                (a, b) => new Date(a.date) - new Date(b.date)
                              )[0].date
                            ).split(',')[0]
                          : 'N/A'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
