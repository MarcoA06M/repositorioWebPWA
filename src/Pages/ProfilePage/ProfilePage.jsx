import React from 'react'
import Navbar from '../../Layouts/Navbar'
import { Footer } from '../../Layouts/Footer'
import { Backforms } from './Components/Backforms'
import { useAuth } from "../../Context/authContext";


export const ProfilePage = () => {
   const { user, isAuthenticated, logout } = useAuth();

   const userName = user?.name|| {};
   const userEmail = user?.email|| {}; 
   const userPhone = user?.phone|| {}; 

  


  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-hidden">
  <Backforms />
  <Navbar user={user} logout={logout} />

  <main className="flex-1 flex items-center justify-center py-8">
    <div className="backdrop-blur-sm bg-black/30 max-w-4xl w-full p-10 rounded-md">
      <div className="flex flex-col items-center">
    
        <h1 className="text-xl font-bold text-center py-8">Mi perfil</h1>
        <form className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <label className="relative flex items-center gap-2 pb-5">
              <div className="absolute left-3 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a6.978 6.978 0 0 0-4.546 1.636A2 2 0 0 0 2 13v1h12v-1a2 2 0 0 0-1.454-1.364A6.978 6.978 0 0 0 8 10Z" />
                </svg>
              </div>
              <input
                type="text"
                value={userName}
                className="text-[11px] grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Nombre Completo"
              />
            </label>

            <label className="relative flex items-center gap-2 pb-5">
              <div className="absolute left-3 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
              </div>
              <input
                type="text"
                value={userEmail}
                className=" text-[11px] grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Email"
              />
            </label>

            <label className="relative flex items-center gap-2 pb-5">
              <div className="absolute left-3 z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M3.654 1.328a1 1 0 0 1 1.317-.607l2.756 1.03a1 1 0 0 1 .598 1.307l-.733 2.032a1 1 0 0 1-.927.645l-1.923.064a8.005 8.005 0 0 0 3.86 3.86l.064-1.923a1 1 0 0 1 .645-.927l2.032-.733a1 1 0 0 1 1.307.598l1.03 2.756a1 1 0 0 1-.607 1.317l-1.852.74a2 2 0 0 1-2.07-.282l-.914-.914a10.4 10.4 0 0 1-4.22-4.22l-.914-.914a2 2 0 0 1-.282-2.07l.74-1.852Z" />
                </svg>
              </div>
              <input
                type="tel"
                value={userPhone}
                className="text-[11px] grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Teléfono"
              />
            </label>

          </div>

        </form>

        <a href="/myreserves" className="btn bg-[#ff0080] text-white border-0 sm:px-25 sm:py-3 w-full sm:w-auto max-w-xs rounded-4xl my-1 shadow-lg shadow-black/10 h-12 mb-3 hover:bg-[#781685] mt-8">Ver Historial</a>
        <a href="/welcome" className="btn bg-[#ff0080] text-white border-0 sm:px-28 sm:py-3 w-full sm:w-auto max-w-xs rounded-4xl my-1 shadow-lg shadow-black/10 h-12 mb-3 hover:bg-[#781685] mt-1">Reservar</a>

      </div>
    </div>
  </main>
    <Footer />
</div>


  )
}
