import React from 'react';
import './about.css';
import AboutImg from './../../assets/images/about/01_abut.jpg';
import SocialMedia from './SocialMedia';

function About() {
  return (
    // :: About
    <section className="about py-100" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="about-text-box-top">
              <h2>I'm a web designer, and i'm very passionate and dedicated to my work.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tmpor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="btn-1">Read More</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-img-box">
              <div className="img-box">
                <img className="img-fluid" src={AboutImg} alt="01 About" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-text-box-down">
              <h3>I have 6 years experience as a professional web desin, I have acquirednthe skill and knowledge necessary to make your project a success</h3>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About