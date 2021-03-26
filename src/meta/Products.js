import React from "react";
import { Helmet } from "react-helmet";

const ProductsMetaRoute = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="products"
        content="The Paint Depo is a decorative paint company"
      />

      <title>The Paint Depo | Products </title>
    </Helmet>
  </div>
);

export default ProductsMetaRoute;
