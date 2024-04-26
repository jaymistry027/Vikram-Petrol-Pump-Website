'use client'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image1 from '../../public/assets/Service-1.webp';
import Image2 from '../../public/assets/Service-2.webp';
import Image3 from '../../public/assets/Service-3.webp';
import Image4 from '../../public/assets/Service-4.webp';
import Image5 from '../../public/assets/Service-5.webp';
import Image6 from '../../public/assets/Service-6.webp';
import './Services.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  const slideIndex = (i) => {
    return (index + i) % 6;
  };

  const cardData = [
    { image: Image1, title: "Ethanol-Free Petrol", text: "Premium fuel for optimal engine performance." },
    { image: Image2, title: "Diesel Fuel", text: "Top-quality fuel for smooth vehicle operation." },
    { image: Image3, title: "Speed Fuel", text: "High-performance fuel for power and efficiency." },
    { image: Image4, title: "CNG Services", text: "Convenient and clean fueling option." },
    { image: Image5, title: "Oil Changes", text: "Expert service for engine longevity." },
    { image: Image6, title: "Car Wash", text: "Professional cleaning for a sparkling vehicle." },
  ];

  return (
    <div className="slider-container mt-4">
      <button
        className="btn-arrow left-arrow"
        onClick={handlePrevious}
      >
        <FaArrowLeft />
      </button>
      <div className="card-container">
        {[0, 1, 2].map((i) => (
          <Card key={i} className="my-card">
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
      <button
        className="btn-arrow right-arrow"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
