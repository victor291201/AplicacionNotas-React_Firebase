import React,{Component} from 'react';
import NavBar from '../components/NavBar';
import Forms from '../components/Forms';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
import axios from 'axios';
import { DataContext } from '../contexts/Context';

class GestionarGruposE extends Component{
    constructor(props) {
		super(props);
		this.state = {view:false,grupos:[]};
		this.toggle = this.toggle.bind(this);
		this.AgregarGrupo = this.AgregarGrupo.bind(this);
		this.EliminarGrupo = this.EliminarGrupo.bind(this);
	}
    static contextType = DataContext;
	toggle(){
		this.setState(PrevState =>({
			view:!PrevState.view,grupos:PrevState.grupos
		}));
	}
    async componentDidMount(){
        console.log(this.context.GlobalState)
        await axios.get("https://notasapi20221007143024.azurewebsites.net/api/Grupo/usuarios/"+this.context.GlobalState.user.id+"/grupos").then((response)=>{
            console.log(response.data.data)
            this.setState(PrevState =>({
                ...PrevState,grupos:response.data.data
            }));
            console.log(this.state.grupos)
        })
      
    }
    async AgregarGrupo(id){
        var grp = this.state.grupos
        console.log(this.context.GlobalState)
        await axios.post("https://notasapi20221007143024.azurewebsites.net/api/Grupo/"+id+"/"+this.context.GlobalState.user.id,{}).then((response)=>{
            grp.push(response.data.data.grupoDTO)
            this.setState(PrevState =>({
                view:false,grupos:grp
            }));
            window.location = '/AplicacionNotas-React_Firebase/GestionarGrupos'
        })
    }
    async EliminarGrupo(id){
        var grp = this.state.grupos
        console.log(this.context.GlobalState)
        await axios.delete("https://notasapi20221007143024.azurewebsites.net/api/Grupo/"+id+"/usuarios/"+this.context.GlobalState.user.id).then((response)=>{
            var ind = grp.indexOf(id);
            grp.splice(ind,1);
            this.setState(PrevState =>({
                view:false,grupos:grp
            }));
            window.location = '/AplicacionNotas-React_Firebase/GestionarGrupos'
        })
    }
    render(){
        return (
        <div  className="w100p h100p p-0 m-0">
            <NavBar  tipo={1}/>
            <div className='container-fluid px-2 m-0 w100p hcalc'>
                <div className='row p-0 m-0 d-flex align-items-center h100p w100p p-0'>
                    <div className='col-md-12  bg-white d-flex flex-column align-items-center' style={{height:550,borderRadius:7}}>
                        <div className=" d-flex flex-column align-items-center justify-content-start w100p" style={{height:550}}>
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
                                    return(<li class="list-group-item" key={elm.id.toString()}>{elm.nombre} <i class="bi bi-box-arrow-left text-danger float-right CPointer" onClick={()=>{this.EliminarGrupo(elm.id)}}></i></li>)
                                }))
                            }
                            </ul>
                            <div className="mb-2 d-flex justify-content-center align-items-center w100p"style={{height:40}}>
                                <p className="mb-3 CPointer position-absolute"style={{bottom:0}} onClick={this.toggle}>Añadir Grupo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    {this.state.view?<Forms toggle={this.toggle} send={this.AgregarGrupo}tipo="estudiante" />:null}
        </div>
    );
    }
}
export default GestionarGruposE;