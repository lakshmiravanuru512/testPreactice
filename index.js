import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"


const Title=()=>(  
<a href="/">
<img 
alt="logo"
src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" className="logo"/>
</a>)


const Header=()=>{
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
  )
}

const RestaurentCard=()=>{
  return(
    <div className="card">
      <img alt="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/6f0945b8b18d9f4241dd1cd9a70e23d7"/>
      <h2>Burger King</h2>
      <h3>4.4</h3>
    </div>
  )
}

const Body=()=>{
  return(
    <div>
      <RestaurentCard/>
    </div>
  )
}

const Footer=()=>{
  return(
    <h2>Footer</h2>
  )
}

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);