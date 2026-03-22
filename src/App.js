// // import logo from './logo.svg';
// import Hello from './Components/Example';
// import Wel from "./Components/Example_class2"
// import HelloWorld from './Components/HelloWorld';
// import ExampleS from './Components/Example_state';
// import Counter from "./Components/State";
// import Marks from "./Components/Marks_Class";
// // import Text from "./Components/Input_Class;"
// // import CountHooks from "./Components/Example_hook";
// import PractH from "./Components/Pract_Hook";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import DigitalC from "./Components/Digital_Clock";
import Navigation from "./Components/Navigation";

// import Display from './index';

// import Display from './Components/Practice1';
import EvenOdd from './Components/EvenOdd';

// import AutoCounter from './Components/CounterSec';

// import './App.css';

function App() {
  return (
    // <div className='App App-header'>


    //     <div>
    //       <HelloWorld/>
    //     </div>
    //       ------------------------------------------------------------- 

    //     <div className='mycss'>
    //       <Hello name="Aditya"/>
    //       <Wel name="Imperial"/>
    //     </div>

    //       -------------------------------------------------------------

    //     <ExampleS/>
    //       -------------------------------------------------------------

    //     <Counter/>
    //       -------------------------------------------------------------

    //     <Marks/>

    //       -------------------------------------------------------------

    //     {/* <Text/> */}

    //       -------------------------------------------------------------
        
    //     {/* <CountHooks/> */}
    //     <PractH/>
    //       -------------------------------------------------------------

    //       <DigitalC/>

    //       -------------------------------------------------------------
    //       {/* <Display/> */}

    // </div> 


    <>
      {/* <Display name="Aditya"/> */}
      {/* <EvenOdd/> */}
      {/* <AutoCounter/> */}


    <BrowserRouter>

    <Navigation/>

      <Routes>
          <Route path="/" element={<DigitalC/>}/>
          <Route path="/evenodd" element={<EvenOdd/>}/>
      </Routes>


    </BrowserRouter>    


    </>
  );
}

export default App;
