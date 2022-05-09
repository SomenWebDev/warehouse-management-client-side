import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-center">CONTACT</h1>
      <div className="row">
        <div className="col-lg-6 col-12">
          <h3>Inquiries</h3>
          <p>
            For any inquiries,questions or commendations,please
            call:+88-09610616621 or fill out the following form.
          </p>
          <form action="">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Subject"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-lg-6 col-12 ">
          <div className="text-center">
            <h1>Head Office</h1>
            <p>Road No 6,CDA Avenue,Agrabad,Chittagong.</p>
          </div>
          <div className="text-center">
            <p>EMAIL:rahulchy08@gmail.com</p>
            <p>CELL PHONE: 013256482</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
