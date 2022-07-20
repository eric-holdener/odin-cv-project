import { useEffect, useState } from "react";
import { Forms } from "./Styles";

export default function PersonalInformation(props) {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    props.stateChanger(true);
  }

  function handlePhoneChange(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      setPhoneNumber('(' + match[1] + ') ' + match[2] + '-' + match[3]);
      return;
    }
    setPhoneNumber(cleaned);
    return;
  }

  return(
    <Forms onSubmit={e => {handleSubmit(e)}}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email"/>
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input name="phone" type="text" onChange={(e) => handlePhoneChange(e.target.value)} value={phoneNumber}/>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
    </Forms>
  )
}