import logo from './logo.svg';
import './App.css';
import AreaCircle from './AreaCircle';
import AddTwo from './AddTwo';
import BMIForm from './BMIForm';

function App() {
  return (
    <div className="App">
        <h1>Calculate Area of Circle</h1>
        <AreaCircle/>
        <AddTwo/>
        <BMIForm/>
    </div>
  );
}

export default App;
