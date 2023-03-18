import './App.css';
import me from './me.jpg'
function FirstSection(){
return(
 <div id='first-section' className='p-5' >
   <div className='d-flex align-items-center 
   justify-content-center' id='picture-div' >
      <img src={me} alt="Rana"  id='me'
      style={{ width: "20%", height: "20%" }} 
      className="img-fluid rounded-circle"/>
      </div>
      <div className='d-flex align-items-center p-2
      justify-content-center'>
      <h5> <em>Hey, I'm Rana</em></h5>
      
     
      </div>
      <div className='d-flex align-items-center justify-content-center mt-4' >
  <h1 id='title'>A Frontend developer specialised in React </h1>
  </div>
  <div className='d-flex align-items-center justify-content-center' >
  <p className='p-5 pb-1'>
  I am front-end web developer with strong design skills and knowledge.
                My approach to every single project is careful planning, research and testing, of an end result. Never missing a chance to learn something and get hold of new technologies.
   Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. 
                  Martin Golding 
  </p>
 
      </div>
 </div>
 

)
}
export default FirstSection;