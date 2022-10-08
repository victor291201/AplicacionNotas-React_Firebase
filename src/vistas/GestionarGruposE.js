import React,{Component} from 'react';
import NavBar from '../componentes/NavBar';
import Forms from '../componentes/Forms';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

class GestionarGruposE extends Component{
    constructor(props) {
		super(props);
		this.state = {view:false};
		this.toggle = this.toggle.bind(this);
	}
	toggle(){
		this.setState(PrevState =>({
			view:!PrevState.view
		}));
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
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                            </ul>
                            <div className="mb-2 d-flex justify-content-center align-items-center w100p"style={{height:40}}>
                                <p className="mb-3 CPointer position-absolute"style={{bottom:0}} onClick={this.toggle}>Añadir Grupo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    {this.state.view?<Forms toggle={this.toggle} tipo="estudiante" />:null}
        </div>
    );
    }
}
export default GestionarGruposE;