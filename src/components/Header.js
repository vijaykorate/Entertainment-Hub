import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top py-3">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand fw-bold" to="/">
          Entertainment Hub
        </Link>

        <form className="d-flex flex-grow-1 mx-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search movies..."
            aria-label="Search"
          />
          <button className="btn btn-warning text-dark" type="submit">
            Search
          </button>
        </form>

        <div className="d-flex align-items-center">
          <Link className="nav-link text-white me-3" to="/movies">
            Movies
          </Link>
          <Link className="nav-link text-white me-3" to="/web">
            Web Series
          </Link>
          <Link className="nav-link text-white me-3" to="/south">
            South Indian
          </Link>
          <Link className="nav-link text-white me-3" to="/anime">
            Anime
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
