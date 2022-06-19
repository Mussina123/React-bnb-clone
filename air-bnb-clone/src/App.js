import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import CardData from './data'
console.log(CardData)

 
export default function App() {

  const cards = CardData.map(item => {
  return (
    <Card 
      key = {item.id}
      item = {item}
     /> 
    )
  })


  return (
    <div className='App-container'>
          <Navbar />
          <Hero /> 
            <section className="cards-list">
                {cards}
            </section>
       
    </div>
  
  )
}
