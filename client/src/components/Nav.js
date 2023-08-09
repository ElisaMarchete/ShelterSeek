import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="Nav">
      {props.pages.map((page) => {
        return (
          <Link
            className={`Nav-button ${
              props.currentPage.name === page.name ? "active" : ""
            }`}
            key={page.name}
            to={page.path}
            onClick={() => props.setCurrentPage(page)}
          >
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
