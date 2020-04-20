import React from "react";
import PropTypes from "prop-types";
import "./Book.scss";

function Book({
  author,
  title,
  textColor,
  backgroundColor,
  cover,
  epub,
  setCurrentBook,
}) {
  return (
    <div className="book">
      <div className="book__container">
        <div className="book__inner" onClick={() => setCurrentBook(epub)}>
          <div className="book__front">
            <div
              className="book__front-cover"
              style={{
                backgroundColor,
                backgroundImage: `url(${cover})`,
              }}
            />
          </div>
          <div className="book__left-side" style={{ backgroundColor }}>
            <span
              className="book__left-side-title"
              style={{ color: textColor }}
            >
              <span>{author}</span>
              <span>{title}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  cover: PropTypes.node,
  epub: PropTypes.node,
  setCurrentBook: PropTypes.func,
};

export default Book;
