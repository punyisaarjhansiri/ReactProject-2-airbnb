import React from "react";
import img from '../src/assets/photo-grid.png'

export default function Hero(){
   return( <section className="hero">
        <img src ={img} className="hero--photo"/>
        <h1 className="hero--head">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
   )
}