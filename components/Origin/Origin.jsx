import React from 'react';
import './Origin.css'; 
import Image from 'next/image';
import logo from '../../public/assets/LOGO.webp';

const Origin = () => {
  return (
    <div className="vikram-petrol-pump">
      <div className="image-container">
        <Image src={logo} className='image2' />
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-md-6 lead">
            <p>
              At Vikram Auto Services, our story is one of dedication, growth, and unwavering commitment to serving our community. Founded years ago with a vision to redefine the fueling experience, we embarked on a journey to provide top-notch services to our valued customers. Over time, our dealership of Bharat Petroleum Co. Ltd. has evolved into a trusted destination on Juhu Versova Link Rd, Four Bungalows, Andheri West, known for its exceptional quality fuel, convenient services, and customer-centric approach.
            </p>
          </div>
          <div className="col-md-6 lead">
            <p > 
              Driven by a passion for excellence, Vikram Auto Services has continually raised the bar in the fuel industry. From introducing innovative initiatives like ethanol-free petrol and full-service fueling to offering convenient services such as car wash and oil changes, we have remained committed to meeting the diverse needs of our patrons. Our story is a testament to our dedication to providing unparalleled service, fostering long-lasting relationships, and making a positive impact on the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origin;
