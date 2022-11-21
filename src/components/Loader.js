import React from 'react';
import '../styles/styles.css'

/**this is my favorite component, and it serves to know how be charge the data*/

export default function Loader (props) {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",opacity:".5",position:"absolute",zIndex:"100"}} className="w100p h100p bg-fd">
            <div class="ct ct9">
                <div class="pt2-9">
                    <div class="crcl1-9">
                    </div>
                </div>
                <div class="crcl2-9"></div>
            </div>
        </div>
    );
    
}