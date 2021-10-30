import React from 'react'
import hero from "../hero.jpg"
import '../Main.css';
import vid from "../vid.mp4"
import Fade from 'react-reveal/Fade';
import { Button, Card } from 'react-bootstrap';

export default function main() {
    
    return (
        <div className="heroDiv" >
            <div className="rela">
           <Fade delay="500"> <p className="text-on-image"> Food is everything</p></Fade>
            <Fade delay="200"><img className="heroImg" src={hero} /></Fade>
            
            </div>
          <Fade> 
              
              <h1 className="h1Prop">You are what you eat</h1>
               <div className="vid">

            <video className="videoClass" loop autoPlay muted>
  <source src={vid} type="video/mp4"/>
 
 
</video>

<div>
<p>"You are what you eat" that is profound sentence that everybody should take seriously</p>
<div style={{marginBottom:20}}> See our "recipes search" tool it will help you find dish you like:</div><Button href="/dishSelect" variant="outline-light"> Dish searching tool</Button>
          </div>
            </div></Fade>
        </div>
    )
}
