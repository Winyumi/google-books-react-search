import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <div className="navbar-nav">
        <a className="nav-link" href="/">Search</a>
        <a className="nav-link" href="/saved">Saved</a>
      </div>
    </nav>
  );
}

export default Nav;
