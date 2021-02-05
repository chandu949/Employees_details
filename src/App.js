import logo from './logo.svg';
import './App.css';
import Employees from './Employees';
import Department from './Department';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <h2>Employees Details and their Projects</h2>
     
      <ul className="no-bullets"> 
         
          <li><Link className="remove-link-underline" to= '/Employees'>Employees</Link></li>
          <li><Link className="remove-link-underline" to= '/Department'>Departments</Link></li>
          <li><Link className="remove-link-underline" to= '/Projects'>Projects</Link></li> 
          
      </ul>

      <Route path= '/Employees'   component={Employees}></Route>
      <Route path= '/Department' component={Department}></Route>
      <Route path= '/Projects' component={Projects}></Route>
     
     
    </div>
    </Router>
  );
}

export default App;
