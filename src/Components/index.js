import React from 'react'
import Collection from './Collection'
import Design from './Design'
import Footer from './Footer'
const Index = () => {
  return (
    <div>
      <div>{<Collection/>}</div>
        <div> {<Design/>}</div>
       <div> {<Footer/>}</div>
       
    </div>
  )
}

export default Index