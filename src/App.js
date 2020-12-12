import './App.css';
import './styles/customStyle.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
     <Switch>
         <Route exact path="/" component={Home} />
     </Switch>
    </Router>
  );
}

export default App;
