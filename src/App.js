import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views';
import Policy from './views/policy';
import Products from './views/products';
import ProductInterior from "./views/productInterior";
import ProductExterior from "./views/productExterior";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/interior" component={ProductInterior} exact />
        <Route path="/products/exterior" component={ProductExterior} exact />
      </Switch>
    </Router>
  );
}

export default App;
