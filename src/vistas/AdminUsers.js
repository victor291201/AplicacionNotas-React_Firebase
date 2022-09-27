import React from 'react';

export default function TareasE (props) {
    return (
        <div className='container-fluid' style={{height:"100vh"}}>
            <div className='row' style={{height:"100vh"}}>
                <div className='col-md-12 py-5 px-4' style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridAutoRows:"200px",gridGap:"20px"}}>
                    
                    
                    <div className="d-flex justify-content-center align-items-center"style={{height:"100%"}}>
                        <div className="bg-light d-flex justify-content-center align-items-center" style={{width:70,height:70,borderRadius:"50%"}}>+</div>
                    </div>
                    <div className="card d-inline-block"style={{height:"100%"}}>
                        <button onClick={()=>alert("hello")} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        <div className="card-body">
                            <h5 className="card-title">prueba</h5>
                            <p className="card-text">prueba</p>
                            <h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: prueba</h6>
                            <span class="mb-4 badge float-right d-inline badge-warning">prueba</span>
                        </div>
                    </div>
                    <div className="card d-inline-block"style={{height:"100%"}}>
                        <button onClick={()=>alert("hello")} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        <div className="card-body">
                            <h5 className="card-title">prueba</h5>
                            <p className="card-text">prueba</p>
                            <h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: prueba</h6>
                            <span class="mb-4 badge float-right d-inline badge-warning">prueba</span>
                        </div>
                    </div>
                    <div className="card d-inline-block"style={{height:"100%"}}>
                        <button onClick={()=>alert("hello")} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        <div className="card-body">
                            <h5 className="card-title">prueba</h5>
                            <p className="card-text">prueba</p>
                            <h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: prueba</h6>
                            <span class="mb-4 badge float-right d-inline badge-warning">prueba</span>
                        </div>
                    </div>
                    <div className="card d-inline-block"style={{height:"100%"}}>
                        <button onClick={()=>alert("hello")} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        <div className="card-body">
                            <h5 className="card-title">prueba</h5>
                            <p className="card-text">prueba</p>
                            <h6 className="card-subtitle mb-2 text-muted d-inline">Sexo: prueba</h6>
                            <span class="mb-4 badge float-right d-inline badge-warning">prueba</span>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}