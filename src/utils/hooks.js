import React from "react";

function useChatScroll() {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });
  return ref;
}

export { useChatScroll };
