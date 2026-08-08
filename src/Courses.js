
import { useState, useEffect, useRef } from "react";

import {
 
    Heading,
    Box,
    
  } from "@chakra-ui/react";
  import FullScreenSection from "./FullScreenSection";
import './style.css';


const data = [{id: 1, title: 'ride the waves.', image: '/images/michigan.png', link:"https://coursera.org/share/c6520da1302cd97262f068fb69556c11"},
 {id: 2, title: 'tread the unknown.', image: '/images/meta.png', link:"https://coursera.org/share/9a10a9d8dd07589016fe0953c492b4a1"},
  {id: 3, title: 'climb the highest.', image: '/images/js.png', link:"https://coursera.org/share/6c48510eb56b5dbc8a39b5fde56a55aa"},
   {id: 4, title: 'escape.', image: '/images/git.png', link:"https://coursera.org/share/7e17cae3cae0fcb6bd506fb6a3c349ae"},
   {id: 5, title: 'escape.', image: '/images/html.png', link:"https://coursera.org/share/92598d801c5f56f15696450cabe8fcaf"},
   {id: 6, title: 'escape.', image: '/images/react.png', link:"https://coursera.org/share/34f99f7edf598c28bccafbbfe32824eb" },
   {id: 7, title: 'escape.', image: '/images/advanced-react.png', link:"https://coursera.org/share/a8c3d004eb70466ef8077266e008fcce" },
   {id: 8, title: 'escape.', image: '/images/ui.png', link:"https://coursera.org/share/9782664341aa505246b8cfe6174eca9e" },
   {id: 9, title: 'escape.', image: '/images/capstone.png', link:"https://coursera.org/share/b8167a0443941f64d6528a34981d1219"},
   {id: 10, title: 'escape.',  image: '/images/interview.png', link:"https://coursera.org/share/a7b28b5c1b9f9c82866754cf42f7d719"},
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
          return (<CarouselCard key={card.id} active={activeIndex === i} link={card.link}>
            <div className='carousel-card-content' style={{backgroundImage: `url(${process.env.PUBLIC_URL}${card.image})`}}>
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

    const initialTranslateVal = carouselRef.current.offsetWidth / 4;
    const diffAmount = initialTranslateVal * 2;
    const translate = activeIndex === 0 ? initialTranslateVal : initialTranslateVal - (activeIndex * diffAmount)
    setCarouselTranslate(translate);
  }, [activeIndex]);

  useEffect(() => {
    const el = carouselRef.current;
    let lastScrollTime = 0;
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < 600) return; // one card per 600ms
      lastScrollTime = now;
      if (e.deltaY > 0 || e.deltaX > 0) {
        setActiveIndex(prev => Math.min(prev + 1, children.length - 1));
      } else {
        setActiveIndex(prev => Math.max(prev - 1, 0));
      }
    };
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [children.length, setActiveIndex]);

  return (
    <>
      <div className="carousel" ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}}>
        {children}
      </div>
      <div className="dots">
        {children.map((child, i) => <button className={`dot ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)}/>)}
      </div>
    </>
  )
}

const CarouselCard = ({active, link, children}) => {
  return (
    <div className={`carousel-card ${active ? 'active' : ''}`} onClick={() => window.open(link, '_blank')} style={{cursor: 'pointer'}}>
      {children}
    </div>
  )
}

export default Courses;