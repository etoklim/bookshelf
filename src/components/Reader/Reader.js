import React, { useEffect, useRef, useState } from "react";
import { EpubView } from "react-reader";

import AliceBook from "../../assets/books/london_call/london_call.epub";
import IconArrowLeft from "../Icons/IconArrowLeft";
import { IconScrollHorizontal, IconScrollVertical } from "../Icons";
import RangeSlider from "../RangeSlider";

import "./Reader.scss";

function Reader({ url }) {
  const [rendition, setRendition] = useState(null);
  const [book, setBook] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [flow, setFlow] = useState("paginated");

  const isPaginated = flow && flow === "paginated";
  const isBookReady = rendition && book && currentLocation;

  useEffect(() => {
    if (rendition && rendition.book) {
      setBook(rendition.book);
    }
  }, [rendition]);

  const goNextPage = () => {
    if (rendition) {
      rendition.next();
    }
  };

  const goPrevPage = () => {
    if (rendition) {
      rendition.prev();
    }
  };

  const toggleFlow = () => {
    setFlow(isPaginated ? "scrolled" : "paginated");
  };

  useEffect(() => {
    if (rendition && flow) {
      rendition.flow(flow);
    }
  }, [flow]);

  useEffect(() => {
    if (rendition) {
      // Overriding default theme to avoid red text in paragraphs on hover
      rendition.themes.default({ "a[id]:hover": { color: "black" } });
    }
  }, [rendition]);

  return (
    <section className="reader">
      <header className="reader__header">
        <nav className="reader__header-nav">
          <div className="reader__header-left"></div>
          <div className="reader__header-right">
            <div className="reader__header-btn" onClick={toggleFlow}>
              {isPaginated ? <IconScrollVertical /> : <IconScrollHorizontal />}
            </div>
          </div>
        </nav>
      </header>
      <main className="reader__main">
        {isPaginated && (
          <div
            className="reader__pagination reader__pagination--prev"
            onClick={goPrevPage}
          >
            <IconArrowLeft />
          </div>
        )}

        <div
          className={`reader__content ${
            isPaginated
              ? "reader__content--paginated"
              : "reader__content--scrolled"
          } ${isBookReady ? "reader__content--shown" : ""}`}
        >
          <EpubView
            url={url}
            epubOptions={{
              manager: "continuous",
            }}
            getRendition={(rendition) => setRendition(rendition)}
            locationChanged={(epubcifi) => setCurrentLocation(epubcifi)}
          />
        </div>
        {isPaginated && (
          <div
            className="reader__pagination reader__pagination--next"
            onClick={goNextPage}
          >
            <IconArrowLeft />
          </div>
        )}
      </main>
      <footer className="reader__footer">
        <RangeSlider
          book={book}
          currentLocation={currentLocation}
          rendition={rendition}
        />
      </footer>
    </section>
  );
}

export default Reader;
