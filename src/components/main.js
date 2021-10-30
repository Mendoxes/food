import React from 'react'
import hero from "../hero.jpg"
import '../Main.css';

export default function main() {
    return (
        <div className="heroDiv" >
            <img className="heroImg" src={hero} />
        </div>
    )
}
