import React from "react";
import PropTypes from "prop-types";

import Book from "../Book";
import booksData from "./booksData";

import "./Bookshelf.scss";

function Bookshelf({ setCurrentBook }) {
  return (
    <ul className="bookshelf">
      {booksData.map((book, index) => (
        <li className="bookshelf__item" key={`bookshelf-item-${index}`}>
          <Book {...book} setCurrentBook={setCurrentBook} />
        </li>
      ))}
    </ul>
  );
}

Bookshelf.propTypes = {
  setCurrentBook: PropTypes.func,
};

export default Bookshelf;
