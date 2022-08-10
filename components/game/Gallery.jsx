import Image from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


import imagen5 from "../../public/gallery/image5.png";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Gallery = ({ screenshots }) => {
  
  return <AliceCarousel autoWidth infinite mouseTracking items={items} disableButtonsControls={true}/>;
};

export default Gallery;
