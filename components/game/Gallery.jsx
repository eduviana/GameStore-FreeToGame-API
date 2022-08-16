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
    alt="ingame image"
    key={1}
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    alt="ingame image"
    key={2}
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    alt="ingame image"
    key={3}
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    alt="ingame image"
    key={4}
  />,
  <Image
    width={350}
    height={200}
    layout="fixed"
    src={imagen5}
    onDragStart={handleDragStart}
    alt="ingame image"
    key={5}
  />,
];

const Gallery = () => {
  
  return <AliceCarousel autoWidth infinite mouseTracking items={items} key={items.id} disableButtonsControls={true}/>;
};

export default Gallery;
