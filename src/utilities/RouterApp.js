import React,{useContext} from 'react';
import { DataContext } from '../contexts/Context';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import IniciarSesion from "../pages/IniciarSesion";
import ReestablecerContraseña from "../pages/ReestablecerContraseña";
import Registrarse from "../pages/Registrarse";
import TareaE from "../pages/TareaE";
import TareaPM from "../pages/TareaPM";
import TareasE from "../pages/TareasE.js";
import TareasPM from "../pages/TareasPM";
import GestionarGruposM from "../pages/GestionarGruposM";
import GestionarGruposE from '../pages/GestionarGruposE';
import Loader from '../components/Loader';
import Error404 from '../pages/Error404';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

/**in this document are the logic of log in and also the logic of the routes of the project*/
export default function RouterApp(props){
  const {GlobalState} = useContext(DataContext);
  
  if(window.localStorage.getItem("user") === null){
    
    if(GlobalState.isLoad){
    return(
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IniciarSesion/>}/>
          <Route path='/Registrarse' element={<Registrarse/>}/>
          <Route path='/ReestablecerContrasena' element={<ReestablecerContraseña/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    )}
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<IniciarSesion/>}/>
          <Route path='/Registrarse' element={<Registrarse/>}/>
          <Route path='/ReestablecerContrasena' element={<ReestablecerContraseña/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    )
  }else{
    if(GlobalState.user.rol==="Estudiante"){
    if(GlobalState.isLoad){
      return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Loader/>
          <Routes>
            <Route path='/' element={<TareasE/>}/>
            <Route path='/Tareas' element={<TareaE/>}/>
            <Route path='/Tarea/:id' element={<TareaE/>}/>
            <Route path='/NuevaTarea' element={<TareaE/>}/>
            <Route path='/GestionarGrupos' element={<GestionarGruposE/>}/>
              <Route path="*" element={<Error404/>}/>
          </Routes>
        </BrowserRouter>
      )}
      return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<TareasE/>}/>
            <Route path='/Tareas' element={<TareaE/>}/>
            <Route path='/Tarea/:id' element={<TareaE/>}/>
            <Route path='/NuevaTarea' element={<TareaE/>}/>
            <Route path='/GestionarGrupos' element={<GestionarGruposE/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </BrowserRouter>
      )
    }
    else{
      if(GlobalState.isLoad){
        return(
          <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Loader/>
            <Routes>
              <Route path='/' element={<TareasPM/>}/>
              <Route path='/Tarea/:id' element={<TareaPM/>}/>
              <Route path='/NuevaTarea' element={<TareaPM/>}/>
              <Route path='/GestionarGrupos' element={<GestionarGruposM/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </BrowserRouter>
        )
      }
      return(
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<TareasPM/>}/>
              <Route path='/Tarea/:id' element={<TareaPM/>}/>
              <Route path='/NuevaTarea' element={<TareaPM/>}/>
              <Route path='/GestionarGrupos' element={<GestionarGruposM/>}/>
              <Route path="*" element={<TareasPM/>}/>
            </Routes>
          </BrowserRouter>
      )
    }
  }
  return (
   null
  );
}