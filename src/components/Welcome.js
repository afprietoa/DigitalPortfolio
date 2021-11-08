import React from 'react'
import antonio from '../assets/antonio.png'
import arrow_down from '../assets/arrow-down.png'

export const Welcome = () => {
    return (
       
            <section id="main-welcome" className="container-fluid pt-4 pb-4">

                <img className="antonio" src={antonio} alt="Antonio"/>
                <div className="intro text-start">
                <h1>Hello, everyone! <br/> I'am Antonio Pereira</h1>
                <p>Web Developer who loves to implement designs that inspire and attract people.</p>
                <br/><br/>
                <img className="arrow" src={arrow_down} alt=""/>
                </div>

            </section>
        
    )
}
