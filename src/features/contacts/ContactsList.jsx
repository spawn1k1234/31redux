import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "./ContactsSlice";
import { selectContacts, selectFilter } from "./selectors";
import PropTypes from "prop-types";
import "./ContactsList.css";

export default function ContactsList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter).toLowerCase();
  const dispatch = useDispatch();

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter)
  );

  if (filtered.length === 0) {
    return <p className="empty">netu kont</p>;
  }

  return (
    <ul className="list">
      {filtered.map(({ id, name, number }) => (
        <li key={id} className="item">
          <span>
            {name}: {number}
          </span>
          <button onClick={() => dispatch(deleteContact(id))}>Видалити</button>
        </li>
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
};
