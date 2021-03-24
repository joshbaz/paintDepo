import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views";
import Policy from "./views/policy";
import Products from "./views/products";

import ColorFamily from "./views/colorChart";
import ProductsLists from "./views/productLists";
import SubColor from './views/subcolor'
import Contact from "./views/contact";
import Faq from "./views/Faq";
import Gallery from './views/Gallery';
import GlobalStyle from "./globalStyles";
import ScrollTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import { createBrowserHistory } from "history";

function App() {
  const [windowloading, setwindowloading] = useState(false);
const history = createBrowserHistory();
   useEffect(() => {
     if (document.readyState === "loading") {
       setwindowloading(true);
     } else if (document.readyState === "interactive") {
       setwindowloading(true);
     } else if (document.readyState === "complete") {
       setwindowloading(false);
     }
   }, []);

     const loadedHandler = () => {
       if (document.readyState === "loading") {
         setwindowloading(true);
       } else if (document.readyState === "interactive") {
         setwindowloading(true);
       } else if (document.readyState === "complete") {
         setwindowloading(false);
       }
     };

     document.addEventListener("readystatechange", loadedHandler);

     //reload page
     
  return (
    <>
      {windowloading && <Loader />}
      {!windowloading && (
        <Router forceRefresh={true}>
          <ScrollTop />
          <GlobalStyle />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/policy" component={Policy} exact />
            <Route path="/products" component={Products} />
            <Route path="/colorfamily" component={ColorFamily} exact />
            <Route path="/colorfamily/:id" component={SubColor} />
            <Route path="/product/:item" component={ProductsLists} />
          
            <Route path="/contact" component={Contact} exact />
            <Route path='/gallery' component={Gallery} exact />
            <Route path="/FAQ" component={Faq} exact />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
