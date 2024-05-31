import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  const handleClick = () => {
alert('9876543210');
};
const emailClick = () => {
  alert('apal76525@gmail.com');
}

  return (
    <div id="Contect">
      <div className="container footer1">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              <AiFillHeart /> made with by Ashok pal Ind © 2024 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
              <button onClick={emailClick}>
                <MdMarkEmailUnread />
              </button>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24"></svg>
              </a>
              <button onClick={handleClick}>
                <MdContactPhone />
              </button>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <a href="https://x.com/home">
                    {" "}
                    <FaTwitter />
                  </a>
                </svg>
              </a>
            </li>

            <li className="ms-3">
              <a className="text-body-secondary" href="# <FaTwitter />">
                <svg className="bi" width="24" height="24">
                  <a href="https://www.instagram.com/">
                    <GrInstagram />
                  </a>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <a href="https://www.facebook.com/">
                    <FaFacebook />
                  </a>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};
export default Footer;
