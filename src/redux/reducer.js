import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from "./constants";

const initialState = {
  contacts: [],
  filter: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
