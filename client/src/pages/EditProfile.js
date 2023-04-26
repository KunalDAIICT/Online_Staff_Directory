import React, { useState } from "react";

function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setspecialization] = useState("");
  const [Mobile, setMobile] = useState("");
  const [University, setUniversity] = useState("");
  const [Experience, setExperience] = useState("");
  // const [researchInterests, setResearchInterests] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`specialization: ${specialization}`);
    console.log(`Mobile: ${Mobile}`);
    console.log(`University: ${University}`);
    console.log(`Experience: ${Experience}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Edit profile</legend>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <label htmlFor="specialization">specialization:</label>
            <select
              id="specialization"
              value={specialization}
              onChange={(event) => setspecialization(event.target.value)}
            >
              <option value="">Select a specialization</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div>
            <label htmlFor="mobile">Mobile No:</label>
            <input
              type="number"
              id="Mobile"
              value={Mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <label htmlFor="University">University:</label>
            <input
              type="text"
              id="University"
              value={University}
              onChange={(event) => setUniversity(event.target.value)}
            />
            
          </div>
          <div>
            <label htmlFor="Experience">Experience:</label>
            <input
              type="number"
              id="Experience"
              value={Experience}
              onChange={(event) => setExperience(event.target.value)}
            />
            
          </div>
        </div>
          
      </fieldset>

      <input type="submit" value="Save Changes" />
    </form>
  );
}

export default EditProfile;
