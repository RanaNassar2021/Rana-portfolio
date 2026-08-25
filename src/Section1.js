import './App.css';
import me from './me.jpg'
import { Wrap, WrapItem, Tooltip, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMui, SiAntdesign, SiRedux, SiReactquery } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';

const MotionWrapItem = motion(WrapItem);

const stack = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'TanStack Query', icon: SiReactquery, color: '#FF4154' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  { name: 'Ant Design', icon: SiAntdesign, color: '#0170FE' },
];

function TechStack() {
  return (
    <div className='mt-4'>
      
      <Wrap justify='center' spacing='4' className=' mt-2'>
        {stack.map(({ name, icon: Icon, color }) => (
          <Tooltip key={name} label={name} hasArrow placement='top'>
            <MotionWrapItem
              className='tech-badge'
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              whileHover={{ scale: 1.15, y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon size='2em' color={color} />
              <Text className='tech-label'>{name}</Text>
            </MotionWrapItem>
          </Tooltip>
        ))}
      </Wrap>
    </div>
  );
}

function FirstSection(){
return(
  <>
 <div id='first-section' className='p-5' >
   <div className='d-flex align-items-center 
   justify-content-center' id='picture-div' >
      <img src={me} alt="Rana"  id='me'
      style={{ width: "20%", height: "20%" }} 
      className="img-fluid rounded-circle"/>
      </div>
       
      <div className='d-flex align-items-center p-2
      justify-content-center '>
      <h5> <em> Hey, I'm Rana</em></h5>
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4 ' >
  <h1 id='title'>A Frontend developer specialised in React </h1>
  </div>

  <div className='d-flex  text-center p-1 pt-2' >
  I am front-end web developer with strong design skills and knowledge.
                My approach to every single project is careful planning, research and testing, 
                of an end result. Never missing a chance to learn something and get hold of new 
                technologies.
                </div>
         <div className='d-flex align-items-center justify-content-center mt-2 '>
            <figure>
              <em>
             <i class="fa-sharp fa-solid fa-quote-left m-2"></i>
             
   Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. 
    <i class="fa-sharp fa-solid fa-quote-right m-2"></i>
   </em>
                  <figcaption className=" blockquote-footer text-end mt-2 text-light ">
                  Martin Golding 
                   </figcaption>
                   </figure>
                   </div>
                   <TechStack/>
                  </div>    
                 
                  </>

 

)
}
export default FirstSection;