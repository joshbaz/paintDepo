import { useState, useEffect, useCallback } from "react";

export const useDetectOutsideClick = (ref, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  const handlePageClick = useCallback(
    (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsActive((prevState) => !prevState);
      }
    },
    [ref]
  );

  useEffect(() => {
    if (isActive) {
      window.addEventListener("click", handlePageClick);
    }

    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, [isActive, handlePageClick]);

  return [isActive, setIsActive];
};
