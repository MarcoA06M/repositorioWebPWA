export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.log('Notificaciones no soportadas');
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === 'granted';
};

export const showNotification = (title, options = {}) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      ...options
    });
  }
};