import React,{Component} from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Carta extends Component{
  render(){
  	if(this.props.prioridad === "Alta"){
	    return(
	    	<div className=" card col-md-3 col-sm-4 col-lg-3 col-xl-3 d-inline-block m-2 mt-5 tarjeta">
	    		<button onClick={this.props.elim} type="button" className="close sinborde" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.nombre}</h5>
				    <p className="card-text">{this.props.nota}</p>
	    			<h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: {this.props.sexo}</h6>
				   	<span class="mb-4 badge float-right d-inline badge-danger">{this.props.prioridad}</span>
				  </div>
				</div>
	    );
	  }
  	if(this.props.prioridad === "Media"){
	    return(
	    	<div className=" card col-md-3 col-sm-4 col-lg-3 col-xl-3 d-inline-block m-2 mt-5 tarjeta">
	    		<button onClick={this.props.elim} type="button" className="close" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.nombre}</h5>
				    <p className="card-text">{this.props.nota}</p>
	    			<h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: {this.props.sexo}</h6>
				   	<span class="mb-4 badge float-right d-inline badge-warning">{this.props.prioridad}</span>
				  </div>
				</div>
	    );
	  }
  	else{
	    return(
	    	<div className=" card col-md-3 col-sm-4 col-lg-3 col-xl-3 d-inline-block m-2 mt-5 tarjeta">
	    		<button onClick={this.props.elim} type="button" className="close" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
				  <div className="card-body">
				    <h5 className="card-title">{this.props.nombre}</h5>
				    <p className="card-text">{this.props.nota}</p>
	    			<h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: {this.props.sexo}</h6>
				   	<span class="mb-4 badge float-right d-inline badge-success">{this.props.prioridad}</span>
				  </div>
				</div>
	    );
	  }
  };
}
export default Carta;