import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "../features/contacts/ContactsList";
import Filter from "../features/filter/Filter";

export default function App() {
  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <h1>CONACT</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}
