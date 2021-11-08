import React from 'react'
import arrow_right from '../assets/arrow-right-1ts.png'

export const Projects = () => {
    return (
        <section id="projects" className="container-fluid mb-md-3 mx-md-3">
        <div className="container px-md-5 text-start d-flex flex-column flex-md-row align-content-center justify-content-center my-md-3">
          <h1 className="tlt-ctn">It looks like magic, <br/> it works with code.</h1>
          <p style={{width:500}} className="pgh-ctn">
            Throughout my career as a Frontend Developer, I have had the privilege of working on increible and challenging projects.
          </p>
        </div>

        <br/>
  
        <div className="row container mx-auto">
          <div id="niko" className="col-12 project-container">
            <div className="card project-container__card">
              <div className="card-body text-white pt-3">
                <h5 className="project-title card-title">NIKO</h5>
                <p className="card-text project-text">
                Niko is one of the most recognized and valuable sports equipment brands and suppliers in the world.
                </p>
                <div className="project-container__btns">

                  <a href="#" className="btn btn-orange d-block text-white">View full project</a>
                  <a href="#" className="btn btn-outline-orange text-orange d-block mb-2">View code</a>
                  
                </div>
              </div>
            </div>
          </div>
  
          <div id="principe" className="col-12 col-md-6 project-container mb-5">
            <div className="card project-container__card">
              <div className="card-body text-white pt-3">
                <h5 className="project-title card-title">Fresh Prince Store</h5>
                <p className="card-text project-text">
                The series stars Will Smith as a fictional version of himself ...
                </p>
                <div className="project-container__btns">

                  <a href="#" className="btn btn-orange d-block text-white">View full project</a>
                  <a href="#" className="btn btn-outline-orange text-orange d-block mb-2">View code</a>
                  
                </div>
              </div>
            </div>
          </div>
  
          <div id="amazonas" className="col-12 col-md-6 project-container">
            <div className="card project-container__card">
              <div className="card-body text-white pt-3">
                <h5 className="project-title card-title">Amazonas</h5>
                <p className="card-text project-text">
                Amazonas is the largest online retail company in the ...
                </p>
                <div className="project-container__btns">

                  <a href="#" className="btn btn-orange d-block text-white">View full project</a>
                  <a href="#" className="btn btn-outline-orange text-orange d-block mb-2">View code</a>
                  
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="py-2 btn btn-outline-dark mx-auto lnk-ctn" style={{width:300}}>
            <strong>More projects ㅤ</strong>
            <img src={arrow_right} alt=""/>
            </a>
        </div>
      </section>
  

    )
}
