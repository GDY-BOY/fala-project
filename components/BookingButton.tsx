import { useEffect, useRef } from 'react';

export const BookingButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://booksy.com/widget/code.js?id=300509&country=pl&lang=pl';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.BooksyWidget) {
        window.BooksyWidget.init({
          container: '#hidden-booksy-container',
          id: 300509,
          country: 'pl',
          lang: 'pl'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    const widget = containerRef.current?.querySelector('iframe');
    if (widget) {
      (widget as HTMLElement).click();
    }
  };

  return (
    <>
      <button
        className="uslugi-btn"
        style={{
          width: "100%",
          border: "3px solid #C7A6E5",
          borderRadius: 0,
          background: "transparent",
          color: "#C7A6E5",
          fontWeight: 700,
          fontSize: "clamp(1.2rem, 4vw, 2rem)",
          padding: "clamp(0.8rem, 2vw, 1.2rem) 0",
          textAlign: "center",
          letterSpacing: "1px",
          transition: "background 0.2s, color 0.2s",
        }}
        onClick={handleClick}
      >
        ZAREZERWUJ
      </button>
      <div
        ref={containerRef}
        id="hidden-booksy-container"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          width: '100px',
          height: '100px',
        }}
      />
    </>
  );
};
