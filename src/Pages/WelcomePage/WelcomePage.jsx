import React from 'react'
import Navbar from '../../Layouts/Navbar'
import { useEffect, useState } from "react";
import {Footer} from '../../Layouts/Footer'
import Steps from './Components/Steps'
import GradientBackground from '../../ComponentsUI/GradientBackground'
import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";
import { requestNotificationPermission } from '../../utils/notifications';



export const WelcomePage = () => {

useEffect(() => {
    requestNotificationPermission();
  }, []);

  const { user, registerMessage, isAuthenticated, logout } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: registerMessage,
        icon: "success",
        confirmButtonText: "OK",
    })
    }
  }, [isAuthenticated]); 


  return (
    <div>
    <Navbar user={user} logout={logout}/>
      <div className="relative isolate bg-black px-6 py-5 sm:py-15 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <GradientBackground />
    </div>
    <Steps user={user} logout={logout}/>
  </div>
</div>
  )
}

