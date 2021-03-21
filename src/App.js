import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views";
import Policy from "./views/policy";
import Products from "./views/products";
import ProductInterior from "./views/productInterior";
import ProductExterior from "./views/productExterior";
import ColorFamily from "./views/colorChart";
import Contact from "./views/contact";
import Faq from "./views/Faq";
import GlobalStyle from "./globalStyles";
import ScrollTop from "./components/ScrollToTop";
import Loader from "./components/Loader";


function App() {
  const [windowloading, setwindowloading] = useState(false);

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
    <Router forceRefresh={true}>
      {windowloading && <Loader />}
      <ScrollTop />
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home}  exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/colorfamily" component={ColorFamily} exact />
        <Route path="/interior" component={ProductInterior} exact />
        <Route path="/exterior" component={ProductExterior} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/FAQ" component={Faq} exact />
      </Switch>
    </Router>
  );
}

export default App;
