import { useEffect, useState } from "react";
import mainLogo from './hyer.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import barcelona from './barcelona.avif'
import ibiza from './ibiza.avif'
import cannes from './cannes.avif'
import paris from './paris.avif'
import flight from './flight.png'
import axios from 'axios';
import './app.css'

function App(){
  const[photo,setPhoto]=useState(barcelona)

  const [quote,setQuote]=useState('')
  const [author,setAuthor]=useState('')

  const quoteApi= async ()=>{ 
    let arrayOfQuotes=[];
    try{
      const data=await axios.get("https://api.quotable.io/random")
      arrayOfQuotes=data.data
      console.log(arrayOfQuotes)
      
    }catch(err){
      console.log("error")
    }

     try {
      setQuote(arrayOfQuotes.content)
      setAuthor(arrayOfQuotes.author)
     } catch (error) {
      console.log("error")
     }
  }


  useEffect(()=>{
    quoteApi()
  },[])


  return <>
  <div className="home">
    <div className="leftSide">
      <img src={mainLogo} />
      <h4 className="text2">More flexibility, freedom and choice!</h4>
    </div>
    <div className="rightSide">
      <a href="google" id="link1">Solutions</a>
      <a href="google" id="link2">About Us</a>
      <a href="google" id="link3">Contact</a>
      <h2 id="text1">Personalised Aviation</h2>

      <button className="btn1">Book an Aircraft</button>
      <button className="btn2">Book a shared flight</button>
    </div>
  </div>
  <div className="card2">
    <div className="detail">
    <h2>We believe that in a world where passengers have become numbers, a personal approach is key to ensure you get the most out of your flying experience.</h2>
    </div>
    <br/>
    <br/>
    <div className="detail2">
      <div className="colm1">
        <h2>Flexible Solutions</h2>
        <div>
          <p>Stop depending on airlines. Fly on your own terms or join our exclusive shared flights.</p>
          <br/>
          <h2>Smart Quotes</h2>
        <div>
          <p>Know what you are paying for. No hidden fees. No overpromises. Flights suitable for your needs.</p>
</div>
          
        </div>
        <br/><br/>
      </div>
      <div className="colm2">
        <h2>Fully Customizable</h2>
        <div>
          <p>Control all aspects of your journey. Easily upgrade services with our add-ons.</p>
          <br/><br/>
          <h2>Personalization</h2>
        <div>
          <p>Receive full support of our Flight Management service. We have you covered, anywhere.</p>
</div>
<br/><br/>
          
        </div>
      </div>
    </div>
  </div>
  <div className="card3">
    <a href="#"><img className="images" src={img1} /></a>
   
    <a href="#"><img className="images" src={img2} /></a>
    <a href="#"><img className="images" src={img3} /></a>
  </div>
  <br/><br/>
  <h1 id="heading">Popular Destinations</h1>
  <div className="card4">
    
    <div className="leftImage">
      <img id="destination" src={photo} />
    </div>
    <div className="rightCard">
      <div className="cards">
        <div className="barc" onMouseOver={()=>setPhoto(barcelona)}>
          <h2>Barcelona (GOR)</h2>
          <br />
          <br />
          <p>Spain</p>
        </div>
        
        <div className="barc" onMouseOver={()=>setPhoto(ibiza)}>
          <h2>Ibiza (IBZ)</h2>
          <br /><br />
          <p>Spain</p>
        </div>
        
      </div>
      <div className="cards2">
        <div className="barc" onMouseOver={()=>setPhoto(cannes)}>
          <h2>Cannes (CEQ)</h2>
          <br /><br />
          <p>France</p>
        </div>
        <div className="barc" onMouseOver={()=>setPhoto(paris)}>
          <h2>Paris (LBG)</h2>
          <br /><br />
          <p>France</p>
        </div>
        </div>
      
    </div>
  </div>
  <div className="card5">
    <img id="flights" src={flight} />
  </div>
  <div className="card6">
    <h2>What are you waiting for?</h2> 
    <a id="links" href="">Book a flight</a>
  </div>

  <div className="apii">
    <h2>Quote Place</h2>
    <div className="quoteBox">
      <div className="containers">
        <div className="quoteButton">
        <button onClick={quoteApi}>Give a new Quote</button>
        </div>
        <div className="quote">{quote}</div>
        <div className="author">-{author}</div>
      </div>
    </div>
    
    
    
  </div>
  
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Flight Bookings</a></li>
  	 				<li><a href="#">Catalogue</a></li>
  	 				<li><a href="#">Flight status</a></li>
  	 				<li><a href="#">Payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>My Account</h4>
  	 			<ul>
  	 				<li><a href="#">Login</a></li>
  	 				<li><a href="#">Register</a></li>
  	 				<li><a href="#">Dashboard</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#">F</a>
  	 				<a href="#">T</a>
  	 				<a href="#">I</a>
  	 				<a href="#">L</a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  </>
}


export default App;