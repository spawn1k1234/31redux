import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactsList from "../features/contacts/ContactsList";
import Filter from "../features/filter/Filter";

export default function App() {
  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactsList />
    </div>
  );
}
