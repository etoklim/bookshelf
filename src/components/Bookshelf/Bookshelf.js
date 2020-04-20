import React from "react";

import Book from "../Book";

import "./Bookshelf.scss";

import booksData from "./booksData";

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

export default Bookshelf;
