import React from 'react'
import { useRef,useState,useCallback,useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import "./MakeRec.css"

export default function MakeRec({prop, state}) {
    console.log(prop)
    console.log(state)
    const variant =[
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
'light',
'dark',
]

    const MakeRecs = function (){
        const arr = []
            for (let i = 0 ; i<=prop.length-1; i++){


               if (prop[i].recipe.calories<=state){
            arr.push(<Card 
            
            bg="light"
        
            text="dark"
            style={{ width: '18rem' }}
            className="mb-2">
                <Card.Header ></Card.Header>
                <Card.Body >
                <Card.Img variant="top" src={prop[i].recipe.image} />
                  <Card.Text >
                    <p> Name: {prop[i].recipe.label}</p>
                <p>Kcal: {Math.floor(prop[i].recipe.calories)}</p>
                
              {/* <p>Dish type: {hit[i].recipe.dishType[0]}</p> */}
        <Button  href={prop[i].recipe.url} variant="dark">See full recipe</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            }
            return arr.map((ar)=> <div>{ar}</div>)
        
        }


    return (
        <div>
            <div className="main_component">
            <MakeRecs></MakeRecs></div>
        </div>
    )
}
