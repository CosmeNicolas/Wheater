import './Components/App.css';
import NavBar from "./Components/NavBar";
import WeatherPanel from './Components/WeatherPanel'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='nube1'></div>
      <div className='nube2'></div>
      <div className='nube3'></div>
      <div className='nube4'></div>
      <div className='nube5'></div>
      <div className='nube6'></div>
      <div className='nube7'></div>
      <div className='nube8'></div>
      <div className='nube9'></div>
      <div className='nube10'></div>
      <WeatherPanel/>
    </div>
  );
}

export default App;
