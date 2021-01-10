import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views';
import Policy from './views/policy';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/policy" component={Policy} exact />
      </Switch>
    </Router>
  );
}

export default App;
