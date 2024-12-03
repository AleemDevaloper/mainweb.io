import React from 'react';
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import logo from "../assets/images/logo1.png";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.png";
import location from "../assets/images/location.png";
import "../assets/JS/index.js";

function Header() {
    return (
      <>
       <section className="top-area">
       {/* Header section  */}
      <header>
        <nav className="navbar navbar-dark navbar-expand-lg bg-transparent bg-body-dark">
          <div className="container-xl w-100">
            <a className="navbar-brand fs-4 " href="#"><img src={logo}  alt=""/>Aleem
              Developer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <div id="navicon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>

            <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header sub-main-color">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={logo} alt="" />Aleem
                  Developer</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#client">Clients</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
                <div className="d-flex justify-content-center align-item-center">
                  <div className="s-d">
                    <div className="row">
                      <div className="col-12">
                        <div className="content">
                          <div className="text m-2 p-3">
                            <p>Let's Talk</p>
                          </div>
                          <div className="icon p-2">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>



        <div className="row flex-column click" id="click">
          <div className="col mt-5">
            <div className="text-toogle">
              <div className="nav-logo d-flex align-items-center">
                <img src={logo} alt="" />
                <div>Aleem developer</div>
              </div>
              <h4>I build Unique Digital websites
                for successful business
                </h4>
              <p className="sub2-main-color">Professional Problem Solutions For Digital Products</p>
              <h4>Main Office :</h4>
              <ul type="none">
                <li><img src={location} alt="" className="m-2" /><a href="">Lahore, City Punjab /
                    Pakistan</a></li>
                <li><img src={mail} alt="" className="m-2" /><a href="">aleemirfan672@gmail.com</a></li>
                <li><img src={call} alt="" className="m-2" /><a href="">+92 3224 752036</a></li>
              </ul>
            </div>
          </div>
         
        </div>
          
      
      </header>
      </section>
      
      </>
    );
  }

export default Header;
