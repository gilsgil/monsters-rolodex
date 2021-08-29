import React from "react";
import "./search-box.css";
import {TextField, Container } from "@material-ui/core";

function SearchBox({ placeholder, handleChange }) {
  return (
    <Container maxWidth="sm" id="search-container">
      <TextField
        variant="outlined"
        id="search-field"
        fullWidth
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
}

export default SearchBox;
