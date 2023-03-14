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
      <img alt="logo" src="https://th.bing.com/th/id/OIP.lvEdf-uOFukFJ2dRR9_2pgHaEK?pid=ImgDet&rs=1"/>
      <h2>Name: Burger King</h2>
      <h3>Location: Bangalore</h3>
      <h3>Rating: 4.4</h3>
    </div>
  )
}

const Body=()=>{
  return(
    <div className="res-cart">
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
      <RestaurentCard/>
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