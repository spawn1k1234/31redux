import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from "./constants";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
