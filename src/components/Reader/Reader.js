import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { EpubView } from "react-reader";

import Header from "./Header";
import RangeSlider from "../RangeSlider";

import useFullscreenStatus from "../../hooks/useFullscreenStatus";

import IconArrowLeft from "../Icons/IconArrowLeft";

import "./Reader.scss";

function Reader({ url, setCurrentBook }) {
  const [rendition, setRendition] = useState(null);
  const [book, setBook] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [flow, setFlow] = useState("paginated");

  const isPaginated = flow && flow === "paginated";
  const isBookReady = rendition && book && currentLocation;

  const readerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useFullscreenStatus(readerRef);

  useEffect(() => {
    if (rendition) {
      if (rendition.themes && rendition.themes.default) {
        try {
          // Overriding default theme to avoid red text in paragraphs on hover
          rendition.themes.default({ "a[id]:hover": { color: "black" } });
        } catch (err) {
          console.log(err);
        }
      }

      if (rendition.book) {
        setBook(rendition.book);
      }
    }
  }, [rendition]);

  useEffect(() => {
    return () => {
      setRendition(null);
      setBook(null);
    };
  }, []);

  const handlePageSwitch = (type) => {
    try {
      switch (type) {
        case "prev":
          return rendition.prev();
        case "next":
          return rendition.next();
        default:
          return rendition.next();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFlow = () => {
    setFlow(isPaginated ? "scrolled" : "paginated");
  };

  useEffect(() => {
    if (rendition && flow) {
      try {
        // Toggling book flow (horizontal and paginated / vertical and scrolled)
        rendition.flow(flow);
      } catch (err) {
        console.log(err);
      }
    }
  }, [rendition, flow]);

  return (
    <section className="reader" ref={readerRef}>
      <Header
        setCurrentBook={setCurrentBook}
        isPaginated={isPaginated}
        toggleFlow={toggleFlow}
        isFullscreen={isFullscreen}
        setIsFullscreen={setIsFullscreen}
      />
      <main className="reader__main">
        {isPaginated && (
          <div
            className="reader__pagination reader__pagination--prev"
            onClick={() => handlePageSwitch("prev")}
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
            onClick={() => handlePageSwitch("next")}
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

Reader.propTypes = {
  url: PropTypes.node,
  setCurrentBook: PropTypes.func,
};

export default Reader;
