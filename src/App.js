import React,{Component} from 'react';
import $, { data } from 'jquery';
import Popper from 'popper.js';
import axios from "axios";
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
import Forms from './componentes/Forms';
import DropDown from './componentes/DropDown';
import { Navigate } from "react-router-dom";


class App extends Component{
  constructor(args){
    super(args);
    this.state = {
      user:{}
    }
		this.IniciarSesionA = this.IniciarSesionA.bind(this);
		this.IniciarSesion = this.IniciarSesion.bind(this);
		this.CerrarSesion = this.CerrarSesion.bind(this);
		this.Registrarse = this.Registrarse.bind(this);
  };
  componentDidMount(){
    if(window.localStorage.getItem("user") !== undefined){
      this.IniciarSesionA(JSON.parse(window.localStorage.getItem("user")))
    }
  }
  async Registrarse(user){
    console.log(user)
    await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Usuario/register',user).then((response)=>{
      console.log(response)
      alert("usuario creado exitosamente")
    }).catch(function (error){
      if (error.response) {
        alert("el usuario ya esta registrado")
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        alert("Error en el servidor")
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("error en la consulta (error desconocido)")
        console.log('Error', error.message);
      }
  })
  }
	async IniciarSesion(user){
    console.log(user)
    await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Usuario/login',user).then((response)=>{
      console.log(response)
      window.localStorage.setItem("user", JSON.stringify({name:response.data.data.codigo.toString(),password:response.data.data.password}));
      this.setState(PrevState =>({
        user:response.data
      }));
    }).catch(function (error){
        if (error.response) {
          alert("credenciales incorrectas")
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          alert("Error en el servidor")
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("error en la consulta (error desconocido)")
          console.log('Error', error.message);
        }
    })
      
	}
  async IniciarSesionA(user){
    await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Usuario/login',user).then((response)=>{
        this.setState(PrevState =>({
          user:response.data
        }));
    }).catch(function (error){
        if (error.response) {
          if(window.localStorage.getItem("user") !== null){
            window.localStorage.removeItem("user");
            alert("el usuario fue removido, por que las credenciales fueron cambiadas, porfavor inicie sesions")
          }
        }
        else if (error.request) {
          // The request was made but no response was received
          alert("Error en el servidor")
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("error en la consulta (error desconocido)")
          console.log('Error', error.message);
        }
    })
	}
  CerrarSesion(){
    window.localStorage.removeItem('user')
    this.setState({
      user:{}
    })
  }
  render(){
    if(Object.entries(this.state.user).length === 0){
      return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IniciarSesion IniciarSesion={this.IniciarSesion}/>}/>
            <Route path='/Registrarse' element={<Registrarse Registrarse={this.Registrarse}/>}/>
            <Route path='/ReestablecerContrasena' element={<ReestablecerContraseña/>}/>
          </Routes>
        </BrowserRouter>
      )
    }else{
      if(this.state.user.rol==="estudiante"){
        return(
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TareasE CerrarSesion={this.CerrarSesion}/>}/>
              <Route path='/Tarea:id' element={<TareaE/>}/>
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
                <Route path='/' element={<TareasPM CerrarSesion={this.CerrarSesion}/>}/>
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
  };
}

export default App;
