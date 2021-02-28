
import './App.css';
// import CircleForm from './CircleForm'
// import AddTwo from './AddTwo'
// import CalcBMI from './CalcBMI'
// import CalcGST from './CalcGST'
import UserForm from './UserForm'
import SurveyForms from './SurveyForms'


function App() {
  return (
    <div className="App">
      {/* <CircleForm/> */}
      {/* <AddTwo/> */}
      {/* <CalcBMI/> */}
      {/* <CalcGST/> */}
      <SurveyForms/>
      <div>
          <h2>User Forms: </h2>
          <UserForm/>
      </div>
      
    </div>
  );
}

export default App;
