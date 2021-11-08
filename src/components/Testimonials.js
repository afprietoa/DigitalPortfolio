import React from 'react'
import ellipse1 from '../assets/Ellipse1.png'
import ellipse2 from '../assets/Ellipse2.png'
import ellipse3 from '../assets/Ellipse3.png'
import ellipse4 from '../assets/Ellipse4.png'
import ellipse5 from '../assets/Ellipse5.png'
import ellipse6 from '../assets/Ellipse6.png'

export const Testimonials = () => {
  return (


    <section className="container-fluid pt-3 test-main">
      <h2 className="text-white title-test">Testimonials</h2>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }} >
            <div className="card-body">
              <div>
                <img src={ellipse1} alt="juan-antonio" width="48" height="48" />
                <span className="testimonial-name">Juan Antonio</span>
              </div>
              <p className="text-white test-txt">
              I have been working with Javascript for some years and, even so, I learned several important things from Antonio and how he uses Javascript on a day-to-day basis.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }}>
            <div className="card-body">
              <div>
                <img src={ellipse2} alt="Albert Flores" width="48" height="48" />
                <span className="testimonial-name">Albert Flores</span>
              </div>
              <p className="text-white test-txt">
              I liked to see the reason for the things of the core of React, knowing the magic that occurs behind, excellent teacher Antonio great vocation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }}>
            <div className="card-body">
              <div>
                <img src={ellipse3} alt="Darlene Robertson" width="48" height="48" />
                <span className="testimonial-name">Darlene Robertson</span>
              </div>
              <p className="text-white test-txt">
              He helps to understand the reason for things, which gives us the power to make better use of the language and tools we have.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }}>
            <div className="card-body">
              <div>
                <img src={ellipse4} alt="Jane Cooper" width="48" height="48" />
                <span className="testimonial-name">Jane Cooper</span>
              </div>
              <p className="text-white test-txt">
              La forma como explica y trabaja los temas Antonio, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }}>
            <div className="card-body">
              <div>
                <img src={ellipse5} alt="Eleanor Pena" width="48" height="48" />
                <span className="testimonial-name">Eleanor Pena</span>
              </div>
              <p className="text-white test-txt">
                Antonio has been very helpful in accelerating certain development efforts. What would have taken us 6 months only took them 1.5 months.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card mx-auto test-ctn" style={{ width: 288 }}>
            <div className="card-body">
              <div>
                <img src={ellipse6} alt="Guy Hawkinso" width="48" height="48" />
                <span className="testimonial-name">Guy Hawkinso</span>
              </div>
              <p className="text-white test-txt">
                Antonio has exceeded my expectations from design up to development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}
