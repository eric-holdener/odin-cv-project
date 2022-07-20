import { Forms } from "./Styles";
import { useState } from "react";

export default function Experience(props) {
  const [company, setCompany] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function handleSubmit(e) {
    let placeholder = {}
    props.setUserInfo(prevState => {
      for (const [key, value] of Object.entries(prevState)) {
        placeholder[key] = value;
      };
      placeholder["company"] = company;
      placeholder["title"] = title;
      placeholder["description"] = description;
      placeholder["startDate"] = startDate;
      placeholder["endDate"] = endDate;
    })
    props.setUserInfo(placeholder);
    props.stateChanger(true);
  }

  return(
    <Forms onSubmit={e => {handleSubmit(e)}}>
        <div>
          <label htmlFor="company">Company</label>
          <input name="company" type="text" onChange={(e) => setCompany(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="description">Job Description</label>
          <input name="description" type="text" onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input name="startDate" type="date" onChange={(e) => setStartDate(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input name="endDate" type="date" onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
    </Forms>
  )
}