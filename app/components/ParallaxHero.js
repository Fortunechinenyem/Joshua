import { useEffect, useRef } from "react";

const ParallaxHero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      parallaxRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      style={{
        backgroundImage: "url(/images/joshua.JPG)",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <h1>Welcome to Joshua Aribido's World of Automobiles</h1>
    </div>
  );
};

export default ParallaxHero;
