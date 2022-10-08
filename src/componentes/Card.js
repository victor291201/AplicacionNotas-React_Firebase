import React,{Component} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/styles.css'
import DropDown from './DropDown';

class Card extends Component{
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
  	if(this.props.prioridad === "Alta"){
	    return(
	    	<div className="card d-inline-block"style={{height:"100%"}}>
				{this.state.view?<DropDown/>:null}
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2 CPointer" onClick={this.toggle}></i>
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
				{this.state.view?<DropDown/>:null}
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2 CPointer" onClick={this.toggle}></i>
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
				{this.state.view?<DropDown/>:null}
				<div className="card-body">
					<i class="bi bi-three-dots d-flex float-right mt-n2 CPointer" onClick={this.toggle}></i>
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