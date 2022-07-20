import { FinalCV } from "./Styles"

export default function RenderCV(props) {
  return (
    <FinalCV>
      <div>
        <h2>First Name:</h2>
        <p>{props.userInfo.firstName}</p>
      </div>
      <div>
        <h2>Last Name:</h2>
        <p>{props.userInfo.lastName}</p>
      </div>
      <div>
        <h2>Email:</h2>
        <p>{props.userInfo.email}</p>
      </div>
      <div>
        <h2>Phone Number:</h2>
        <p>{props.userInfo.phone}</p>
      </div>
      <div>
        <h2>School:</h2>
        <p>{props.userInfo.school}</p>
      </div>
      <div>
        <h2>Degree:</h2>
        <p>{props.userInfo.degree}</p>
      </div>
      <div>
        <h2>Start Year:</h2>
        <p>{props.userInfo.startYear}</p>
      </div>
      <div>
        <h2>End Year:</h2>
        <p>{props.userInfo.endYear}</p>
      </div>
      <div>
        <h2>Company:</h2>
        <p>{props.userInfo.company}</p>
      </div>
      <div>
        <h2>Title:</h2>
        <p>{props.userInfo.title}</p>
      </div>
      <div>
        <h2>Description</h2>
        <p>{props.userInfo.description}</p>
      </div>
      <div>
        <h2>Start Date:</h2>
        <p>{props.userInfo.startDate}</p>
      </div>
      <div>
        <h2>End Date:</h2>
        <p>{props.userInfo.endDate}</p>
      </div>
    </FinalCV>
  )
}