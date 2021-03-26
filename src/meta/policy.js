import React from "react";
import { Helmet } from "react-helmet";

const PolicyMetaRoute = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="policy"
        content="This the policy page for Paint Depo"
      />

      <title>The Paint Depo | Policy </title>
    </Helmet>
  </div>
);

export default PolicyMetaRoute;
