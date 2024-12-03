import React from 'react';
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/swiper/swiper-bundle.min.css";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import cv from "../assets/resume/Cv.pdf";
import img1 from "../assets/images/team-1.jpg";
import img2 from "../assets/images/about.jpg";
import img3 from "../assets/images/p-img2.png";
import img4 from "../assets/images/p-img3.png";
import img5 from "../assets/images/p-img-4.png";
import img6 from "../assets/images/p-img-5.png";
import img7 from "../assets/images/p-img-7.jpg";
import img8 from "../assets/images/capture.png";
import logo1 from "../assets/images/html.png";
import logo2 from "../assets/images/css-3.png";
import logo3 from "../assets/images/bootstrap.png";
import logo4 from "../assets/images/sass (1).png";
import logo5 from "../assets/images/java-script.png";
import logo6 from "../assets/images/adobe-photoshop.png";
import logo7 from "../assets/images/ilustrator.png";
import logo8 from "../assets/images/figma.png";
import pt1 from "../assets/images/pt (1).png";
import pt2 from "../assets/images/pt (2).png";
import pt3 from "../assets/images/pt (3).png";
import pt4 from "../assets/images/pt (4).png";
import pt5 from "../assets/images/pt (5).png";
import cer1 from "../assets/images/cerhtml.png";
import cer2 from "../assets/images/cercss.png";
import cer3 from "../assets/images/cerjs.png";
import mail from "../assets/images/mail.png";
import call from "../assets/images/call.png";


