
import './App.css';
import Calculator from './Components/Calculator';

function App() {
  return (
    <>
         <button className='bu'></button>
         <button className='bu2'></button>
         <button className='bu3'></button>
         <button className='bu4'></button>
         <img  className='group1' src={require('./group1.png')} />
         <img  className='group2' src={require('./group1.png')} />
    <Calculator />
    </>
  );
}

export default App;
