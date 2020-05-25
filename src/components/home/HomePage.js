import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>PluralSight Adminstration</h1>
    <p>React, Redux and React Router for the ultra-responsive web apps</p>
    <Link to="/about" className="btn btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
