import React from 'react'

export const Contact = () => {
    return (
        <section id="form" className="container-fluid py-5">
        <form className="form-ctn mx-auto">
          <div className="form-ctn_in">
          <h2 className="title-ctn">Contact</h2>
          <p className="paragraph-ctn">
            If you are interested in working with me on your next project, plaease do not hesitate to get in touch.
          </p>
          <div className=" f-input-ctn">
            <input type="text" className="form-control input-ctn" placeholder="Full name"/>
          </div>
          <div className=" l-input-ctn">
            <input type="email" className="form-control input-ctn" placeholder="Email"/>
          </div>
          <div className="u-textarea-ctn">
            <textarea className="form-control textarea-ctn" rows="5" cols="46" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="btn bg-orange text-white d-block btn-form">Send message</button>
        </div>
        </form>
      </section>
    )
}
