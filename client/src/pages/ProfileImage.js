import React, { useState } from "react";
import "./ProfileImage.css";
// import altimg from './img.jpg'
// import 'img'
// 

function ProfileImage() {
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // const handleInputChange = (event) => {
  //   setImageUrl(event.target.value);
  // };
  function uploadImage() {
    var file = document.getElementById("customFile2").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var img = document.createElement("img");
      img.onload=function()
      {
      document.getElementById("srcimg");
      }
      img.src = reader.result;
    };
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted image URL: ", imageUrl);
    console.log(`Research Interests: ${researchInterests}`);

    // TODO: Add code to update the faculty profile image
  };
  const [researchInterests, setResearchInterests] = useState("");

  return (
    <form onSubmit={handleSubmit}>
{/* 
      <fieldset className="profile">
        <legend>Update Profile Image</legend>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="image"
          // type="file"
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={handleInputChange}
          required
        />
        
      </fieldset> */}

  
      <fieldset>
        <div>
          <div className="d-flex justify-content-center mb-4">
            {/* <div id="srcimg"  style={{ width: 200 }}
 > */}
              {/* <img src={imageUrl} alt="profile image" />
      <input type="file" onChange={handleImageChange} /> */}
            <img
              // id="srcimg"
              src={imageUrl} alt="img"
              className="rounded-circle"
              // alt="example placeholder"
              style={{height:200, width: 200 }}/>
            <input
              type="file"
              className="form-control d-none"
              id="customFile2"
              onChange={handleImageChange}
              />
              </div>
          {/* </div> */}
          <div className="d-flex justify-content-center">
            <div className="btn btn-primary btn-rounded">
              <label
                className="form-label text-white m-1"
                htmlFor="customFile2"
              >
                Choose file
              </label>
              <input
                type="file"
                className="form-control d-none"
                id="customFile2"
              />
              
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Research Interests</legend>
        <div>
          <textarea
            id="researchInterests"
            value={researchInterests}
            onChange={(event) => setResearchInterests(event.target.value)}
          ></textarea>
        </div>
      </fieldset>
      <input type="submit" value="Update" onClick={uploadImage}  />
        
      {/* <button type="button" onClick={uploadImage}>
        Upload Image
      </button> */}
    </form>
  );
}

export default ProfileImage;
