import React from "react";
// import "./App.css"
// import "./index.css"
import items from "./data.js";
import { UilLocationPinAlt } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilFastMail } from '@iconscout/react-unicons'


export const Menu = ({}) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        <div>
        <h1>Faculty Details</h1>
    </div>
        const { _id, name, password, mobile_number, university, specialization, experience, projects, Awards_and_Honors, Industrial_experience, Publications, img, __v} = item;
        return (
          <article key={1} className="menu-item">
            <img src={"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                {/* <h4 className="Price">{Qualifications}</h4> */}
              </header>
              <h4 className="item-text"><UilPhoneAlt size = '17px' /> {mobile_number}</h4>
              <h4 className="item-text"><UilLocationPinAlt size = '17px'/>  {university}</h4>
              <h4 className="item-text"> <UilFastMail size = '28px'/>  {_id}</h4>
              <p className="item-text"><h3>Areas of Specialization</h3> {specialization}</p>
              <p className="item-text"><h3>Projects</h3> {projects}</p>
              {/* <p className="item-text"><h3>Experience</h3> {experience}</p> */}
              {/* <p className="item-text"><h3>Experience</h3> {experience}</p> */}
              <p className="item-text"><h3>Awards and Honors</h3> {Awards_and_Honors}</p>
              <p className="item-text"><h3>Industrial Experience</h3> {Industrial_experience}</p>
              <p className="item-text"><h3>Publications</h3> {Publications}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

