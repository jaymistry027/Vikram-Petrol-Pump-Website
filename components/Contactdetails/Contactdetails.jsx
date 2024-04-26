"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Contactdetails.css";
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from React Bootstrap


const HomePage = () => {
  const iframeRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true); // Function to open the modal

const closePopup = () => setShowPopup(false); // Function to close the modal


  useEffect(() => {
    const handleFullscreen = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
          /* Firefox */
          iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
          /* IE/Edge */
          iframe.msRequestFullscreen();
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreen);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreen);
    };
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      openPopup();
      console.log("Form submitted:", formData);
      resetForm(); // Reset the form fields after successful submission
    } else {
      console.log("Form is not valid");
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    return (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.message !== ""
    );
  };

  return (
    <div className="headcont">
      <br />
      <br />
      <h2 className="contact">Contact Us</h2>
      <section className="abc">
        <div className="main">
          <div style={{ flex: 1, padding: "20px" }}>
            <div className="card-wrapper">
              <div className="text-wrapper">
                <strong>
                  <h5 className="cardTitle mbr-fonts-style mb-2 display-5">
                    Our Details
                  </h5>
                </strong>
                <ul className="list mbr-fonts-style display-7">
                  <li className="mbr-text item-wrap">
                    Phone:{" "}
                    <a href="tel:+91 82680 07000" className="text-primary ha">
                      +91 82680 07000
                    </a>
                  </li>
                  <li className="mbr-text item-wrap">
                    WhatsApp:{" "}
                    <a href="tel:+91 82680 07000" className="text-primary ha">
                      +91 82680 07000
                    </a>
                  </li>
                  <li className="mbr-text item-wrap mailid">
                    Email:{" "}
                    <a
                      href="mailto:vikramautoservices@gmail.com"
                      className="text-primarys ha"
                    >
                      vikramautoservices@gmail.com
                    </a>
                  </li>
                  <li className="mbr-text item-wrap address">
                    Address: Juhu Versova Link Rd, Andheri West, Mumbai -
                    400053
                  </li>
                  <li className="mbr-text item-wrap">
                    Working hours: 6:00 AM - 12:00 AM
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="map-wrapper col-12 col-md-6">
          <div className="google-map">
  <iframe
    ref={iframeRef}
    title="Google Map"
    frameBorder="0"
    style={{ border: 0 }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9714295959793!2d72.82121131470145!3d19.12823085489863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ef0e25402d%3A0xe70a06f243a206b6!2s19.1247%C2%B0%20N%2C%2072.8234%C2%B0%20E!5e0!3m2!1sen!2sin!4v1648432101120!5m2!1sen!2sin"
    allowFullScreen
  ></iframe>
</div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="form5 cid-u7xqhQrsFr"
        id="form02-9"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              Talk with Us
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div
              className="col-lg-8 mx-auto mbr-form"
              data-form-type="formoid"
            >
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div
                    className="col-md col-sm-12 form-group mb-3"
                    data-for="name"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      data-form-field="name"
                      className="form-control"
                      id="name-form02-9"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div
                    className="col-md col-sm-12 form-group mb-3"
                    data-for="email"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      data-form-field="email"
                      className="form-control"
                      id="email-form02-9"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 form-group mb-3" data-for="phone">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      pattern="[0-9]*"
                      className="form-control"
                      id="phone-form02-9"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 form-group mb-3" data-for="textarea">
                    <textarea
                      name="message"
                      placeholder="Message"
                      data-form-field="textarea"
                      className="form-control"
                      id="textarea-form02-9"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{ height: '150px',marginBottom:'20px' }} 
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 align-center mbr-section-btn">
                    <button onClick={openPopup}
                      type="submit"
                      style={{marginBottom:'20px'}}
                      className="btn btn-primary display-7"
                      disabled={!isFormValid()}
                    >
                      Send message
                    </button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;
