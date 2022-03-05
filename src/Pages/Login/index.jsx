import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Action
import {
  handleGoogleLoginAction,
  handleLoginWithEmailAction
} from "../../redux/actions/login.action";

//Styles
import "./Login.styles.css";

//Images
import Google from "../../assets/img/google.png";

const Login = () => {
  //view
  const [view, setView] = useState("Login")
  const loginView = () => {
      setView("Login")
  }
  const signupView = () => {
      setView("Signup")
  }
  
  const [values, setValues] = useState({ emailForm: "", password: "" });

  const { message } = useSelector(store => store.error);
  const dispatch = useDispatch();

  const handleGoogleLogin = e => {
    e.preventDefault();
    dispatch(handleGoogleLoginAction());
  };

  const handleLoginWithEmail = e => {
    e.preventDefault();
    dispatch(handleLoginWithEmailAction(values));
  };

  return (
    <div className="fondo h-screen pt-24 pb-10 overflow-scroll">
        <div className="bg-color6 flex flex-col items-center w-min p-10 m-auto rounded-lg">
            <h2 className="text-3xl font-Raleway font-bold mb-6">{view==="Login" ? "Login" : "Signup"}</h2>
            <img onClick={handleGoogleLogin} className="h-6 mb-4 cursor-pointer" src={Google} alt="Google" />
            <p className="mb-4">{view==="Login" ? "Login with Google" : "Signup with Google"}</p>
            <div className="flex">
                <button className="btn-grad grad" onClick={()=>loginView()}>Login</button>
                <button className="btn-grad grad" onClick={()=>signupView()}>Singup</button>
            </div>
            {message && <p className="text-color1 mb-3 text-center text-xs">{message}</p>}
            <form  className=" w-11/12 flex flex-col" action="" onSubmit={handleLoginWithEmail}>
                <input 
                className={`p-3 border-2 border-b-4 rounded-lg border-color7 mb-5 ${view==="Login" ? "hidden" : ""}`} 
                type="text" name="" 
                id="User" placeholder="Username"
                onChange={e => setValues({ ...values, emailForm: e.target.value })}/>
                <input 
                className="p-3 border-2 border-b-4 rounded-lg border-color7 mb-7" 
                type="text" name="" 
                id="Email" placeholder="E-mail"
                onChange={e => setValues({ ...values, emailForm: e.target.value })}/>
                <input 
                className="p-3 border-2 border-b-4 rounded-lg border-color7 mb-5" 
                type="password" name="" 
                id="Password" placeholder="Password"
                onChange={e => setValues({ ...values, password: e.target.value })}/>  
                <input 
                className={`p-3 border-2 border-b-4 rounded-lg border-color7 mb-5 ${view==="Login" ? "hidden" : ""}`} 
                type="text" name="" 
                id="Confirm" placeholder="Confirm Password"/>
                <input 
                className="btn-grad grad" 
                type="submit" 
                value={view==="Login" ? "Iniciar Sesion" : "Crear Cuenta"}/>
            </form>
            <p className={`${view==="Login" ? "" : "hidden"}`}>Not a member?</p>
            <p className={`cursor-pointer text-color2 hover:text-color4 ${view==="Login" ? "" : "hidden"}`} 
            onClick={()=>signupView()}>Signup Now</p>
        </div>
        </div>
    
  );
};

export default Login;
