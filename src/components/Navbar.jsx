import { Link, NavLink, useLocation } from "react-router-dom";
import headerImg from "../assets/images/bg.jpeg";
import langImg from "../assets/images/lang.SVG";
import { useState, useEffect } from "react";
import Language from "./Language";

const Navbar = ({ onButtonClick }) => {
  const location = useLocation();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Photos");
  const [inputValue, setInputValue] = useState("");
  const [fix, setFix] = useState(false);

  useEffect(() => {
    if (location.pathname === "/videos") {
      setSelectedOption("Videos");
    } else {
      setSelectedOption("Photos");
    }
  }, [location.pathname]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onButtonClick(inputValue);
  };

  const setFixed = () => {
    if (window.scrollY >= 500) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);

    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <nav
        className={
          fix
            ? "navbar fixed navbar-expand-lg sticky-top"
            : "navbar  navbar-expand-lg sticky-top"
        }
      >
        <div className="container-fluid  mt-1 z-1">
          <NavLink to="/" className="navbar-brand ms-3">
            <svg width="90" height="50" viewBox="0 0 512 227">
              <path d="M511.187 131.02C509.164 120.486 506.384 114.524 503.211 107.417C501.187 102.884 499.317 98.6027 498.694 95.7914C497.152 88.8342 497.908 80.1165 498.265 76.9559H479.596L476.451 81.9607C469.281 93.3721 453.608 118.338 453.607 118.339C444.924 131.386 434.121 147.618 418.553 153.758C415.613 154.751 409.393 156.767 404.469 151.122C399.777 145.744 400.185 139.937 400.204 139.692L400.223 139.433L400.235 139.275L400.351 139.165L400.543 138.982C421.115 119.456 440.747 98.0267 450.557 84.3877C461.856 68.6797 467.522 55.7517 471.946 44.8671C474.701 38.0835 480.429 21.0609 474.129 9.53638C471.495 4.71716 467.034 1.44608 461.567 0.325525C460.497 0.106481 459.471 0 458.432 0C446.837 0 433.098 14.565 416.43 44.5274C402.557 69.4604 392.695 90.8751 387.12 108.177C384.235 117.129 382.339 128.47 382.339 128.471C381.714 129.595 370.375 142.671 359.178 150.087C355.43 152.569 349.908 155.638 342.002 155.638C334.841 155.638 328.199 151.258 328.197 151.257C328.2 151.256 339.703 145.052 358.243 126.848C368.262 117.009 372.497 103.566 369.295 91.7638C364.27 73.2637 346.588 71.826 341.288 71.826C326.515 71.8713 314.504 81.4527 308.708 89.6434C294.733 109.381 295.344 125.544 297.439 137.419C298.118 141.257 299.355 145.038 301.115 148.654L301.29 149.012C301.288 149.013 279.271 164.432 266.053 146.596C260.98 139.75 253.158 125.537 253.157 125.534L299.238 76.9613H274.472C258.72 93.2817 243.999 108.701 243.996 108.704C243.995 108.701 233.145 87.9123 227.999 76.9559H207.991C209.743 80.4129 211.508 83.9821 213.435 87.8768C219.788 100.719 230.978 122.349 230.979 122.351C230.978 122.353 226.203 127.339 226.202 127.341C223.675 129.967 215.982 137.958 203.609 145.553C196.697 149.788 189.441 152.685 181.427 154.409C175.157 155.759 167.083 155.908 162.222 154.604C159.442 153.858 154.206 151.303 154.206 151.303C154.208 151.301 168.684 142.237 184.317 126.858C194.327 117.011 198.563 103.568 195.371 91.7732C190.344 73.2768 172.662 71.8395 167.362 71.8395C152.593 71.8845 140.578 81.4614 134.777 89.6491C120.804 109.375 121.416 125.547 123.511 137.432C124.127 140.925 126.491 147.497 126.491 147.497C115.785 153.142 105.638 156.512 93.2508 156.956C92.1763 156.995 87.5926 157.012 86.1204 156.934C85.7569 156.915 84.623 156.763 84.623 156.763C84.6237 156.763 87.2107 155.105 87.8157 154.692C103.092 144.267 109.834 125.528 110.298 108.996C110.682 95.3566 107.46 84.338 101.226 77.974C97.3124 73.9742 92.1345 71.9054 85.8352 71.826H85.5688C74.4682 71.826 61.8243 78.4821 53.018 86.7525C50.955 88.6901 45.1151 95.26 45.1149 95.2603L48.7384 76.9532H29.566L0 226.271H19.1834L36.48 138.885C40.2234 122.447 45.9629 112.029 56.9644 101.665L57.1455 101.51C59.8693 99.1994 62.9849 97.0036 65.918 95.328C70.7655 92.5572 75.1511 91.152 78.9529 91.152C81.208 91.152 83.2428 91.6543 85.0023 92.6447C91.2279 96.1683 91.9858 104.727 92.3933 109.326C93.9896 127.445 80.0006 139.727 78.4002 141.068C73.7991 144.917 68.9992 146.788 63.7256 146.788C56.6649 146.788 51.3729 144.284 48.4039 142.896C48.2907 143.445 47.5469 147.095 47.5469 147.095C46.8113 150.765 45.389 158.138 45.3888 158.139C53.0786 164.721 68.412 172.104 88.6396 173.266C90.28 173.362 91.9431 173.41 93.5821 173.41C108.447 173.41 123.012 169.522 136.873 161.854L137.135 161.71L137.36 161.904C142.623 166.436 147.692 168.647 149.358 169.373C159.042 173.596 169.583 173.335 170.617 173.335C183.411 173.335 195.361 169.647 198.718 168.517C219.995 161.354 232.065 147.959 236.609 142.977L240.074 139.324L242.274 143.381C245.181 148.764 248.476 154.865 254.285 161.506C256.697 164.264 265.809 173.26 281.817 173.26C297.013 173.26 312.644 162.989 312.645 162.988C312.648 162.991 317.775 167.024 323.309 169.632C330.243 172.899 338.323 173.252 341.475 173.252C357.227 173.252 370.233 167.39 383.645 154.243L384.105 153.792C384.106 153.794 386.055 158.429 387.734 160.845C396.363 173.254 407.477 173.294 411.374 173.294C414.976 173.294 421.025 172.67 425.577 170.911C445.916 163.047 461.71 141.167 469.314 128.825C469.315 128.823 475.112 119.634 481.964 105.539L483.494 102.455C483.495 102.456 487.147 111.122 487.148 111.125C489.25 116.226 491.21 121.908 492.143 125.6C494.718 135.576 496.443 144.345 491.431 150.591C488.987 153.607 483.95 156.851 478.666 156.851C475.899 156.851 473.29 155.986 470.912 154.279C470.011 153.616 469.077 152.78 468.125 151.79C464.24 156.638 460.211 161.063 456.139 164.956C459.638 167.489 467.811 173.453 480.048 173.453C483.773 173.453 489.075 172.493 492.539 170.772C506.635 163.769 514.679 149.203 511.187 131.02ZM408.648 103.39L410.031 99.942C415.213 87.0267 422.71 71.8007 432.95 53.394C444.791 32.107 452.665 23.6148 456.304 20.4475L457.405 19.4904L458.066 18.9154L458.107 19.782L458.176 21.2241C458.376 25.5125 456.987 31.7896 454.461 38.0155C450.253 48.3681 445.298 59.6522 435.181 73.718C430.12 80.7499 421.854 90.4729 411.905 101.095L409.353 103.823L407.815 105.467L408.648 103.39ZM145.307 136.878L144.861 137.202C144.861 137.202 144.221 135.9 143.86 134.868C142.402 130.693 141.92 123.862 142.646 118.327C143.928 108.754 148.185 102.304 149.957 99.9748C155.245 93.023 161.306 89.2002 166.955 88.538C168.919 88.3079 172.297 88.586 175.232 91.4015C177.994 94.0512 182.867 103.41 172.359 114.719C169.155 118.165 166.306 120.924 159.623 126.442C154.621 130.592 146.82 135.864 145.307 136.878ZM318.664 137.054L318.177 137.379L318.019 136.821L317.469 134.87C315.935 129.43 315.528 123.861 316.26 118.32C317.524 108.782 321.793 102.31 323.569 99.97C328.853 93.0179 334.89 88.9582 340.567 88.5394C340.936 88.5117 341.323 88.4931 341.723 88.4931C344.486 88.4931 346.816 89.4416 348.844 91.3926C351.605 94.0512 356.469 103.424 345.959 114.718C342.751 118.167 339.902 120.927 333.237 126.446C327.744 130.994 318.754 136.994 318.664 137.054Z"></path>
            </svg>
          </NavLink>
          {fix ? (
            <div className="serach-box-container">
              <div className="search-box">
                <div className="input-box my-5 d-flex gap-1">
                  <div className="choice-btn">
                    <ul className="navbar-nav toggle-btn px-1">
                      <li
                        className="nav-item dropdown"
                        onMouseEnter={() => setOptionOpen(true)}
                        onMouseLeave={() => setOptionOpen(false)}
                      >
                        <NavLink className="nav-link rounded d-flex align-items-center gap-3">
                          <i
                            className={`bi ${
                              selectedOption === "Photos"
                                ? "bi-card-image"
                                : "bi-play-circle"
                            }`}
                          ></i>
                          {selectedOption}
                          <i
                            className={`bi ${
                              optionOpen ? "bi-chevron-up" : "bi-chevron-down"
                            }`}
                          ></i>
                        </NavLink>
                        <ul
                          className={`dropdown-menu ${
                            optionOpen ? "show" : ""
                          }`}
                        >
                          <li>
                            <NavLink
                              onClick={() => handleOptionClick("Photos")}
                              to="/"
                              className="dropdown-item"
                            >
                              <i className="bi bi-card-image"></i> Photos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={() => handleOptionClick("Videos")}
                              to="/videos"
                              className="dropdown-item"
                            >
                              <i className="bi bi-play-circle"></i> Videos
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="search" className="visually-hidden">
                        Search for free photos
                      </label>
                      <input
                        type="text"
                        name="search"
                        id="search1"
                        placeholder="Search for free photos"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                      />
                    </div>
                    <div className="btn-search">
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <ul className="navbar-nav">
            {/* Explore Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <NavLink to="/explore" className="nav-link text-light chevron">
                Explore
                <i
                  className={`bi ${
                    exploreOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </NavLink>
              <ul
                className={`dropdown-menu ${
                  exploreOpen ? "show" : ""
                } dropdown-menu-start`}
              >
                <li>
                  <NavLink to="/discover-photos" className="dropdown-item">
                    <i className="bi bi-globe-americas"></i> Discover Photos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/leaderboard" className="dropdown-item">
                    <i className="bi bi-rocket-takeoff"></i> Leaderboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/challenges" className="dropdown-item">
                    <i className="bi bi-award"></i> Challenges
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/free-videos" className="dropdown-item">
                    <i className="bi bi-play-circle"></i> Free Videos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" className="dropdown-item">
                    <i className="bi bi-wallet"></i> Pixels Blog
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <NavLink to="/license" className="nav-link text-light">
                License
              </NavLink>
            </li>

            {/* More Dropdown */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <NavLink className="nav-link text-light">...</NavLink>
              <ul className={`dropdown-menu ${moreOpen ? "show" : ""}`}>
                <li>
                  <NavLink
                    to="/login"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="dropdown-item"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/api" className="dropdown-item">
                    Image & Video API
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className="dropdown-item">
                    Apps & Plugins
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/help" className="dropdown-item">
                    Help Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/report" className="dropdown-item">
                    Report Content
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/partnerships" className="dropdown-item">
                    Partnerships
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms" className="dropdown-item">
                    Imprint & Terms
                  </NavLink>
                </li>

                <li className="dropdown-divider"></li>

                <li>
                  <button
                    className="dropdown-item bg-transparent text-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#language"
                  >
                    <img
                      className="img-fluid lang"
                      src={langImg}
                      alt="Language"
                    />
                    <span className="ms-2">Change Language</span>
                  </button>
                </li>

                <li className="dropdown-divider"></li>

                {/* Social Media Links */}
                <ul className="navbar-nav d-flex justify-content-between align-items-center px-2 fs-5">
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-instagram"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-threads"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-pinterest"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-youtube"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-tiktok"></i>
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </li>

            {/* Join Button */}
            <li className="nav-item">
              <Link>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-light"
                >
                  Join
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Image Section */}
      <div className="header">
        <img className="img-fluid header-img" src={headerImg} alt="Header" />
        <div className="overlay"></div>
        <div className="serach-box-container">
          <div className="search-box">
            <div className="heading">
              <h3 className="text-light text-center fw-semibold">
                The best free stock photos, royalty-free images & videos shared
                by creators.
              </h3>
            </div>
            <div className="input-box my-5 d-flex gap-1">
              <div className="choice-btn">
                <ul className="navbar-nav toggle-btn px-1">
                  <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setOptionOpen(true)}
                    onMouseLeave={() => setOptionOpen(false)}
                  >
                    <NavLink className="nav-link rounded d-flex align-items-center gap-3">
                      <i
                        className={`bi ${
                          selectedOption === "Photos"
                            ? "bi-card-image"
                            : "bi-play-circle"
                        }`}
                      ></i>
                      {selectedOption}
                      <i
                        className={`bi ${
                          optionOpen ? "bi-chevron-up" : "bi-chevron-down"
                        }`}
                      ></i>
                    </NavLink>
                    <ul className={`dropdown-menu ${optionOpen ? "show" : ""}`}>
                      <li>
                        <NavLink
                          onClick={() => handleOptionClick("Photos")}
                          to="/"
                          className="dropdown-item"
                        >
                          <i className="bi bi-card-image"></i> Photos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => handleOptionClick("Videos")}
                          to="/videos"
                          className="dropdown-item"
                        >
                          <i className="bi bi-play-circle"></i> Videos
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="search" className="visually-hidden">
                    Search for free photos
                  </label>
                  <input
                    type="text"
                    name="search"
                    id="search2"
                    placeholder="Search for free photos"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                  />
                </div>
                <div className="btn-search">
                  <button type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Language />
    </>
  );
};

export default Navbar;
