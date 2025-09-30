import { useState, useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { SplashScreen } from './Pages/SplashScreen/SplashScreen'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { AuthProvider } from "./Context/authContext";
import { ReservesProvider } from './Context/reservesContext'
import { DashboardPage } from './Pages/DashboardPage/DashboardPage'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { LandigPage } from './Pages/LandingPage/LandigPage'
import { WelcomePage } from './Pages/WelcomePage/WelcomePage'
import { RegisterPage } from './Pages/RegisterPage/RegisterPage'

import  ProtectedRoute  from "./ProtectedRoute";
import { MyReservsPage } from './Pages/MyReservsPage/MyReservsPage'


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <ReservesProvider>
        <BrowserRouter>
          {showSplash ? (
            <SplashScreen />
          ) : (
            <Routes>
              <Route path="/" element={<LandigPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/myreserves" element={<MyReservsPage />} />
              </Route>
            </Routes>
          )}
        </BrowserRouter>
      </ReservesProvider>
    </AuthProvider>
  );
}
export default App
