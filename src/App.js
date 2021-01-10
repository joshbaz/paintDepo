import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views';
import Policy from './views/policy';
import Products from './views/products';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/products" component={Products} exact />
      </Switch>
    </Router>
  );
}

export default App;
