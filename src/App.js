import logo from './logo.svg';
import './App.css';
import vail from './vail.mp4';
import gshit from './gshit.mp3';
function App() {
  return (
    <div className="App">
      


      <video controls>
  <source src={vail} type="video/mp4" />
  
  Your browser does not support the video tag.
</video>


<audio controls>
  <source src={gshit} type="audio/ogg"/>
  
  Your browser does not support the audio element.
</audio>

    </div>
  );
}

export default App;
