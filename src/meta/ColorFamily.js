import React from "react";
import { Helmet } from "react-helmet";

const ColorMetaRoute = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="color-family"
        content="The Paint Depo is a decorative paint company"
      />

      <title>The Paint Depo | ColorFamily </title>
    </Helmet>
  </div>
);

export default ColorMetaRoute;
