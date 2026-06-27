import React from "react";
import { Outlet } from "react-router-dom";

// Dark navy theme shell for every page except home.
// (The scroll-reveal engine was removed: it gated content visibility behind an
// observer, which left above-the-fold areas blank on load. Content now renders
// immediately; tasteful entrance motion still lives on individual components.)
const InnerLayout = () => (
  <div className="inner-page">
    <Outlet />
  </div>
);

export default InnerLayout;
