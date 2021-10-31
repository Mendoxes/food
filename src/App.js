
import NavBar from "./components/NavBar.js"
import './App.css';
import Hero from "./components/Hero.js"
import Main from "./components/Main.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Specific from "./components/Specific.js"


function App() {
  const ok = 12;
  return (
    <div className="App">
      <NavBar ok={ok}/>
      <Router>
      <Route exact path="/">
      <Main></Main>
      </Route>
      <Route path="/specific">
      <Specific></Specific>
      </Route> 
      <Route path="/dishSelect">
      <Hero></Hero>
          </Route>

  
     </Router>
    </div>
  );
}

export default App;
