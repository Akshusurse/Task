import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App () {
  return (
    <Router>
       <div className="App">
      <Routes> 
      <Route exact path="/login" element={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/home" component={Home} />
      
      </Routes>
      </div>
      
      
    </Router>
  )
}

export default App
