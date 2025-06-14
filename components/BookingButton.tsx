import { useCallback, useEffect, useState } from 'react';

export const BookingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Load Booksy script only once
    const existingScript = document.getElementById('booksy-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'booksy-script';
      script.src = 'https://booksy.com/widget/code.js?id=300509&country=pl&lang=pl';
      script.async = true;

      script.onload = () => {
        if (window.Booksy) {
          window.Booksy.initButtonWidget({
            businessId: '300509',
            locale: 'pl',
          });
        }
      };

      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById('booksy-script');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleClick = useCallback(() => {
    if (window.Booksy?.ButtonWidget) {
      window.Booksy.ButtonWidget.show();
    }
  }, []);

  return (
    <button
      className="uslugi-btn"
      style={{
        width: '100%',
        border: '3px solid #C7A6E5',
        borderRadius: 0,
        background: isHovered ? '#C7A6E5' : 'transparent',
        color: isHovered ? '#fff' : '#C7A6E5',
        fontWeight: 700,
        fontSize: 'clamp(1.2rem, 4vw, 2rem)',
        padding: 'clamp(0.8rem, 2vw, 1.2rem) 0',
        textAlign: 'center',
        letterSpacing: '1px',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      ZAREZERWUJ
    </button>
  );
};
