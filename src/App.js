import logo from './logo.svg';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import PersonalInformation from './components/PersonalInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import { useEffect, useState } from "react";


function App() {
  const [personalInfoSubmit, setPersonalInfoSubmit] = useState(false);
  const [educationSubmit, setEducationSubmit] = useState(false);
  const [experienceSubmit, setExperienceSubmit] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  function renderComponents() {
    if (personalInfoSubmit == true && educationSubmit == true) {
      console.log(userInfo)
      return (
        <>
          <Experience stateChanger={setExperienceSubmit} setUserInfo={setUserInfo}/>
        </>
      )
    } else if (personalInfoSubmit == true){
      console.log(userInfo)
      return (
        <>
          <Education stateChanger={setEducationSubmit} setUserInfo={setUserInfo}/>
        </>
      )
    } else {
      return (
        <>
          <PersonalInformation stateChanger={setPersonalInfoSubmit} setUserInfo={setUserInfo}/>
        </>
      )
    };
  };

  return (
    <div className="App">
      <HeaderFooter>
        {renderComponents()}
      </HeaderFooter>
    </div>
  );
};

export default App;
