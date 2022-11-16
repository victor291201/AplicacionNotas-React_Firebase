import React,{Component} from 'react';
import NavBar from '../componentes/NavBar';
import Forms from '../componentes/Forms';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css'

class GestionarGruposM extends Component{
    constructor(props) {
		super(props);
		this.state = {view:false,estudiantes:[],grupoC:null,grupoId:null,grupos:[]};
		this.toggle = this.toggle.bind(this);
		this.Selected = this.Selected.bind(this);
		this.AgregarGrupo = this.AgregarGrupo.bind(this);
		this.EliminarGrupo = this.EliminarGrupo.bind(this);
	}
	toggle(){
		this.setState(PrevState =>({
			view:!PrevState.view,grupos:PrevState.grupos
		}));
	}
    async componentDidMount(){
        await axios.get("https://notasapi20221007143024.azurewebsites.net/api/Grupo/usuarios/"+"2"+"/grupos").then((response)=>{
            console.log(response.data.data)
            this.setState(PrevState =>({
                ...PrevState,grupos:response.data.data
            }));
            console.log(this.state.grupos)
        }) 
    }
    async Selected(id,codigo){
        await axios.get("https://notasapi20221007143024.azurewebsites.net/api/Grupo/usuarios/"+id).then((response)=>{
            console.log(response.data.data)
            this.setState(PrevState =>({
                ...PrevState,estudiantes:response.data.data,grupoC:codigo,grupoId:id
            }));
            console.log(this.state)
        })
    }
    async AgregarGrupo(id){
        await axios.post("https://notasapi20221007143024.azurewebsites.net/api/Grupo/"+this.state.grupoC.toString()+"/"+id.toString(),{}).then((response)=>{
            this.setState(PrevState =>({
                view:false
            }));
            console.log("se agrego el estudiante con exito")
        })
    }
    async EliminarGrupo(id){
        var grp = this.state.estudiantes
        console.log(this.context.GlobalState)
        await axios.delete("https://notasapi20221007143024.azurewebsites.net/api/Grupo/"+this.state.grupoId+"/usuarios/"+id).then((response)=>{
            var ind = this.state.estudiantes.map((elm)=>elm.id).indexOf(id);
            grp.splice(ind,1);
            this.setState(PrevState =>({
                view:false,estudiantes:grp
            }));
        })
    }
    render(){
        return (
            <div className="h100p w100p p-0 m-0">
                <NavBar  tipo={1}/>
                <div className='container-fluid px-2 m-0 w100p hcalc'>
                    <div className='row p-0 m-0 d-flex align-items-center h100p w100p p-0'>
                        <div className='col-md-12  bg-white d-flex justify-content-around' style={{height:550,borderRadius:7}}>
                            <div className=" d-flex flex-column align-items-center justify-content-start" style={{width:"49%",height:550}}>
                                <h3 className='my-3'>Grupos</h3>
                                <div class="d-flex align-items-center justify-content-between px-3 w100p">
                                    <p className='d-inline m-0'>Nombre del grupo</p>
                                    <div className="d-inline-flex justify-content-center align-items-center m-0 p-0" style={{width:200}}>
                                        <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                                        <i className="bi bi-search text-muted ml-n4 mr-2"></i>
                                    </div>
                                </div>
                                <ul class="list-group list-group-flush my-3 w100p OverY">
                                {
                                    this.state.grupos.map((elm=>{
                                        return(<li class="list-group-item CPointer" onClick={()=>this.Selected(elm.id,elm.codigo)}>{elm.nombre}<i class="bi bi-person-plus-fill text-success float-right CPointer" onClick={this.toggle}></i></li>)
                                    }))
                                }
                                </ul>
                            </div>
                            <div className=" d-flex flex-column align-items-center justify-content-start" style={{width:"49%",height:550}}>
                                <h3 className='my-3'>Estudiantes</h3>
                                <div class="d-flex align-items-center justify-content-between px-3 w100p">
                                    <p className='d-inline m-0'>Nombre del estudiante</p>
                                    <div className="d-inline-flex justify-content-center align-items-center m-0 p-0" style={{width:200}}>
                                        <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                                        <i className="bi bi-search text-muted ml-n4 mr-2"></i>
                                    </div>
                                </div>
                                <ul class="list-group list-group-flush my-3 w100p OverY">
                                {
                                    this.state.estudiantes.map((elm=>{
                                        return(<li class="list-group-item">{elm.nombre} <i class="bi bi-person-x-fill text-danger float-right CPointer" onClick={()=>{this.EliminarGrupo(elm.id)}}></i></li>)
                                    }))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    {this.state.view?<Forms toggle={this.toggle} send={this.AgregarGrupo}/>:null}
            </div>
        );
    }
    
}
export default GestionarGruposM;