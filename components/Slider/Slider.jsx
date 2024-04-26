'use client'
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Image1 from '../../public/assets/Slider-1.webp';
import Image2 from '../../public/assets/Slider-2.webp';
import Image3 from '../../public/assets/Slider-3.webp';
import './Slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the current interval
    }
    const newIntervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 9000);
    setIntervalId(newIntervalId); // Set the new interval ID
  };

  useEffect(() => {
    resetInterval(); // Initialize the interval
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Run effect only once on mount

  const showIndicators = true; // Set this variable based on your condition
  return (
    <div className="mt-4 " sx={{marginLeft:'2rem'}}>
      

<Carousel activeIndex={index} onSelect={handleSelect} indicators={showIndicators ? false : undefined}>
  <Carousel.Item className='carouse'>
    <Image src={Image1} className='imaeg' alt='Slider 1' />
  </Carousel.Item>
  <Carousel.Item className='carouse'>
    <Image src={Image2} className='imaeg' alt='Slider 2' />
  </Carousel.Item>
  <Carousel.Item className='carouse'>
    <Image src={Image3} className='imaeg' alt='Slider 3' />
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Slider;
