import React from 'react';
import home from '../../assets/home2.jpg'
import objetivo from '../../assets/objetivos.jpg'

export default function Home() {
    return(
        <div className="home-container">
            <img src={home} id="home" alt="home" />
            <img src={objetivo} id="objetivo" alt="objetivo" />
        </div>
        
    )
}