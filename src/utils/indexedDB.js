const DB_NAME = 'DMServicesDB';
const DB_VERSION = 1;
const RESERVATIONS_STORE = 'reservations';

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains(RESERVATIONS_STORE)) {
        const objectStore = db.createObjectStore(RESERVATIONS_STORE, {
          keyPath: 'id',
          autoIncrement: true,
        });
        
        objectStore.createIndex('userId', 'userId', { unique: false });
        objectStore.createIndex('date', 'date', { unique: false });
        objectStore.createIndex('status', 'status', { unique: false });
      }
    };
  });
};

// Crear reserva
export const createReservation = async (reservation) => {
  const db = await openDB();
  const transaction = db.transaction([RESERVATIONS_STORE], 'readwrite');
  const store = transaction.objectStore(RESERVATIONS_STORE);
  
  const reservationData = {
    ...reservation,
    createdAt: new Date().toISOString(),
    status: 'confirmed'
  };
  
  return new Promise((resolve, reject) => {
    const request = store.add(reservationData);
    request.onsuccess = () => {
      resolve({ id: request.result, ...reservationData });
    };
    request.onerror = () => reject(request.error);
  });
};

// Obtener todas las reservas de un usuario
export const getReservationsByUser = async (userId) => {
  const db = await openDB();
  const transaction = db.transaction([RESERVATIONS_STORE], 'readonly');
  const store = transaction.objectStore(RESERVATIONS_STORE);
  const index = store.index('userId');
  
  return new Promise((resolve, reject) => {
    const request = index.getAll(userId);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Obtener todas las fechas ocupadas
export const getAllReservationDates = async () => {
  const db = await openDB();
  const transaction = db.transaction([RESERVATIONS_STORE], 'readonly');
  const store = transaction.objectStore(RESERVATIONS_STORE);
  
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => {
      const reservations = request.result;
      const dates = reservations.map(r => ({
        date: r.date,
        time: r.time
      }));
      resolve(dates);
    };
    request.onerror = () => reject(request.error);
  });
};

// Eliminar reserva
export const deleteReservation = async (id) => {
  const db = await openDB();
  const transaction = db.transaction([RESERVATIONS_STORE], 'readwrite');
  const store = transaction.objectStore(RESERVATIONS_STORE);
  
  return new Promise((resolve, reject) => {
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};