function App() {
 
  return (
    <>
       {/* home section is start from here  */}
      <section className="home" id="home">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-xl-5 home-txt" data-aos="fade-up" data-aos-duration="3000">
              <h3 className="my-2" >Hi I'm</h3>
              <h1 className='h1 main-text'>Muhammad Aleem</h1>
              <h1 className="my-1 mb-3">Web developer</h1>
              <p>I Provide best service with proper client satisfaction</p>
              
              <div className="d-flex my-2">
                <button className="btn-2 btn m-2" ><a href={cv} download>Download resume</a></button>
              </div>
            </div>
            <div className="col-lg-5 col-xl-3" data-aos="fade-up" data-aos-duration="3000">
              <div className="home-txt-2">
                <ul type="none">

                  <li>
                    <h2>
                      <div>3y+</div>
                    </h2>
                    <p>Years of experience</p>
                  </li>


                  <li>
                    <h2>
                      <div>2k+</div>
                    </h2>
                    <p>Project Complete</p>
                  </li>


                  <li>
                    <h2>
                      <div>100%</div>
                    </h2>
                    <p>Client satisfaction</p>
                  </li>

                </ul>
              </div>


            </div>
            <div className="col-lg-12 col-xl-4" data-aos="fade-up" data-aos-duration="3000">
              <div className="d-flex justify-content-center align-items-center">
                <div className="home-img">
                  <img src={img1} alt="" className="img1" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* home section is end at here  */}

      {/* About section is start from here  */}
  <section className="about" id="about" data-aos="fade-up" data-aos-duration="3000">

<div className="container">
  <div className="row justify-content-center align-items-center flex-column-lg">
    <div className="about-txt col">
      <h6 className="sub2-main-color mb-2" >About Me</h6>
      <h1 className="sub-main-color my-2" >Professional <font
          className="main-text"> Problem Solutions </font> For Digital
        Products</h1>

      <p className="sub2-main-color my-3">I design and create best digital products I provide solution for new and digital business I design and create professional websites for local business and brands</p>
      <div className="row my-3">
        <div className="col d-flex" >
          <h3 className="main-color mx-1">1-</h3>
          <h3 className="sub-main-color">Business Websites</h3>
        </div>
        <div className="col d-flex" >
          <h3 className="main-color mx-1">2-</h3>
          <h3 className="sub-main-color"> E commerence websites</h3>
        </div>
      </div>
      <div className="row my-3">
        <div className="col d-flex" >
          <h3 className="main-color mx-1">3-</h3>
          <h3 className="sub-main-color"> Custom Websites</h3>
        </div>
        <div className="col d-flex" >
          <h3 className="main-color mx-1">4-</h3>
          <h3 className="sub-main-color"> Product Design</h3>
        </div>
      </div>
    
      <div className="row ab-c my-4 mt-5" >
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={mail}  alt="" />
            <div className="row flex-column m-1">
              <div className="col sub-main-color">Email Me</div>
              <div className="col sub-main-color">aleemirfan672@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center align-items-center">
            <img src={call}  alt="" />
            <div className="row flex-column m-1">
              <div className="col sub-main-color">Contect Me</div>
              <div className="col sub-main-color">+92 3224 753036</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="about-img col d-flex justify-content-center align-items-center">
      <img src={img2} alt="" />
    </div>
  </div>
</div>
  </section>
      {/* About section is end at here  */}

      {/* Projects section is start from here  */}
      <section className="projects my-5" id="Projects" data-aos="fade-up" data-aos-duration="3000">
        <div className="container">
          <div className="text-center my-5">
            <h4 className="h1-sub2">Explore Completed Projects</h4>
            <h1 className="h1-sub">See Some of my Projects</h1>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img8} alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Autodrone Website</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/Drone/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img3}  alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Custom Website</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/rmt.github.com/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img4} alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Real state</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/real-state.github.com/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img5} alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Protfolio Website</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/project.github.io/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img6}  alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Custom Website</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/slider.github.io/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
            <div className="col-lg-4 my-lg-2 my-5 mx-lg-0 mx-md-3 mx-0">
              <div className="car bg-black rounded-5">
                <div className="img-sec">
                  <img src={img7} alt="/img" />
                </div>
                <div className="text-center my-2 mx-2">
                  <h3 className="my-3">Company website</h3>
                  <button className="btn btn-2 my-3"><a href="https://aleemdevaloper.github.io/italian-food.github.com/" className="sub-main-color">View Project</a> </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>   
      {/* Projects section is end at here  */}



         {/* Clients section is start from here  */}
     <section className="clients bg-black py-5" id='client' data-aos="fade-up" data-aos-duration="3000">
      <section className="c-area">
        <div className="container">
          <div className="row">
            <div className="col-12 py-5 text-center sub-main-color">
              <h4 className="sub2-main-color">Clients</h4>
             <h1>My Happy Clients</h1>
            </div>
            <div className="col-12 py-3">
              <div className="slider-area">
                <div className="c-slider">
                  <div>
                    <div className="img-hold">
                      <img src={pt1} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-hold">
                      <img src={pt2} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-hold">
                      <img src={pt3} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-hold">
                      <img src={pt4} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="img-hold">
                      <img src={pt5} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </section>
         {/* Client section is end at here  */}





      {/* Skills section is start from here  */}
    <section className="skills" id="skills">
    <div className="container-xxl contianer-md">
    <div className="row justify-content-center align-items-center pt-4 pb-4" data-aos="fade-up"
      data-aos-duration="3000">
      <div className="col-xl-4 col-lg-12 pl-3">
        <h5 className="sub2-main-color">My Skills</h5>
        <h1 className="sub-main-color">Let's Explore Popular <br />
          <font className="main-text">Skills & Experience</font>
        </h1>
        <br />
        <p className="sub2-main-color">By using my professional designing and development skills . I made best websites for businesses . I provide proper client satisfaction with 100% good quality work.</p>
        <button type="submit" className="btn-2 btn m-2 my-4">Learn More</button>
      </div>
      <div className="col-xl-8 col-lg-12">


        <div className="row">
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo1} alt="" />
              <h5 className="sub2-main-color">HTML 5</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">95%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo2} alt />
              <h5 className="sub2-main-color">CSS 3</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">80%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo3} alt="" />
              <h5 className="sub2-main-color">Bootstrap</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">90%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo4} alt="" />
              <h5 className="sub2-main-color">Sass</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">90%</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo5} alt="" />
              <h5 className="sub2-main-color">Java Script</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">85%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo6} alt="" />
              <h5 className="sub2-main-color">Photoshop</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">70%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo7} alt="" />
              <h5 className="sub2-main-color">Illustrator</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">70%</h3>
            </div>
          </div>
          <div className="col skills-b">
            <div className="d-flex justify-content-center align-items-center flex-column p-4">
              <img src={logo8} alt="" />
              <h5 className="sub2-main-color">Figma</h5>
            </div>
            <div className="meter">
              <h3 className="mtr">80%</h3>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
    </section>
      {/* skills section is end at here  */}


      {/* certificate section section is start from here  */}
      <section className="certificate">
    <div className="container" data-aos="fade-up" data-aos-duration="3000">
      <div className="row">
        <div className="col-12">
          <div className="certificates-txt">
            <h3>My <font className="main-text">Certificates</font>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-8"><img src={cer1} /></div>
        <div className="col-md-4 col-sm-8"><img src={cer2} /></div>
        <div className="col-md-4 col-sm-8"><img src={cer3} /></div>
      </div>
    </div>
      </section>

      {/* certificate section section is start from here  */}


      {/* contact us section is start from here  */}
      <section className="contact-us"  data-aos="fade-up" data-aos-duration="3000" id="contact">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-duration="3000">

            <div className="col-lg">
              <div className="contact-txt">
                <h4>Get in touch</h4>
                <h1>Let’s Talk For your <font className="main-text">Next Projects</font>
                </h1>
                <p className="my-2">Fell free to get in touch . You can easily talk to us 24/7 .</p>
                
                <ul>
                  <li>3+ Experience</li>
                  <li>Professional Web Development</li>
                  <li>Best Quality code</li>
                </ul>
              </div>
            </div>

            <div className="col-lg">
              <div className="contact-form">
                <form action="https://formspree.io/f/xleqgkaz" method="POST" className="d-flex flex-column">
                  <div className="d-flex">
                    <input type="text" name="name" id="" placeholder="Enter Name" required />
                    <input type="email" name="email" id="" placeholder="Enter email" required />
                  </div>
                  <div className="d-flex">
                    <input type="tel" name="number" id="" placeholder="Enter Number" required />
                    <input type="text" name="subject" id="" placeholder="Enter Subject" required />
                  </div>
                  <textarea name="message" id="" cols="30" rows="4" placeholder="Message" required></textarea>
                  <div className="d-flex  align-items-center m-2 my-3">
                    <button className="btn" type="submit">Send us Message</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* contact us section is end at here  */}
    </>
  )
}

export default App
