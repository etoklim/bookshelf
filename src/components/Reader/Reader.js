import React, { useEffect, useState } from "react";
import ePub from "epubjs/dist/epub.min";
import "./Reader.scss";

import Book from "../../assets/alice.epub";

function Reader() {
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);
  const [bookDisplayed, setBookDisplayed] = useState(null);

  useEffect(() => {
    const newBook = ePub(Book);
    setBook(newBook);
  }, []);

  useEffect(() => {
    if (book) {
      const newRendition = book.renderTo("area");
      setRendition(newRendition);
    }
  }, [book]);

  const displayBook = async (rendition) => {
    const newBookDisplayed = await rendition.display();
    setBookDisplayed(newBookDisplayed);
  };

  useEffect(() => {
    if (rendition) {
      displayBook(rendition);
    }
  }, [rendition]);

  const goNextPage = async (e) => {
    e.preventDefault();
    rendition.next();
  };

  return (
    <div className="Reader">
      <div id="area"></div>
      <button onClick={(e) => goNextPage(e)}>NEXT</button>
    </div>
  );
}

export default Reader;
