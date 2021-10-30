import React from 'react'
import hero from "../hero.jpg"
import '../Main.css';
import vid from "../vid.mp4"

export default function main() {
    return (
        <div className="heroDiv" >
            <img className="heroImg" src={hero} />
            <div>

            <video width="320" height="240"  loop autoPlay muted>
  <source src={vid} type="video/mp4"/>
 
  Your browser does not support the video tag.
</video>
            </div>
        </div>
    )
}
