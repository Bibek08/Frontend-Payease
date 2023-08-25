import React from "react";
// import Topnav from "../../components/Topnav/Topnav";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Bhuwan from "../../components/images/Bhuwan.png";
import Bibek from "../../components/images/Bibek.png";
import Yujin from "../../components/images/Yujin.png";
import Kumar from "../../components/images/Kumar.png";
import Imagefront from "../../components/images/Imagefront.png";
import aboutus from "../../components/images/aboutus.jpg";
import contact from "../../components/images/contact.jpg";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const scrollToHome = () => {
    scroll.scrollTo(document.getElementById("/").offsetTop);
  };
  const scrollToAboutUs = () => {
    scroll.scrollTo(document.getElementById("aboutus").offsetTop);
  };

  const scrollToContact = () => {
    scroll.scrollTo(document.getElementById("contact").offsetTop);
  };

  return (
    <div>
      <div className="hometop-container">
        <div className="row">
          <div className="col-md-6">
            <h3>PayEase</h3>
          </div>
          <div className="col-md-6">
            <div className="home-links">
              <Link to="/" onClick={scrollToHome}>
                Home
              </Link>
              <Link to="/#aboutus" onClick={scrollToAboutUs}>
                About Us
              </Link>
              <Link to="/#contact" onClick={scrollToContact}>
                Contacts
              </Link>
              <Link to="/Login">
                <button className="gotologin">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container" id="/">
        <div className="row">
          <div className="col-md-6 home-paragraph-container">
            <div className="home-header">
              <h1>PayEase</h1>
              <h5>hustle-free payments with PayEase</h5>
            </div>
            <p className="home-paragraph">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              commodi at debitis id similique, sed quis error? Fuga, eos est
              quae quam quos atque id ut quo, doloremque quasi quod?
            </p>
          </div>
          <div className="col-md-6 ">
            <img src={Imagefront} alt="" className="home-img" />
          </div>
        </div>
      </div>
      {/*.................contacts...........*/}
      <div className="aboutus-container" id="aboutus">
        <div className="row">
          <div className="col-md-6">
            <img src={aboutus} alt="" className="aboutus-img" />
          </div>
          <div className="col-md-6">
            <h2>PayEase</h2>
            <p>
              PayEase is an efficient online platform designed for students to
              easily manage and complete fee payments. It simplifies the process
              of paying fees for educational institutions, offering a convenient
              and user-friendly solution. With PayEase, students can securely
              make their tuition and other fee payments electronically, saving
              time and effort. This system streamlines the payment process,
              ensuring that students can handle their financial obligations with
              ease and accuracy, enhancing the overall experience of fee
              management in educational settings.
            </p>
          </div>
        </div>
      </div>
      {/*..........contacts.........*/}
      <div className="contact-container" id="contact">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-paragraphs">
              <p>
                <MdEmail /> Email :payeasea321@gmail.com
              </p>
              <p>
                <MdPhone /> Phone : +977981517656
              </p>
              <p>
                <MdLocationOn /> Address : vyas-5
              </p>
              <div className="social-links">
                <h5>Social---</h5>
                <a href="https://www.facebook.com">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.linkedin.com">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={contact} alt="" className="home-contact-img" />
          </div>
        </div>
      </div>

      <div className="members-container">
        <h3>Team Members</h3>
        <div className="row">
          <div className="col-md-3">
            <img src={Bhuwan} alt="" className="Bhuwan" />
            <h5>Bhuwan Darai</h5>
          </div>
          <div className="col-md-3">
            <img src={Bibek} alt="" className="Bibek" />
            <h5>Bibek Thapa</h5>
          </div>
          <div className="col-md-3">
            <img src={Kumar} alt="" className="Kumar" />
            <h5>Kumar Thapa</h5>
          </div>
          <div className="col-md-3">
            <img src={Yujin} alt="" className="Yujin" />
            <h5>Yujin Thapa</h5>
          </div>
          <p id="copyright">All Right Reserve @PayEase2023</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
