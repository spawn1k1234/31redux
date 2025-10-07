export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

export const getFilteredContacts = (state) => {
  const filter = state.filter.toLowerCase();
  return state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
