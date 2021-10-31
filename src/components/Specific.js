import React from 'react'
import { useRef,useState,useCallback,useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Specific.css"
import axios from "axios"
import MakeRec from './MakeRec';
export default function Specific() {
   

    const inputEl = useRef(null);
   

    const ing = useRef("Egg")
    const [state,setState]=useState(1000)
    const [type,setType]=useState("Breakfast")
    const [maxInp,setMaxInp]=useState(1000)
    const [ingS,setIngS]=useState("Egg")
    const [tru,setTru]=useState(false)
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        // console.log(inputEl.current.value)
       setState(inputEl.current.value)
    //    console.log(document.getElementById("cars").value)
       setType(document.getElementById("cars").value)
  
       setIngS(ing.current.value)

       setTru(true)
      };

      const fetchData = (async ()=>
{
  
    
    const result3 = await axios.get(` https://api.edamam.com/api/recipes/v2?type=public&q=${ingS}&app_id=acdf9e4f&app_key=%203bc718c297818043b6843d3d9875b3ec&mealType=${type}`);

setMaxInp(result3.data)
})



function ok(){

    console.log(maxInp)
}

useEffect(() => {
    fetchData()
   
}, [ingS])

useEffect(() => {
ok()
}, [maxInp])


function ok2(){
for (let i = 0; i<=maxInp.hits.length -1; i++){
// console.log(maxInp.hits[i].recipe.calories +"ok" + state)
    if (maxInp.hits[i].recipe.calories<=state){
    console.log(maxInp.hits[i].recipe.calories)}}


}

    return (<div>
        <div className="main1" >
            <div>
           
            <label for="inp1">Max kcal:  </label>
            <input id="inp1" type="number" ref={inputEl} required placeholder="example: 1000" />
      <Button variant="light" onClick={onButtonClick}>Calorie input</Button>
     </div>
<div className="cars">
      <label for="cars">Choose type of meal:</label>

<select id="cars">
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Snack">Snack</option>
  <option value="Teatime">Teatime</option>
</select></div>

<h5>Choose your favorite ingreedient</h5>
<input type="text" ref={ing} placeholder="example: avocado" />
{/* <div>
<button onClick={ok2}> on click</button>

</div> */}
</div>
{tru&&<MakeRec prop={maxInp.hits} state={state}></MakeRec>}

        </div>
    )
}
