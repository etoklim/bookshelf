import React from "react";
import PropTypes from "prop-types";

import {
  IconBookshelf,
  IconExpand,
  IconScrollHorizontal,
  IconMinimize,
  IconScrollVertical,
} from "../../Icons";

import "./Header.scss";

function Header({
  setCurrentBook,
  isPaginated,
  toggleFlow,
  isFullscreen,
  setIsFullscreen,
}) {
  const toggleFullScreen = () => {
    try {
      isFullscreen ? document.exitFullscreen() : setIsFullscreen();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__btn" onClick={() => setCurrentBook(null)}>
          <IconBookshelf />
        </div>
      </div>
      <div className="header__right">
        <div className="header__btn" onClick={toggleFullScreen}>
          {isFullscreen ? <IconMinimize /> : <IconExpand />}
        </div>
        <div className="header__btn" onClick={toggleFlow}>
          {isPaginated ? <IconScrollVertical /> : <IconScrollHorizontal />}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setCurrentBook: PropTypes.func,
  isPaginated: PropTypes.bool,
  toggleFlow: PropTypes.func,
  isFullscreen: PropTypes.bool,
  setIsFullscreen: PropTypes.func,
};

export default Header;
