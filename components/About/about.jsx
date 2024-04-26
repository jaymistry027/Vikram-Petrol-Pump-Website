'use client'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pic1 from '../../public/assets/1.webp';
import pic2 from '../../public/assets/2.webp';
import pic3 from '../../public/assets/3.webp';
import pic4 from '../../public/assets/4.webp';
import './about.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const slideIndex = (i) => {
    return (index + i) % 4;
  };

  const cardData = [
    { image: pic1, title: "Exceptional Quality Fuel", text: "Fueling journeys with the highest quality standards." },
    { image: pic2, title: "Convenient Service", text: " Your convenience, our commitment." },
    { image: pic3, title: "Trusted Dealership", text: " Reliability you can trust, service you deserve." },
    { image: pic4, title: "Customer-Centric Approach", text: "Experience the difference with Vikram Auto Services." },
  ];

  return (
    <div className="slider-container mt-4 background1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <strong><h1 className="mbr-section-title mbr-fonts-style mb-4 display-2" style={{fontSize:'2.5rem', margineBottom:'0.5rem'}}>About Us</h1></strong><br/>
      <p className='lorem1'>Welcome to Vikram Auto Services, your trusted dealership of Bharat Petroleum Co. Ltd. conveniently located on Juhu Versova Link Rd, Four Bungalows, Andheri West. At Vikram Auto Services, we pride ourselves on providing top-notch fueling solutions tailored to meet the diverse needs of our valued customers. Our comprehensive range of services includes car wash, CNG, diesel fuel, ethanol-free petrol, full-service fueling, and oil changes. With a steadfast commitment to quality and customer satisfaction, we strive to exceed expectations and ensure a seamless fueling experience for every patron. Trust Vikram Auto Services for all your fueling needs, where excellence meets convenience.</p>

      <strong><h1 className="mbr-section-title mbr-fonts-style mb-4 displays heading2" style={{fontSize:'2.5rem', margineBottom:'0.5rem'}}>Why Choose Us?</h1></strong>
      <div className="card-container" style={{ display: 'flex', justifyContent: 'space between ', flexWrap: 'wrap' }}>
        {[0, 1].map((i) => (
          <Card key={i} className="my-card" style={{ margin: '2rem', marginBottom:'2rem' }}>
            <Image src={cardData[slideIndex(i)].image} width={350} height={350} className="imga" />
            <Card.Body>
              <Card.Title className='quotes'>{cardData[slideIndex(i)].title}</Card.Title>
              <Card.Text className="quotetext">
                {cardData[slideIndex(i)].text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {[2, 3].map((i) => (
          <Card key={i} className="my-card" style={{ margin: '2rem',marginBottom:'2rem'  }}>
            <Image src={cardData[slideIndex(i)].image} width={350} height={350} className="imga" />
            <Card.Body>
              <Card.Title className='quotes'>{cardData[slideIndex(i)].title}</Card.Title>
              <Card.Text className="quotetext">
                {cardData[slideIndex(i)].text}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Slider;
