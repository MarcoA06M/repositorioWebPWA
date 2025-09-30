import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/firebaseService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import React, { useState } from 'react';


const LoginWithGoogle = () => {
  const [user, setUser] = useState(null); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const handleClickLoginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);  
      const user = result.user;
  
      const tokenGoogle = await user.getIdToken();
  
      Cookies.set("tokenGoogle", tokenGoogle, { expires: 1 });
  
      setUser(user); 
      setIsAuthenticated(true); 
      navigate("/welcome"); 
      setTimeout(() => {
        window.location.reload(); 
      }, 500); 
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };


  return (
    <div className="login-with-google">
      <button
        type="submit"
        onClick={handleClickLoginGoogle}
        className=" text-white text-[10px] font-bold sm:px-8 sm:py-3 rounded-4xl my-1 h-8 flex items-center gap-2"
      >
        Iniciar con 
        <img
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt="Google icon"
          className="w-6 h-6"
        />
        oogle
      </button>
    </div>
  );
};

export default LoginWithGoogle;