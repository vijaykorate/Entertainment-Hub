import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center shadow-sm">
        <h1 className="display-5 fw-bold">Welcome to Entertainment Hub 🎬</h1>
        <p className="lead">
          Explore Movies, Web Series, South Indian movies, and Anime all in one
          place.
        </p>
        <Link to="/movies" className="btn btn-primary btn-lg me-2">
          Movies 🌟
        </Link>
        <Link to="/web" className="btn btn-success btn-lg me-2">
          Web 🎥
        </Link>
        <Link to="/south" className="btn btn-warning btn-lg me-2">
          South Indian 🎬
        </Link>
        <Link to="/anime" className="btn btn-danger btn-lg">
          Anime 🎌
        </Link>
      </div>

      {/* Navigation Cards */}
      <div className="row text-center g-3 mb-4">
        <div className="col-6 col-md-3">
          <Link to="/movies" className="text-decoration-none">
            <div className="card h-100 shadow-sm hover-effect">
              <div className="card-body">
                <h5 className="card-title">Movies 🌟</h5>
                <p className="card-text">International blockbusters</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="/web" className="text-decoration-none">
            <div className="card h-100 shadow-sm hover-effect">
              <div className="card-body">
                <h5 className="card-title">Web 🎥</h5>
                <p className="card-text">Web Series</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="/south" className="text-decoration-none">
            <div className="card h-100 shadow-sm hover-effect">
              <div className="card-body">
                <h5 className="card-title">South Indian 🎬</h5>
                <p className="card-text">Tamil, Telugu, Malayalam, Kannada</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="/anime" className="text-decoration-none">
            <div className="card h-100 shadow-sm hover-effect">
              <div className="card-body">
                <h5 className="card-title">Anime 🎌</h5>
                <p className="card-text">Animation</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="p-4 bg-warning text-dark rounded shadow-sm text-center mb-4">
        <h4 className="mb-2">🎬 Explore Global Cinema!</h4>
        <p className="mb-3">
          Hollywood, Bollywood, South Indian cinema, and Anime – all in one
          place. Click below to navigate to your favorite section and discover
          top movies.
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-2">
          <Link to="/movies" className="btn btn-dark">
            Hollywood
          </Link>
          <Link to="/web" className="btn btn-dark">
            Web Series
          </Link>
          <Link to="/south" className="btn btn-dark">
            South Indian
          </Link>
          <Link to="/anime" className="btn btn-dark">
            Anime
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
