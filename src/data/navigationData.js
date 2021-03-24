import { RiArrowDownSLine } from "react-icons/ri";
import React from "react";

export const NavData = [
  {
    title: "HOME",
    Checkpath: true,
    path: "/",
  },

  {
    title: "PRODUCTS",
    Checkpath: false,
    icon: <RiArrowDownSLine />,
    subNav: [
      {
        title: "INTERIOR PAINTS",
        path: "/product/interior",
      },
      {
        title: "EXTERIOR PAINTS",
        path: "/product/exterior",
      },
      {
        title: "DECORATIVE PAINTS",
        path: "/product/decorative",
      },
      {
        title: "SILK PLASTER",
        path: "/product/silkplaster",
      },
    ],
  },
  {
    title: "GALLERY",
    path: "/gallery",
    Checkpath: true,
  },

  {
    title: "OUR STORY",
    path: "#",
    Checkpath: true,
  },
  {
    title: "CONTACT US",
    path: "/contact",
    Checkpath: true,
  },
];

export const NavMobileData = [
  {
    title: "Services",
    path: "#",
    Checkpath: false,
    icon: <RiArrowDownSLine />,
    subNav: [
      {
        title: "Design & Development",
        subtitle: "Start your next project with us.",
        path: "/services",
      },
      {
        title: "Brand Design",
        subtitle: "Get a customized logo",
        path: "/branding",
      },
      {
        title: "Ecommerce",
        subtitle: "Expand your online business with us.",
        path: "/ecommerce",
      },
    ],
  },

  {
    title: "Inspiration",
    path: "#",
    Checkpath: false,
    icon: <RiArrowDownSLine />,
    subNav: [
      {
        title: "Web Portfolio",
        subtitle: " See our website or mobile app",
        path: "/work",
      },
      {
        title: "Logo Portfolio",
        subtitle: "Brands we have worked on.",
        path: "/visual",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    Checkpath: true,
  },

  {
    title: "Contact",
    path: "/contact",
    Checkpath: true,
  },
  {
    title: "Resources",
    path: "/resources",
    Checkpath: true,
  },
];
