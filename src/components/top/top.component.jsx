import React from 'react';
import './top.styles.scss';

const Top=()=>{
    return(
        <div className='topper clearfix'>
            <ul className='topper-root'>
                <li className='topper-child'> <i class="fa fa-phone fa-lg"></i>: +234 8026783787</li>
                <li className='topper-child'><i class="fas fa-burn"></i>  33, Freedom way, Lekki-phase 1, Nigeria</li>
                <li className='topper-child'><i class="fa fa-envelope fa-lg"></i> sales@thelightinghouse.com</li>
            </ul>
           
        </div>
    )
}

export default Top;