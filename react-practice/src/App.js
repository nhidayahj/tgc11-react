import './App.css';
import SayGoodbye from './SayGoodbye';
import NumBox from './NumBox';
import ImageSwitcher from './ImageSwitcher'

// initializing function outside 
function onStart() {
    return(<h2>Welcome to React!</h2>)
}

function App() {
  return (
    <div className="App">
        {onStart()}
        <SayGoodbye person="Heydi" bgColor="blue" fontColor="white"/>
        <SayGoodbye person="Sarah" bgColor="orange"/>
        <NumBox initialValue={5}/>
        <ImageSwitcher/>
        
    </div>
  );
}

export default App;
