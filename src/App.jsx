import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css'
import Home from '../src/components/Home';
import ProductDemo from '../src/components/ProductDemo';
import '../src/assets/fonts/Poppins-Regular.ttf';
import '../src/assets/fonts/Poppins-Medium.ttf';
import '../src/assets/fonts/Poppins-Bold.ttf';

function App() {

  return (
    <Router basename={'/'}>
      <div className="App">
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/home' element = {<Home />}/>
          <Route path='/product-preview' element = {<ProductDemo />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
