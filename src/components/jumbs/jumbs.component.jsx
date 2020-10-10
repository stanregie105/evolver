import React from 'react';
import './jumbs.styles.scss';

const Jumb=()=>{
    return(
        <div className='jumper'>
             <hr/>
            <ul className='jumper-root'>
                <li className='jumper-childr'><span className='jumpc'>LIGHTING EXPLORER </span></li>
                <li className='jumper-childr'><span className='jumpc'>OFFICE</span></li>
                <li className='jumper-childr'> <span className='jumpc'>HOTEL</span></li>
                <li className='jumper-childr'><span className='jumpc'> HOME</span></li>
                <li className='jumper-child'><span className='jumpc'> ALL PRODUCTS</span></li>
                <li className='jumper-child'> <span className='jumpc'>PENDANT LIGHTS</span></li>
                <li className='jumper-child'><span className='jumpc'> CHANDELIER</span></li>
                <li className='jumper-child'><span className='jumpc'> SWITCHES AND SOCKETS</span></li>
                <li className='jumper-child'> <span className='jumpc'>CEILING LAMP</span></li>
                <li className='jumper-child'><span className='jumpc'> WALL LAMP</span></li>
            </ul>
        </div>
    )
}

export default Jumb;