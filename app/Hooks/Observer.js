import React from "react";

const useScrollEffect = (defaultState, refArray) => {
  const [view, setView] = React.useState(defaultState);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          setView(entry.target.classList[0].toString());
        });
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    refArray.forEach((ref) => {
      observer.observe(ref);
    });
  });

  return { view };
};

export default useScrollEffect;
