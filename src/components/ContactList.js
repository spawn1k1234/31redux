import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "../redux/selectors";
import { removeContact } from "../redux/actions";

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(removeContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
