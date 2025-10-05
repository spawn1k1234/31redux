import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./FilterSlice";
import "./Filter.css";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <input
      className="filter"
      type="text"
      placeholder="Пошук контакту"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
}
