const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start header ">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-secondary">
              <li>
                <a href="#" className="nav-link px-2 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link px-2 ">
                  About
                </a>
              </li>
              <li>
                <a href="#Education" className="nav-link px-2 ">
                  Education
                </a>
              </li>

              <li>
                <a href="#Skill" className="nav-link px-2 ">
                  Skills
                </a>
              </li>
              <li>
                <a href="#Project" className="nav-link px-2 ">
                  Project
                </a>
              </li>
              <li>
                <a href="#Contect" className="nav-link px-2 ">
                  Contect
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
