
import { GoProjectRoadmap } from "react-icons/go";
const Project = () => {
  return (
    <div id="Project">
      <div class="album py-5 bg-body-tertiary">
        <h1 className="project1 text-center">
          {" "}
          <GoProjectRoadmap /> Project
        </h1>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src="/images/photo8.png" class="img-thumbnail" alt="..." />

                <div class="card-body">
                  <p
                    class="card-text"
                    data-sider-select-id="d6deadfe-ff16-4fca-b7e7-332efc0333c4"
                  >
                    I have created a clone website of Amazon and I used HTML,
                    CSS which I wrote in my ID VS code..
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        <a
                          href="https://ap1techno.github.io/amazon-clone/"
                          className="nav-link px-2 "
                        >
                          {" "}
                          View
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src="/images/photo11.png" class="img-thumbnail" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    I had created a small project while learning ReactJS, where
                    I used ReactJS and Bootstrap. I had written the code in VS
                    Code.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        {" "}
                        <a
                          href="https://social-media-1-sigma.vercel.app/"
                          className="nav-link px-2 "
                        >
                          {" "}
                          View
                        </a>
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              
              <div class="card shadow-sm">
                <div class="card-body">
                  <p class="card-text">
                    one project is pending 
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
