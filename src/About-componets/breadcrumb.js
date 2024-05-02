import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div style={{ display: "flex" }}>
      {location.pathname === "/" ? null : <Link to="/home" className="breadcrumb-link"><i className="fa-solid fa-house">&nbsp;</i>Home</Link>}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={index}>
            {last ? (
              <span  className="breadcrumb-active" key={to}> &nbsp;&nbsp;<i className="fa-solid fa-minus"></i> &nbsp; {value}</span>
            ) : (
              <span key={to}> 
                &nbsp;&gt; <Link to={to} >{value}</Link>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;