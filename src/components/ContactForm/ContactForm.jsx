import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../features/contacts/ContactsSlice";
import { selectContacts } from "../../features/contacts/selectors";
import PropTypes from "prop-types";
import "./ContactForm.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const exists = contacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      alert(`${name} est`);
      return;
    }
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button type="submit">add</button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
