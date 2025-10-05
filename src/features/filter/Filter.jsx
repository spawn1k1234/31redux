import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./FilterSlice";
import PropTypes from "prop-types";
import "./Filter.css";

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <input
      className="filter"
      type="text"
      placeholder="search"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};
