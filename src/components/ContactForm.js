import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/actions";
import { getContacts } from "../redux/selectors";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((c) => c.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: nanoid(), name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
