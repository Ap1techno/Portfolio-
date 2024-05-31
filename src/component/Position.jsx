import { FaGithub } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";

const Position = () => {
  return (
    <div id="about">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <h1 className="display-3 fw-bold">
          <FcAbout />
          ABOUT ME
        </h1>

        <div className="Position2">
          <img
            src="photo1.jpg"
            class="rounded d-block position1"
            alt="cb"
          ></img>{" "}
          <p>
            I am Ashok pal . I am a coding knowledge of java and Data Structures
            and Algorithms, Solved more than 200+ coding problems. I have done
            one project. ATM And right now I'm studying Full Stack Development.
            I completed the frontend from Almabatter and I have created 2
            projects while studying frontend. The first project is a calculator
            and the second project is a social media one where I have used
            React. now I'm studying the backend from Almabbatter.
          </p>
        </div>

        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a
            className="icon-link github"
            href="https://drive.google.com/file/d/12SxzqKl76Sh28y5Wb2IT0XFkvqp3sbcN/view?usp=sharing"
          >
            <GrResume />
            Resume
            <svg className="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </a>
          <a className="icon-link github" href="https://github.com/">
            <FaGithub />
            GitHub
            <svg className="bi">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </a>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
};
export default Position;
