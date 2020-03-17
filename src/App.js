import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Header from './components/Header'
import About from './components/About'
import './App.css'

let name = 'Nok'

const App = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <Header person= {name}/>

      <div className="container">
        <div className="row">
         <About />     
    </div>
    </div>
    </div>
  )
}

export default App;
