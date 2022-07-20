import { useState } from "react";
import { Forms } from "./Styles";

export default function Education(props) {
  const [school, setSchool] = useState();
  const [degree, setDegree] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  function handleSubmit(e) {
    let placeholder = {}
    props.setUserInfo(prevState => {
      for (const [key, value] of Object.entries(prevState)) {
        placeholder[key] = value;
      };
      placeholder["school"] = school;
      placeholder["degree"] = degree;
      placeholder["startYear"] = startYear;
      placeholder["endYear"] = endYear;
    })
    props.setUserInfo(placeholder);
    props.stateChanger(true);
  };

  return (
    <Forms onSubmit={e => {handleSubmit(e)}}>
      <div>
        <label htmlFor="school">School</label>
        <input name="school" type="text" onChange={(e) => setSchool(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="degree">Degree</label>
        <input name="degree" type="text" onChange={(e) => setDegree(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="startYear">Start Year</label>
        <input name="startYear" type="text" onChange={(e) => setStartYear(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="endYear">End Year</label>
        <input name="endYear" type="text" onChange={(e) => setEndYear(e.target.value)}/>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </Forms> 
  )
}