import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "./ContactsSlice";
import "./ContactsList.css";

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter.toLowerCase());

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter)
  );

  return (
    <ul className="list">
      {filtered.map(({ id, name, number }) => (
        <li key={id} className="item">
          {name}: {number}
          <button onClick={() => dispatch(deleteContact(id))}>✖</button>
        </li>
      ))}
    </ul>
  );
}
