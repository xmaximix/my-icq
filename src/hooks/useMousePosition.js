import React from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    left: null,
    top: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ left: ev.clientX, top: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;
