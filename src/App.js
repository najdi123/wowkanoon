import './App.css';
import './styles/customStyle.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
     <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/register" component={Register} />
     </Switch>
    </Router>
  );
}

export default App;
