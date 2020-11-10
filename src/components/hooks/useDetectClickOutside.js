import { useRef, useEffect } from "react";

const useDetectClickOutside = (submit) => {
  const inputEl = useRef(null);

  useEffect(() => {
    const handleClickOutsideInputField = (event) => {
      if (!inputEl.current.contains(event.target)) {
        submit();
      } 
    };

    document.addEventListener("click", handleClickOutsideInputField, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideInputField, true);
    };
  }, [submit]);

  return { inputEl };
};

export default useDetectClickOutside;
