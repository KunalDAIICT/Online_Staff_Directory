import React from "react";
import "../App.css"
import "../index.css"
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
        const { id, title, Qualifications, Phone, location, email, img, research } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="Price">{Qualifications}</h4>
              </header>
              <h4 className="item-text"><UilPhoneAlt size = '17px' /> {Phone}</h4>
              <h4 className="item-text"><UilLocationPinAlt size = '17px'/>  {location}</h4>
              <h4 className="item-text"> <UilFastMail size = '28px'/>  {email}</h4>
              <p className="item-text"><h3>Areas of Research</h3> {research}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

