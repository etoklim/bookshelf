import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Bookshelf from "../Bookshelf";
import Reader from "../Reader";
import Credentials from "../Credentials";

import "./App.scss";

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
          <Credentials />
          <span className="app__bookshelf-title">Classic bookshelf</span>
          <Bookshelf setCurrentBook={setCurrentBook} />
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
          <Reader url={currentBook} setCurrentBook={setCurrentBook} />
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
