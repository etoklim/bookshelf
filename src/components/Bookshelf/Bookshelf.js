import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.scss";
import Reader from "../Reader";
import Book from "../Book";

import AliceImg from "../../assets/books/carroll_alice/carroll_alice.jpg";
import AliceBook from "../../assets/books/austen_pride/austen_pride.epub";

function App() {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <div className="app">
      <CSSTransition
        in={!Boolean(currentBook)}
        timeout={500}
        classNames="css-transition"
        mountOnEnter
        unmountOnExit
      >
        <div className="app__bookshelf">
          <Book
            author="Lewis Carroll"
            title="Alice's Adventures in Wonderland"
            bgColor="#90c8ed"
            coverImage={AliceImg}
            onItemClick={() => setCurrentBook(AliceBook)}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={Boolean(currentBook)}
        timeout={500}
        classNames="css-transition"
        mountOnEnter
        unmountOnExit
      >
        <div className="app__reader">
          <Reader url={currentBook} />
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
