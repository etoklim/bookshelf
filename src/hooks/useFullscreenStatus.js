import { useLayoutEffect, useState } from "react";
import getBrowserFullscreenElementProp from "../services/getBrowserFullscreenElementProp";

function useFullscreenStatus(elRef) {
  const [isFullscreen, setIsFullscreen] = useState(
    document[getBrowserFullscreenElementProp()] != null
  );

  const setFullscreen = async () => {
    try {
      if (elRef.current == null) return;

      const result = await elRef.current.requestFullscreen();

      if (result) {
        setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);
      } else {
        setIsFullscreen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    document.onfullscreenchange = () =>
      setIsFullscreen(document[getBrowserFullscreenElementProp()] != null);

    return () => (document.onfullscreenchange = undefined);
  });

  return [isFullscreen, setFullscreen];
}

export default useFullscreenStatus;
