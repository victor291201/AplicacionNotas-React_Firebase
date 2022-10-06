import React,{Component} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

class Card extends Component{
  render(){
  	if(this.props.prioridad === "Alta"){
	    return(
	    	<div className="card d-inline-block"style={{height:"100%"}}>
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2"></i>
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text" style={{height:80,overflowY:"auto"}}>{this.props.description}</p>
					<p className="card-subtitle  text-muted d-inline">{this.props.fecha} </p>
					<p className="card-subtitle  text-muted d-inline">{this.props.hora} </p>
					<br/>
					<p className="card-subtitle  text-muted d-inline">{this.props.autor}</p>
					<span class="badge mt-1 float-right badge-danger">{this.props.prioridad}</span>
				</div>
			</div>
	    );
	  }
  	if(this.props.prioridad === "Media"){
	    return(
	    	<div className="card d-inline-block"style={{height:"100%"}}>
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2"></i>
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text" style={{height:80,overflowY:"auto"}}>{this.props.description}</p>
					<p className="card-subtitle  text-muted d-inline">{this.props.fecha} </p>
					<p className="card-subtitle  text-muted d-inline">{this.props.hora} </p>
					<br/>
					<p className="card-subtitle  text-muted d-inline">{this.props.autor}</p>
					<span class="badge mt-1 float-right badge-warning">{this.props.prioridad}</span>
				</div>
			</div>
	    );
	  }
  	else{
	    return(
	    	<div className="card d-inline-block"style={{height:"100%"}}>
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2"></i>
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text" style={{height:80,overflowY:"auto"}}>{this.props.description}</p>
					<p className="card-subtitle  text-muted d-inline">{this.props.fecha} </p>
					<p className="card-subtitle  text-muted d-inline">{this.props.hora} </p>
					<br/>
					<p className="card-subtitle  text-muted d-inline">{this.props.autor}</p>
					<span class="badge mt-1 float-right badge-success">{this.props.prioridad}</span>
				</div>
			</div>
	    );
	  }
  };
}
export default Card;