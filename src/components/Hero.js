import React from 'react'
import axios from "axios"
import {useState, useCallback,useEffect} from "react"
import '../Hero.css';
import { Button, Card } from 'react-bootstrap';


export default function Hero() {

const [state,setState]=useState("") //state that manage names of a dish from inputed component. 
const [check,setCheck]=useState();
const [ings,setIngs]= useState("Egg")
const [recep, setRecep]= useState("Egg%20Bread")
const [hit,setHit]=useState("Egg%20Bread")
const input = document.getElementById("input")
const [pass,setPass]=useState(false)
const [pass2,setPass2]=useState(false)
const [refa,setRefa]=useState("")
const [refa2,setRefa2]=useState("")
const [show,setShow]=useState(false)

const variant =['primary',
'secondary',
'success',
'danger',
'warning',
'info',
'light',
'dark',
'primary',
'secondary',
'success',
'danger',
'warning',
'info',
'light',
'dark',
'primary',
'secondary',
'success',
'danger',
'warning',
'info',
'light',
'dark',]




//fetching dish names data from API
//     const fetchData = useCallback(async ()=>
//     {
      
        
//         const result = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=989c9281&app_key=6f4221435f96439aa922b68dc0ad091c&ingr=${ings}&nutrition-type=cooking&category=generic-meals`);
//     setState(result.data.hints)
  
  
// })


const fetchData2 = useCallback(async ()=>
{
  
    
    const result3 = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${ings}&app_id=acdf9e4f&app_key=%203bc718c297818043b6843d3d9875b3ec`);
console.log(result3.data.hits)
setRefa(result3.data._links.next.href)
setHit(result3.data.hits)
})


const fetchData3= useCallback(async ()=>
{
    const result4 = await axios.get(refa);
    // console.log(result4)
    setRefa2(result4.data.hits)
    // console.log(result4.data)

}
   
)

function postData(e){
    // console.log(e.target.id.replace(/ /g, '%20'))
    setPass(true)
//     axios({
//     method: 'post',
//     url: 'https://api.edamam.com/api/food-database/v2/nutrients?app_id=989c9281&app_key=6f4221435f96439aa922b68dc0ad091c',
//     data:{
//         "ingredients": [
//           {
//             "quantity": 1,
//             "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
//             "foodId": e.target.id
//           }
//         ]
//       }
//   }).then((response) => {
//     console.log(response);
//   }, (error) => {
//     console.log(error);
//   });


setRecep(e.target.id.replace(/ /g, '%20'))

}



useEffect(() => {
    fetchData2()
}, [recep])

//fetching data when input of required ingreedience change
useEffect(() => {
    fetchData2()
}, [ings])

useEffect(() => {
    fetchData3()
}, [refa])


//displaying data from api


const MakeRec = function (){
const arr = []
    for (let i = 0 ; i<=hit.length-1; i++){
    arr.push(<Card 
    
    bg={variant[i]}

    text={variant[i] === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2">
        <Card.Header ></Card.Header>
        <Card.Body >
        <Card.Img variant="top" src={hit[i].recipe.image} />
          <Card.Text >
            <p> Name: {hit[i].recipe.label}</p>
        <p>Kcal: {Math.floor(hit[i].recipe.calories)}</p>
        
      {/* <p>Dish type: {hit[i].recipe.dishType[0]}</p> */}
<Button  href={hit[i].recipe.url} variant={variant[i+3]}>See full recipe</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    )
    }
    return arr.map((ar)=> <div>{ar}</div>)

}



const MakeRecN = function (){
    const arr = []
        for (let i = 0 ; i<=refa2.length-1; i++){
    arr.push(<Card 
        
        bg={variant[i]}
    
        text={variant[i] === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2">
            <Card.Header ></Card.Header>
            <Card.Body >
            <Card.Img variant="top" src={refa2[i].recipe.image} />
              <Card.Text >
                <p> Name: {refa2[i].recipe.label}</p>
           <p> Kcal: {Math.floor(refa2[i].recipe.calories)}</p>
           {/* <p>Dish type: {refa2[i].recipe.dishType[0]}</p> */}
    <Button  href={refa2[i].recipe.url} variant={variant[i+3]}>See full recipe</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        )
        }
        return arr.map((ar)=> <div>{ar}</div>)
    
    }




    



//setting value from input field to Api call
    function handleSubmit(event){

        setPass(true)
      
if(input.value !=null ){
        setIngs(input.value.replace(/ /g, '%20'))}
    else{console.log("null")}
    }
    //allowing enter to submit api call 
    const handleKeypress = e => {
      
       
      if (e.code === "Enter") {
        handleSubmit();
      }
    };

    function hap(){
setShow(true)

    }

    function backMe(){
        setPass(false)
        setShow(false)
    }
    


    return (
        <div onKeyPress={handleKeypress}>
            
            {/* {state} */}
            

            {!pass&&<form >
  <label>
    Name:
    <input id="input"  name="name"  defaultValue=""/>
    {/* fixing a bug where input auto-submit to path after clicking enter */}
    <input type="text" style={{display: "none"}} />   
   
  </label>


</form>}
{!pass&&<button onClick={handleSubmit}  >Click me</button>}

<div className="main_component">
{/* {!pass&&pass2&&<MakeList></MakeList>} */}
{pass&&!show&&<MakeRec></MakeRec>}
{show&&<MakeRecN></MakeRecN>}


</div>
{pass&&!show&&<Button onClick={hap} variant="primary" >See more</Button>}
<Button onClick={() => window.location.reload(false)} >Back to Search</Button>
{/* <button onClick={postData}>POST DATA</button>
<button onClick={fetchData2}>fetch data 2</button> */}

        </div>
    )
}


