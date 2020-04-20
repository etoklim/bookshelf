import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Bookshelf from "../Bookshelf";
import Reader from "../Reader";

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
          <Reader url={currentBook} />
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
