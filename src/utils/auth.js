
const USERS_DB = [
  {
    id: '1',
    name: 'Marco Antonio',
    email: 'marco@gmail.com',
    password: '123456',
    phone: '4421234567',
    rol: 'Cliente'
  },
  {
    id: '2',
    name: 'Denisse Lugo',
    email: 'denisse@gmail.com',
    password: '123456',
    phone: '4429876543',
    rol: 'Cliente'
  }
];


export const login = (email, password) => {
  const user = USERS_DB.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    localStorage.setItem('isAuthenticated', 'true');
    
    return { 
      success: true, 
      user: userWithoutPassword,
      message: [`Hola ${user.name}, has iniciado sesión correctamente`]
    };
  }

  return { 
    success: false, 
    message: ['La contraseña es incorrecta o el usuario no existe'] 
  };
};


export const register = (userData) => {
 
  const exists = USERS_DB.find(u => u.email === userData.email);
  
  if (exists) {
    return { 
      success: false, 
      message: ['El usuario ya existe, utilice un correo diferente'] 
    };
  }

  const newUser = {
    id: Date.now().toString(),
    rol: 'Cliente',
    ...userData
  };

  USERS_DB.push(newUser);
  
  const userWithoutPassword = { ...newUser };
  delete userWithoutPassword.password;
  
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  localStorage.setItem('isAuthenticated', 'true');
  
  return { 
    success: true, 
    user: userWithoutPassword,
    message: ['El usuario fue creado exitosamente']
  };
};


export const logout = () => {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isAuthenticated');
  return { success: true };
};


export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};


export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};


export const verifyToken = () => {
  const isAuth = isAuthenticated();
  const user = getCurrentUser();
  
  if (isAuth && user) {
    return { 
      success: true, 
      data: user 
    };
  }
  
  return { 
    success: false, 
    data: null 
  };
};