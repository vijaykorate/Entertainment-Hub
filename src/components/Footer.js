import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto pt-4 pb-3">
      <div className="container">
        {/* Site Info / Navigation Links */}
        <div className="row mb-3 text-center text-md-start">
          <div className="col-6 col-md-3 mb-2">
            <h6 className="fw-bold">About Us</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Entertainment Hub
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-2">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-2">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-2">
            <h6 className="fw-bold">Newsletter</h6>
            <p className="small">
              Subscribe to get the latest updates and offers.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control form-control-sm me-2"
                placeholder="Email"
              />
              <button
                type="submit"
                className="btn btn-warning btn-sm text-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-2">
          <a href="#" className="text-white me-3 fs-5">
            🌐
          </a>
          <a href="#" className="text-white me-3 fs-5">
            📘
          </a>
          <a href="#" className="text-white me-3 fs-5">
            🐦
          </a>
          <a href="#" className="text-white fs-5">
            ▶️
          </a>
        </div>

        {/* Back to Top */}
        <div className="text-center mb-2">
          <a href="#top" className="btn btn-sm btn-warning text-dark">
            Back to Top ↑
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center small text-muted">
          © 2025 Amazon Clone | Made with ❤️ by You
        </div>
      </div>
    </footer>
  );
}

export default Footer;
