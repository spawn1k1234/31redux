import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";
import { getFilter } from "../redux/selectors";

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Search contacts"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};
