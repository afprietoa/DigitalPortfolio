//Buena práctica que los componentes vayan con UPPER CAMELCASE
import React from "react"
import { Contact } from "../components/Contact"
import { Projects } from "../components/Projects"
import { Testimonials } from "../components/Testimonials"
import { Welcome } from "../components/Welcome"
import logo from '../assets/LOGO.png'
import banner from '../assets/banner-md.png'
import git from '../assets/git.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/insta.png'
import arrow_right from '../assets/arrow-right-2ts.png'





const PortfolioPage = () => {



  return (

    <div>
        
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>

        </ul>
        <form className="d-flex">
          <button className="btn navbar-brand text-white bg-orange p-2" type="submit">Download CV</button>
        </form>
      </div>
    </div>
  </nav>

<main>
        <div id="home">
       <Welcome />
       </div>

       <br/><br/>

       <div id="projects">
       <Projects />
       </div>

       

       <section id="services" className="container-fluid pt-3 pb-4">
        <div className="container" id="services">
          <h2 className="mt-3 mb-3 services-title">Services</h2>
          <div className="row">
            <div className="col-12 col-md-4">
              <h4 className="services-title2"><strong>Design</strong></h4>
              <ul>
                <li>User experience</li>
                <li>User interface</li>
                <li>Web application</li>
                <li>Test of concept</li>
              </ul>
              <a href="#" className="btn bg-black text-orange d-block">
                View design services ㅤ
                <img src={arrow_right} alt=""/>
                </a>
            </div>
            <div className="col-12 col-md-4">
            <h4  className="services-title2"><strong>Development</strong></h4>
              <ul>
                <li>Mobile applications</li>
                <li>Websites</li>
                <li>Progressive web applications</li>
              </ul>
              <a href="#" className="btn bg-black text-orange d-block">
                View development services ㅤ
                <img src={arrow_right} alt=""/>
                </a>
            </div>
            <div className="col-12 col-md-4">
            <h4  className="services-title2"><strong>Brand</strong></h4>
              <ul>
                <li>Brand identity</li>
                <li>Brand strategy</li>
              </ul>
              <a href="#" className="btn bg-black text-orange d-block">
                View brand services ㅤ
                <img src={arrow_right} alt=""/>
                </a>
            </div>
          </div>
  
        </div>
      </section>

      <div id="testimonials">
       <Testimonials />
       </div>

       <img src={banner} alt="" style={{width:1349}}/>

      <div id="contact">
       <Contact />
       </div>

</main>

<footer className="footer-container">
    <div className="wrapper">
      <section className="footer">
        <img src={logo} alt="" className="icon-logo"/>
        <p className="p-footer">Made with 🤍 by Antonio. Coyright 2021 - All rights reserved.</p>
        <div className="footer-icon">
          <img src={git} alt=""/>
          <img src={instagram} alt="" className="icon-sn"/>
          <img src={twitter} alt="" />
        </div>
      </section>
    </div>
  </footer>
        
    </div>
  )
}

export default PortfolioPage