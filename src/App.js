import logo from './logo.svg';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import PersonalInformation from './components/PersonalInformation';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <HeaderFooter>
        <PersonalInformation />
      </HeaderFooter>
    </div>
  );
}

export default App;
