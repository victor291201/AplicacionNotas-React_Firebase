import React,{useContext} from 'react';
import { DataContext } from './context/Context';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import IniciarSesion from "./vistas/IniciarSesion";
import ReestablecerContraseña from "./vistas/ReestablecerContraseña";
import Registrarse from "./vistas/Registrarse";
import TareaE from "./vistas/TareaE";
import TareaPM from "./vistas/TareaPM";
import TareasE from "./vistas/TareasE.js";
import TareasPM from "./vistas/TareasPM";
import GestionarGruposM from "./vistas/GestionarGruposM";
import GestionarGruposE from './vistas/GestionarGruposE';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

export default function RouterApp(props){
  const {GlobalState} = useContext(DataContext);
  if(window.localStorage.getItem("user") === null){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IniciarSesion/>}/>
          <Route path='/Registrarse' element={<Registrarse/>}/>
          <Route path='/ReestablecerContrasena' element={<ReestablecerContraseña/>}/>
        </Routes>
      </BrowserRouter>
    )
  }else{
    if(GlobalState.user.rol==="Estudiante"){
      return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TareasE/>}/>
            <Route path='/Tareas' element={<TareaE/>}/>
            <Route path='/Tarea/:id' element={<TareaE/>}/>
            <Route path='/NuevaTarea' element={<TareaE/>}/>
            <Route path='/GestionarGrupos' element={<GestionarGruposE/>}/>
          </Routes>
        </BrowserRouter>
      )
    }
    else{
      return(
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TareasPM/>}/>
              <Route path='/Tarea:id' element={<TareaPM/>}/>
              <Route path='/NuevaTarea' element={<TareaPM/>}/>
              <Route path='/GestionarGrupos' element={<GestionarGruposM/>}/>
            </Routes>
          </BrowserRouter>
      )
    }
  }
  return (
   null
  );
}