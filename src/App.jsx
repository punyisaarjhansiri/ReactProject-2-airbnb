import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/card"
import data from './data'

export default function App() {

  const cards = data.map(item => {
    return (
        <Card 
            id={item.id}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
           // {...item}
        />
    )
})        

    return (
      <div>
        <Navbar />
        <Hero />
        <section className="card--list">
          {cards}
        </section>
       
      </div>
    )
}