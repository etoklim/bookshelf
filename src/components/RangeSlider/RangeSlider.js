import React, { memo, useEffect, useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";
import "./RangeSlider.scss";

function RangeSlider({ book, currentLocation, rendition }) {
  const [locations, setLocations] = useState(null);
  const [rangeValue, setRangeValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const generateLocations = async (locations) => {
    // Generating array of chapters
    const locationsGenerated = await locations.generate();
    setLocations(locationsGenerated);
  };

  useEffect(() => {
    if (book && book.locations && !locations) {
      generateLocations(book.locations);
    }
  }, [book]);

  useEffect(() => {
    // Listening for location changes and updating slider position
    if (currentLocation && book && book.locations && locations && !isDragging) {
      const currentPercent =
        book.locations.percentageFromCfi(currentLocation) * 100;
      setRangeValue(parseInt(currentPercent));
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
      const cfi = book.locations.cfiFromPercentage(rangeValue / 100);
      rendition.display(cfi);
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

export default memo(RangeSlider);
