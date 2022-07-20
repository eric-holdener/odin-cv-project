import { useEffect, useState } from "react";
import { Forms } from "./Styles";

export default function PersonalInformation() {
  const [phoneNumber, setPhoneNumber] = useState();

  function handleSubmit() {

  }

  function handlePhoneChange(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      setPhoneNumber('(' + match[1] + ') ' + match[2] + '-' + match[3]);
      return;
    }
    setPhoneNumber(null);
    return;
  }

  return(
    <Forms>
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
          <input name="phone" type="tel" onChange={(e) => handlePhoneChange(e.target.value)} value={phoneNumber}/>
        </div>
        <div>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
    </Forms>
  )
}