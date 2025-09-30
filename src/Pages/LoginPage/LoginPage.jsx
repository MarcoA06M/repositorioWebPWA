import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { useAuth } from "../../Context/authContext";
import "./Login.css";

export const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}, setError: setFormError} = useForm();
    const {signin, errors: loginErrors, isAuthenticated } = useAuth();
      const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  
    const LoginSubmit = async (values) => {
    setLoading(true);
    try {
      await signin(values);
    } catch (error) {
      console.log("Error al iniciar sesión", error);
    } finally {
      setLoading(false);
    }
  };
 
      useEffect(() => {
        if (loginErrors.length > 0) {
          Swal.fire({
            title: "¡Ups! Hay un problema",
            text: loginErrors[0], 
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }, [loginErrors]); 

      useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/welcome");
      });
    }
  }, [isAuthenticated, navigate]);


  return (
   
<div className='flex h-[calc(100vh-0px)] items-center justify-center'>
<div className='backdrop-blur-sm bg-black/30 max-w-md w-full p-10 rounded-md '>
<div className='flex flex-col items-center'>

    <span className="text-white text-xl font-bold mb-8">DMSERVICESQRO</span>
<h1 className='text-[15px] font-bold text-center my-5'>INICIO DE SESIÓN</h1>
</div>


<form name="loginForm" onSubmit={handleSubmit(LoginSubmit)}>

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

  <input type='email' {...register("email", { required: "El email es requerido" })} 
        className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" placeholder="Email"  />
</label>
{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
  <input type='password' {...register("password", {required: "La contraseña no puede estar vacia" })} 
 className="grow h-12 w-full pl-10 bg-black/10 rounded-full border border-zinc-700 focus:outline-none focus:border-[#ff0080] text-white" placeholder="Password" />
</label>
{errors.password && <p className='text-red-500'>{errors.password.message}</p>}

     <div className='flex flex-col items-center w-full'>

  
          <button type='submit' className='btn btn-wide bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:bg-gradient-to-r hover:from-[#b8025d] hover:to-[#781685] px-3 py-2 border-0 text-white font-bold hover:bg-purple-800 sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12 mt-5'>
        Iniciar Sesión
          </button>

          <a href="/register" className='btn btn-wide bg-gradient-to-r from-[#ff0080] to-[#a10151] hover:bg-gradient-to-r hover:from-[#b8025d] hover:to-[#781685] px-3 py-2 border-0 text-white font-bold hover:bg-purple-800 sm:px-8 sm:py-3 rounded-4xl my-1 shadow-none h-12'>
        Registrar
          </a>
        
    </div>
</form>
</div>
</div>
  )
}
