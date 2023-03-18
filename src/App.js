
import './App.css';
import { ChakraProvider} from '@chakra-ui/react';
import Data from './Data';
import AlignmentExample from './Nav';
import FirstSection from './Section1';
import SecondSection from './Section2';
import ThirdSection from './Section3';
import Footer from './Footer';
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
      <AlignmentExample/>
      </header>
      <div className='justify-content-center' >
      <FirstSection/>
      <SecondSection Data = {Data}/>
      <ThirdSection/>
      <Footer></Footer>
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
