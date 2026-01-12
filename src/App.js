// import logo from './logo.svg';
import Hello from './Components/Example';
import Wel from "./Components/Example_class2"
import HelloWorld from './Components/HelloWorld';
import Example_S from './Components/Example_state';
import './App.css';

function App() {
  return (
    <div className='App App-header'>
      <h1>Hello React JS</h1>
        <div className='mycss'>
          <Hello name="Aditya"/>
          <Wel name="Imperial"/>
        </div>

        <div>
          <HelloWorld/>
        </div>

        <Example_S/>
    </div> 
  );
}

export default App;
