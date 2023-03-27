import React from 'react';
// import logo from './logo.svg';
import logos from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div className="index_container">
   

    <section className="modal hidden">

      <button className="btn-close">⨉</button>
  
      <img src={logos} width="50px" height="50px" alt="logo" className="modal-logo"/>
    
      <div>
        <h3>Sign in to ShyType</h3>
      </div>
    
      <input type="email" id="email" placeholder="Email" />
      <input type="email" id="email" placeholder="Password" />
      <button className="btn modal-btn">Login</button>

      <button className="btn modal-btn2">Forgot Password?</button>

      <p>
        Have an Account Already? <a>Login</a>
      </p>
    </section>

    <div className="image">
      
      <img src = {logos} alt="My Happy SVG" className="big-bird"/>

    </div>

    <div className="content">


      <img src = {logos} alt="My Happy SVG" className="small-bird"/>

      <h1>Happening now</h1>
      <h3>Join ShyType today.</h3>


      
      <div className="button">
        <div className="overlay hidden"></div>
        <a href="#" className="btn btn-signup">Sign up</a>
        <a href="#" className="btn btn-login btn-open">Log in</a>
      </div>
    </div>

    <div className="footer">
      <nav>
        <a href="#">About</a>
        <a href="#">Help center</a>
        <a href="#">Terms of service</a>
        <a href="#">Privacy policy</a>
        <a href="#">Cookie policy</a>
        <a href="#">Blog</a>
        <a href="#">careers</a>
        <a href="#">brand resources</a>
        <a href="#">Advertising</a>
        <a href="#">Developers</a>
        <a href="#">Directory</a>
        <a href="#">Settings</a>
        <div>&copy; 2023 ShyType, NeoCakes</div>
      </nav>
    </div>
 
  </div>
  
  );
}

export default App;
