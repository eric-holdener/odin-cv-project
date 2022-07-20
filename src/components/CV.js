export default function RenderCV(props) {
  return (
    <>
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
    </>
  )
}