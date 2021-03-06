import React,{Component} from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Carta from "./Carta.js";
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBPgHg7SxXbzkJWMTRzDR0nRkJ1kZIJR-Y",
  authDomain: "prueba-eac4b.firebaseapp.com",
  databaseURL: "https://prueba-eac4b.firebaseio.com",
  projectId: "prueba-eac4b",
  storageBucket: "prueba-eac4b.appspot.com",
  messagingSenderId: "841044968583",
  appId: "1:841044968583:web:b37475bb6262c1f6652422",
  measurementId: "G-D5M2LEQ35Y"
};
firebase.initializeApp(config)

const nameRef = firebase.database().ref().child("notas")


class App extends Component{
  constructor(args){
    super(args);
    this.state = {
      componentes : []
    }
    this.add = this.add.bind(this)
    this.delt = this.delt.bind(this)
    this.delone = this.delone.bind(this)
  };

  componentWillMount(){
    nameRef.on('value', snapshot => {
    var  dato = snapshot.val()
    this.setState({
      componentes: dato
      })
    })
  }

  delt(){
    nameRef.set([])
  }

  delone(pos){
    const datos = this.state.componentes
    datos.splice(pos,1)
    nameRef.set(datos)
  }
  add(){
    if(document.getElementById("nombre").value != "" && document.getElementById("nota").value != "" && document.getElementById("sexo").value != "..." && document.getElementById("prioridad").value != "..."){
      if(this.state.componentes == null){
        var item = {nombre: document.getElementById("nombre").value, nota: document.getElementById("nota").value, sexo: document.getElementById("sexo").value, prioridad: document.getElementById("prioridad").value }

        var datos = []
        datos.push(item)

        nameRef.set(datos)

        document.getElementById("nombre").value = ""
        document.getElementById("nota").value = ""
        document.getElementById("sexo").value = "..."
        document.getElementById("prioridad").value = "..."
      }
      else{
        var item = {nombre: document.getElementById("nombre").value, nota: document.getElementById("nota").value, sexo: document.getElementById("sexo").value, prioridad: document.getElementById("prioridad").value }

        var datos = this.state.componentes
        datos.push(item)

        nameRef.set(datos)

        document.getElementById("nombre").value = ""
        document.getElementById("nota").value = ""
        document.getElementById("sexo").value = "..."
        document.getElementById("prioridad").value = "..."
      }
    }
    else{
      alert("Complete todos los campos");
    }
  };
  render(){
    if(this.state.componentes != null){
      var tarjetas = this.state.componentes.map((value,number,numberArray)=>{
        if(value.prioridad == "Alta"){
        return(
          <Carta color="red" className="col-md-3 col-sm-4 col-lg-3 col-xl-3 mt-3 mb-3 mr-3"elim={() => this.delone(number)} nombre={value.nombre} nota={value.nota} sexo={value.sexo} prioridad={value.prioridad}/>
        )}
        if(value.prioridad == "Media"){
        return(
          <Carta color="yellow" className="col-md-3 col-sm-4 col-lg-3 col-xl-3 mt-3 mb-3 mr-3"elim={() => this.delone(number)} nombre={value.nombre} nota={value.nota} sexo={value.sexo} prioridad={value.prioridad}/>
        )}
        if(value.prioridad == "Baja"){
        return(
          <Carta color="green" className="col-md-3 col-sm-4 col-lg-3 col-xl-3 mt-3 mb-3 mr-3"elim={() => this.delone(number)} nombre={value.nombre} nota={value.nota} sexo={value.sexo} prioridad={value.prioridad}/>
        )}
      }).reverse();
    }
    else{
      var tarjetas = ""
    }
    return (
        <div className="container-fluid bg-dark d-block">
          <h1 className="mt-3 text-white badge badge-pill badge-danger badge float-right" >{this.state.componentes == null? 0:this.state.componentes.length}</h1>
          <div className="card d-inline-block col-md-3 col-sm-3 col-lg-3 col-xl-3 mt-4 mb-5 mr-3">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="nombre">Nombre de la persona:</label>
                <input className="form-control" autoComplete="off" id="nombre" type="text"/>
              </div>
              <div className="form-group">
                <label htmlFor="nota">Nota:</label>
                <input className="form-control" autoComplete="off" id="nota" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="sexo">Sexo:</label>
                <select className="form-control" id="sexo">
                  <option>...</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>:3</option>
                  <option>Alien</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="prioridad">Prioridad:</label>
                <select className="form-control" id="prioridad">
                  <option>...</option>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-lg btn-block sinborde" onClick={this.add}>Enviar</button>

                <button className="btn btn-outline-primary btn-lg btn-block sinborde" onClick={this.delt}>Eliminar Todo</button>
              </div>
            </div>
          </div>
          {tarjetas}
        </div>

    );
  };
}

export default App;
