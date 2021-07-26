import React from 'react'
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
const App=() => {
  return (
    <>
      <Navbar/>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/About'>
        <About/>
      </Route>

      <Route path='/Contact'>
        <Contact/>
      </Route>

      <Route path='/Login'>
        <Login/>
      </Route>

      <Route path='/Signup'>
        <Signup/>
      </Route>
    
    </>
  );
}

export default App
