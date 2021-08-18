import '../index.css';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';
  import Menu from './Menu';
  import Contact from './Contact';
  import OrderHere from './OrderHere';

function Header() {
  return (
  
  <>
      <h1>Ally's Food and Sweets</h1>

     


      <Router>
         <ul>
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/menu">Menu</Link></li>
  <li><Link to="/OrderHere">Order Here</Link></li>
  <li><Link to="/contact">Contact</Link></li>
       </ul>

       <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/OrderHere">
            <OrderHere />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
  

</>
  );
}

export default Header;
