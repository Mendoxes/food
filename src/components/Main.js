import React from 'react'
import hero from "../hero.jpg"
import '../Main.css';
import vid from "../vid.mp4"
import vid2 from "../vid2.mp4"
import Fade from 'react-reveal/Fade';
import { Button, Card } from 'react-bootstrap';


export default function Main() {

 
    
    return (
        <div className="heroDiv" >
            <div className="rela">
           <Fade delay={500}> <p className="text-on-image"> Food is everything</p></Fade>
            <Fade delay={200}><img className="heroImg" src={hero} /></Fade>
            
            </div>
          <Fade> 
              
              <h1 className="h1Prop">You are what you eat</h1>

              <hr className="hr"/>
               <div className="vid">

            <video className="videoClass" loop autoPlay muted>
  <source src={vid} type="video/mp4"/>
 
 
</video>

<div>
<p>"You are what you eat" that is profound sentence that everybody should take seriously</p>
<div style={{marginBottom:20}}> See our "recipes search" tool it will help you find dish you like:</div><Button href="/dishSelect" variant="outline-light"> Dish searching tool</Button>
          </div>
            </div>
            
            
            
            <div className="vid">



<div className="superC">
<p >An ideal daily intake of calories varies depending on age, metabolism and levels of physical activity, among other things. Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men. Make sure you are not suprassing it by checking our "Calorie-hunt" option</p>
<div style={{marginBottom:20}}> See our "Calorie-hunt"</div><Button href="/specific" variant="outline-light"> Calorie hunter</Button>
</div>
<video className="videoClass" loop autoPlay muted>
<source src={vid2} type="video/mp4"/>


</video>
</div>
            
            </Fade>
           
        </div>
    )
}
