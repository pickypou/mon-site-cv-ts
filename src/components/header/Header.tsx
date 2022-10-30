import * as React from 'react';
import './header.css'
import ludo from './ludo-2.4.png'


export function Header() {
    return(
        <div className='header'>
          
            <div className='container-img-ludo'>
                <img className="img-ludo" src={ludo} alt='une photo de moi'/>
            </div>

            <div className='presentation-container'>
                <h3 className='presentation'>Je suis</h3> 
            </div>
           
            <p className='nom'>spysschaert ludovic</p>
            

        </div>
    );
}