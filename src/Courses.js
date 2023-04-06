
import { useState, useEffect, useRef } from "react";

import {
 
    Heading,
    Box,
    
  } from "@chakra-ui/react";
  import FullScreenSection from "./FullScreenSection";
import './style.css';


const data = [{id: 1, title: 'ride the waves.', image: 'https://i.ibb.co/4YMZFVj/meta.jpg'},
 {id: 2, title: 'tread the unknown.', image: 'https://i.ibb.co/VCpcP6W/michigan-certificate.jpg'},
  {id: 3, title: 'climb the highest.', image: 'https://i.ibb.co/6ghCVG3/css-depth.jpg'},
   {id: 4, title: 'escape.', image: 'https://i.ibb.co/bdnTJGM/ux-desing.jpg'},
   {id: 5, title: 'escape.', image: 'https://i.ibb.co/94HqxXh/React-basics.jpg'},
   {id: 6, title: 'escape.', image: 'https://i.ibb.co/tLm1P2F/advanced-react.jpg'},
   {id: 7, title: 'escape.', image: 'https://i.ibb.co/3fKbdwD/version-control.jpg'},
   {id: 8, title: 'escape.', image: 'https://i.ibb.co/ynxYdV5/javascript.jpg'},
   {id: 9, title: 'escape.', image: 'https://i.ibb.co/1RDnT42/m-html.jpg'},
   {id: 10, title: 'escape.', image: 'https://i.ibb.co/t4SrHt5/m-css.jpg'},
   {id: 11, title: 'escape.', image: 'https://i.ibb.co/jgWVD6S/m-advanced-styling.jpg'},
   {id: 12, title: 'escape.', image: 'https://i.ibb.co/QDNJpZX/m-javascript.jpg'},
   {id: 13, title: 'escape.', image: 'https://i.ibb.co/WzdSgSN/Capture2.png'},
  ]

 

function Courses (){

  const [activeIndex, setActiveIndex] = useState(0);

 

    return(
     
        <FullScreenSection 
      isDarkBackground
      backgroundColor="#222326"
       id="cards" >
        
        <Heading as='h2' id="heading" className="mt-2 mb-3" >Courses & Certeficates </Heading>
        <Box p={1}  rounded="md" w="100%" className=" p-0 p-md-1">
        <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        {data.map((card, i) => {
          return (<CarouselCard key={card.id} active={activeIndex === i}>
            <div className='carousel-card-content' style={{backgroundImage: `url("${card.image}")`}}>
              <div className='carousel-card-title'></div>
            </div>
          </CarouselCard>)
        })}
      </Carousel>
       <div className="button-group">
         <button style={{ width: "180px", height: "50px",}} type="button" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>Prev</button>
         <button style={{ width: "180px", height: "50px",}} type="button" disabled={activeIndex === data.length - 1} onClick={() => setActiveIndex(activeIndex + 1)}>Next</button>
       </div>
       </Box>
      
    </FullScreenSection>
       
    )

}

const Carousel = ({activeIndex, setActiveIndex, children}) => {
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(null);
  
  useEffect(() => {
    console.log(activeIndex)
    const initialTranslateVal = carouselRef.current.offsetWidth / 4;
    const diffAmount = initialTranslateVal * 2;
    const translate = activeIndex === 0 ? initialTranslateVal : initialTranslateVal - (activeIndex * diffAmount)
    setCarouselTranslate(translate);
  }, [activeIndex]);

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }
  
  return (
    <>
      <div className="carousel aslink" ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}} onClick={handleClick('https://rananassar2021.github.io/rana-certificates/')} >
        {children}
      </div>
      <div className="dots">
        {children.map((child, i) => <button className={`dot ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)}/>)}
      </div>
    </>
  )
}

const CarouselCard = ({active, children}) => {
  return (
    <div className={`carousel-card ${active ? 'active' : ''}`}>
      {children}
    </div>
  )
}

export default Courses;