import React from "react";
import Contact from "./Contact";

function ContactList(props) {
  console.log("Now I'm in ContactList");
  return (
    <div>
      {/* {props.contacts.map(c => (
        <Contact key={c.key} race={c.race} name={c.name} year={c.birthYear} />
      ))} */}
    </div>
  );
}

export default ContactList;
