import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "react-input-range/lib/css/index.css";

import InputRange from "react-input-range";

import "./RangeSlider.scss";

function RangeSlider({ book, currentLocation, rendition }) {
  const [locations, setLocations] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const generateLocations = async (locations) => {
    try {
      // Generating array of chapters
      const locationsGenerated = await locations.generate();
      setLocations(locationsGenerated);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (book && book.locations && !locations) {
      generateLocations(book.locations);
    }
  }, [book]);

  useEffect(() => {
    // Listening for location changes and updating slider position
    if (currentLocation && book && book.locations && locations && !isDragging) {
      try {
        const currentPercent =
          book.locations.percentageFromCfi(currentLocation) * 100;
        setRangeValue(parseInt(currentPercent));
      } catch (err) {
        console.log(err);
      }
    }
  }, [currentLocation]);

  const onChangeStart = () => {
    setIsDragging(true);
  };

  const onChange = (value) => {
    setRangeValue(value);
  };

  const onChangeComplete = (value) => {
    // Updating location on slider position change
    if (rendition && book && book.locations) {
      try {
        const cfi = book.locations.cfiFromPercentage(rangeValue / 100);
        rendition.display(cfi);
      } catch (err) {
        console.log(err);
      }
    }

    // setTimeout to avoid jumping from slider position %
    // to location cfi % after slider dragging
    setTimeout(() => {
      setIsDragging(false);
    }, 500);
  };

  return (
    <div className="range-slider">
      <InputRange
        formatLabel={(value) => `${value}%`}
        minValue={0}
        maxValue={100}
        value={rangeValue}
        onChangeStart={onChangeStart}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        disabled={!locations}
      />
    </div>
  );
}

RangeSlider.propTypes = {
  book: PropTypes.object,
  currentLocation: PropTypes.string,
  rendition: PropTypes.object,
};

export default memo(RangeSlider);
