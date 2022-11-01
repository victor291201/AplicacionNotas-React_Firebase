import React,{Component,createContext} from "react";
import axios from "axios";

export const DataContext = createContext();

export class DataProvider extends Component{
    constructor(args){
      super(args);
      this.state = {
        user:{notas:[]},
        isLoad:false
      }
      this.IniciarSesionA = this.IniciarSesionA.bind(this);
      this.IniciarSesion = this.IniciarSesion.bind(this);
      this.CerrarSesion = this.CerrarSesion.bind(this);
      this.Registrarse = this.Registrarse.bind(this);
      this.EliminarNota = this.EliminarNota.bind(this);
      this.ActualizarNota = this.ActualizarNota.bind(this);
};
componentDidMount(){
  if(window.localStorage.getItem("user") !== undefined){
    this.IniciarSesionA(JSON.parse(window.localStorage.getItem("user")))
  }
}
async Registrarse(user){
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
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
this.setState((PrevState)=>({
  ...PrevState,isLoad:false
}))
}
  async IniciarSesion(user){
    this.setState((PrevState)=>({
      ...PrevState,isLoad:true
    }))
  console.log(user)
  await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Usuario/login',user).then( async (response)=>{
    window.localStorage.setItem("user", JSON.stringify({name:response.data.data.codigo.toString(),
      password:user.password}));
      var usr = response.data.data
      await axios.get("https://notasapi20221007143024.azurewebsites.net/api/Recordatorio/"+usr.id).then((response)=>{
          console.log(response.data.data)
          usr = {...usr,notas:response.data.data}
          console.log(usr)
          this.setState((PrevState) =>({
              user:usr
          }));
      })
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
  this.setState((PrevState)=>({
    ...PrevState,isLoad:false
  }))
  }
async IniciarSesionA(user){
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
  await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Usuario/login',user).then(async (response)=>{
        var usr = response.data.data
        await axios.get("https://notasapi20221007143024.azurewebsites.net/api/Recordatorio/"+usr.id.toString()).then((response)=>{
            usr = {...usr,notas:response.data.data}
            console.log(usr)
            this.setState((PrevState)=>({
                user:usr
            }));
        })
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
  this.setState((PrevState)=>({
    ...PrevState,isLoad:false
  }))
  }
CerrarSesion(){
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
  window.localStorage.removeItem('user')
  this.setState((PrevState)=>({
    user:{},isLoad:false
  }))
}
CrearNota=async(Obj)=> {
  
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
  console.log(this.state)
  var nts = this.state.user.notas
  await axios.post('https://notasapi20221007143024.azurewebsites.net/api/Recordatorio?idUsuario='+this.state.user.id,{titulo:Obj.titulo,
  descripcion:Obj.descripcion,prioridad:Obj.prioridad,fecha:Obj.fecha+"T"+Obj.hora+":37.775Z"}).then((response)=>{
    if(response.data.succeeded){
      nts.push(Obj)
      this.setState(PrevState =>({
        user : {...this.state.user,notas:nts}
      }));
      window.location = '/'
      console.log("actualice el estado")
    }
})

this.setState((PrevState)=>({
  ...PrevState,isLoad:false
}))
}
ActualizarNota=async(Obj,id)=> {
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
      console.log(this.state)
      var nts = this.state.user.notas
      await axios.put('https://notasapi20221007143024.azurewebsites.net/api/Recordatorio',{titulo:Obj.titulo,
      descripcion:Obj.descripcion,prioridad:Obj.prioridad,fecha:Obj.fecha+"T"+Obj.hora+":37.775Z",id:parseInt(id)}).then((response)=>{
      if(response.data.succeeded){
      var ind = this.state.user.notas.map(elm => elm.id.toString()).indexOf(id.toString());
      nts[ind]=Obj;
      this.setState(PrevState =>({
        user : {...this.state.user,notas:nts}
      }));
      window.location = '/'
      console.log("actualice la nota")
    }
})
this.setState((PrevState)=>({
  ...PrevState,isLoad:false
}))
}
EliminarNota=async(id)=>{
  this.setState((PrevState)=>({
    ...PrevState,isLoad:true
  }))
    await axios.delete("https://notasapi20221007143024.azurewebsites.net/api/Recordatorio/"+id.toString()).then((response)=>{
        console.log(response.data.succeeded)
        if(response.data.succeeded){
          console.log("entre")
          var nts = this.state.user.notas
          var notasAct=nts.filter(item=> item.id != id)
          this.setState(PrevState =>({
            user : {...this.state.user,notas:notasAct}
          }));
          
          console.log(notasAct)
        }
        else{
            console.log("no se pudo")
        }
    })
  this.setState((PrevState)=>({
    ...PrevState,isLoad:false
  }))
}
    render(){
        const {state,IniciarSesion,IniciarSesionA,CerrarSesion,Registrarse,CrearNota,EliminarNota,ActualizarNota} = this
        return(
            <DataContext.Provider value={{GlobalState:state,IniciarSesionA,IniciarSesion,CerrarSesion,Registrarse,CrearNota,EliminarNota,ActualizarNota}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}