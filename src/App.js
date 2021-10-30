
import NavBar from "./components/NavBar.js"
import './App.css';
import Hero from "./components/Hero.js"
import Main from "./components/main.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const ok = 12;
  return (
    <div className="App">
      <NavBar ok={ok}/>
      <Router>
      <Route exact path="/">
      <Main></Main>
      </Route> 
      <Route path="/dishSelect">
      <Hero></Hero>
          </Route>

  
     </Router>
    </div>
  );
}

export default App;
