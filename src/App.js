import React from "react";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";

function App() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
