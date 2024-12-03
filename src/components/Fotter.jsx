import React from 'react';
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.png";
import location from "../assets/images/location.png";

function Fotter() {
    return (
      <>
      <footer id="footer">
        <div className="footer-up">
         <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="3000">

              <div className="col d-flex flex-column  justify-content-center">
                <div className="loc">
                  <h3>Address :</h3>
                  <ul>
                    <li><img src={mail} alt="" /><a>aleemirfan672@gmail.com</a></li>
                    <li><img src={call} alt="" /><a>+92 3224 752036</a></li>
                    <li><img src={location} alt="" /><a>Lahore, City Punjab / Pakistan</a></li>
                  </ul>
                </div>

              </div>

              <div className="col d-flex justify-content-center flex-column">
                <div className="fol">
                  <h3>Follow Me On :</h3>
                  <ul>
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                    <li><i className="fa fa-skype"></i></li>
                    <li><i className="fa fa-whatsapp"></i></li>
                  </ul>
                </div>
              </div>


              <div className="col">
                <div className="form">
                  <form action="https://formspree.io/f/xleqgkaz" method="POST">
                    <div className="d-flex justify-content-center flex-column text-center">
                      <h2>Contact Us</h2>
                      <input type="text" name="name" id="" placeholder="Enter Your Name" required />
                      <input type="email" name="email" id="" placeholder="Enter Your Email" required />
                      <textarea name="message" id="" cols="30" rows="5" placeholder="Message" required></textarea>
                      <button className="btn btn-footer" type="submit">Submit</button>
                    </div>

                  </form>
                </div>
              </div>
              

            </div>
         </div>
        </div>

        <div className="footer-down">
          <div className="container">
            <div className="text-center">
              &copy;Copyright 2023, All Rights Reserved <div className="main-color">Made by Muhammed Aleem</div>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
}

export default Fotter;
