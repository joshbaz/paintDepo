import React from "react";
import { Helmet } from "react-helmet";

const GalleryMetaRoute = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="gallery"
        content="The Paint Depo is a decorative paint company"
      />

      <title>The Paint Depo | Gallery </title>
    </Helmet>
  </div>
);

export default GalleryMetaRoute;
