import { useState } from "react";

const awards = [
  { id: 1, image: "/images/award1.jpg", title: "Best CNG Installer 2023" },
  { id: 2, image: "/images/award2.jpg", title: "Automobile Excellence Award" },
];

const AwardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + awards.length) % awards.length
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img src={awards[currentIndex].image} alt={awards[currentIndex].title} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default AwardsCarousel;
