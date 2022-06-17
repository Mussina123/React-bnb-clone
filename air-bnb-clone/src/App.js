import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Profilepic from './images/Athlete-1.png' 
import CardData from './data'
console.log(CardData)

 
export default function App() {

  const cards = CardData.map(item => {
  return (
    <Card 
      img = {item.coverImg}
      rating = {item.stats.rating}
      title = {item.title}
      location = {item.location}
      price = {item.price}
      reviewCount = {item.stats.reviewCount}
     /> 
    )
  })


  return (
    <div className='App-container'>
      <Navbar /> 
      {cards}
    
    </div>
  
  )
}
