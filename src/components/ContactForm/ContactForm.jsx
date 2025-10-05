import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../features/contacts/ContactsSlice";
import "./ContactForm.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((c) => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} вже є у списку`);
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
      <button type="submit">Додати</button>
    </form>
  );
}
