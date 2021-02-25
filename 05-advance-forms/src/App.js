
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css/'
// import SurveyForm from './SurveyForms'
import ContactUs from './ContactUs'
import McqQuestions from './McqQuestions'
function App() {
  return (
    <div className="container">
      <ContactUs/>
      <McqQuestions/>
    </div>
  );
}

export default App;
