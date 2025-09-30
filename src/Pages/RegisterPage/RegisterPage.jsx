import { useEffect, useState } from "react";
import { useAuth } from "../../Context/authContext";
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";

export const RegisterPage = () => {
        const {register, handleSubmit, formState: {errors}, setError} = useForm();
        const { signup, user, registerMessage, logout, errors: registerErrors, isAuthenticated } = useAuth();
        const navigate = useNavigate();

        

        const onSubmit = async (values) => {
          await signup(values);
        };

        useEffect(() => { 
          if (registerErrors.length > 0) {
            Swal.fire({
              title: "¡Ups! Hay un problema",
              text: registerErrors[0],
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        }, [registerErrors]); 


        useEffect(() => {
          if (registerMessage) {
              Swal.fire({
                  icon: "info",
                  title: "Registro exitoso",
                  text: registerMessage,
                  confirmButtonText: "OK",
              });
          }
      }, [registerMessage]);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
    <div className='backdrop-blur-sm bg-black/30 max-w-md w-full p-10 rounded-md '>
    
    <div className='flex flex-col items-center'>

  
{/*  <img src='' alt='logodmservices' className='h-20 w-auto mb-2'/> */}
 <span className="text-white text-xl font-bold mb-10">DMSERVICESQRO</span>
<h1 className='text-xl font-bold text-center my-5'>REGISTRO DE USUARIO</h1>
</div>
    
    
<form onSubmit={handleSubmit(onSubmit)}> 

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
      <input type="text" {...register("name", { required: "El nombre es requerido" })} 
      className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" placeholder="Nombre Completo" />
    </label>
    {errors.name && <p className='text-red-500 text-[11px]'>{errors.name.message}</p>}
    
    <label className="relative flex items-center gap-2 pb-5">
    <div className="absolute left-3 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
          d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
      </svg>
      </div>
      <input type="text" {...register("email", { required: "El email es requerido" })} 
      className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" placeholder="Email valido" />
      
    </label>
    {errors.email && <p className='text-red-500 text-[11px]'>{errors.email.message}</p>}
        
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
      <input type="tel" {...register("phone", { required: "El número es requerido" })}
      className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" placeholder="Teléfono" />
     
    </label>
    {errors.phone && <p className='text-red-500 text-[11px]'>{errors.phone.message}</p>}
    
    <label className="relative flex items-center gap-2 pb-5">
    <div className="absolute left-3 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
          fillRule="evenodd"
          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
          clipRule="evenodd" />
      </svg>
      </div>
      <input 
  type="password" 
  {...register("password", { 
    required: "La contraseña es requerida",
    minLength: {
      value: 6,
      message: "La contraseña debe tener al menos 6 caracteres"
    }
  })} 
  className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" 
  placeholder="Password" 
/>
     
    </label>
    {errors.password && <p className='text-red-500 text-[11px]'>{errors.password.message}</p>}
    
         <div className='flex flex-col items-center w-full'>
         <button type='submit' className='btn btn-wide bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:bg-gradient-to-r hover:from-[#b8025d] hover:to-[#781685] px-3 py-2 border-0 text-white font-bold hover:bg-purple-800 sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12'>
            Registrarme
              </button>

              <a href="/login" className='btn btn-wide bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:bg-gradient-to-r hover:from-[#b8025d] hover:to-[#781685] px-3 py-2 border-0 text-white font-bold hover:bg-purple-800 sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12'>
            Regresar
              </a>
             
        </div>
    </form>
    </div>
    </div>
  )
}

