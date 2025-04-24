import { useState, useEffect } from "react";

type FontSizeType = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  body: string;
  small: string;
  button: string;
  caption: string;
};

export const useResponsiveFontSize = () => {
  const [fontSize, setFontSize] = useState<FontSizeType>({
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    body: "text-base",
    small: "text-sm",
    button: "text-sm",
    caption: "text-xs"
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 360) {
        setFontSize({
          h1: "text-2xl",
          h2: "text-xl",
          h3: "text-lg",
          h4: "text-base",
          body: "text-sm",
          small: "text-xs",
          button: "text-xs",
          caption: "text-[10px]"
        });
      } else if (width < 640) {
        setFontSize({
          h1: "text-3xl",
          h2: "text-2xl",
          h3: "text-xl",
          h4: "text-lg",
          body: "text-base",
          small: "text-sm",
          button: "text-sm",
          caption: "text-xs"
        });
      } else if (width < 768) {
        setFontSize({
          h1: "text-4xl",
          h2: "text-3xl",
          h3: "text-2xl",
          h4: "text-xl",
          body: "text-lg",
          small: "text-base",
          button: "text-base",
          caption: "text-sm"
        });
      } else if (width < 1024) {
        setFontSize({
          h1: "text-5xl",
          h2: "text-4xl",
          h3: "text-3xl",
          h4: "text-2xl",
          body: "text-xl",
          small: "text-lg",
          button: "text-lg",
          caption: "text-base"
        });
      } else {
        setFontSize({
          h1: "text-6xl",
          h2: "text-5xl",
          h3: "text-4xl",
          h4: "text-3xl",
          body: "text-2xl",
          small: "text-xl",
          button: "text-xl",
          caption: "text-lg"
        });
      }
    };

    // Adiciona debounce para melhor performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    handleResize();
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return fontSize;
}; 