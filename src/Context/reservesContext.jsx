import { createContext, useContext, useState, useEffect } from 'react';
import * as dbUtils from '../utils/indexedDB';
import { showNotification } from '../utils/notifications';

const ReservesContext = createContext();

export const useReserves = () => {
  const context = useContext(ReservesContext);
  if (!context) throw new Error('useReserves debe usarse dentro de ReservesProvider');
  return context;
};

export const ReservesProvider = ({ children }) => {
  const [reserved, setReserved] = useState(null);
  const [reserves, setReserves] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);

  const reservesDates = async () => {
    try {
      const dates = await dbUtils.getAllReservationDates();
      setReserves(dates);
    } catch (error) {
      console.error('Error cargando fechas:', error);
      setReserves([]);
    }
  };

  const createBooking = async (bookingData) => {
    setLoading(true);
    setErrors(null);

    try {
      const savedReservation = await dbUtils.createReservation(bookingData);
      
      setReserved({ reserve: savedReservation });
      setMessage('¡Reserva creada exitosamente!');
      
      showNotification('¡Reserva confirmada!', {
        body: `Tu reserva de ${bookingData.serviceOption} para el ${new Date(bookingData.date).toLocaleDateString('es-MX')} ha sido creada exitosamente`,
        tag: 'reserva-creada',
        icon: '/icon-192.png',
        badge: '/icon-192.png'
      });
      
      await reservesDates();
      
      setLoading(false);
      return { success: true, reservation: savedReservation };
      
    } catch (error) {
      console.error('Error creando reserva:', error);
      setErrors(['Error al crear la reserva']);
      setLoading(false);
      return { success: false };
    }
  };


  const getReservationsByUserId = async (userId) => {
    try {
      const userReservations = await dbUtils.getReservationsByUser(userId);
      return userReservations;
    } catch (error) {
      console.error('Error obteniendo reservas:', error);
      return [];
    }
  };

  return (
    <ReservesContext.Provider
      value={{
        reserved,
        reserves,
        loading,
        message,
        errors,
        createBooking,
        reservesDates,
        getReservationsByUserId,
      }}
    >
      {children}
    </ReservesContext.Provider>
  );
};

export default ReservesContext;