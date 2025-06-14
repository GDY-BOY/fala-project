import { useCallback, useEffect, useState } from 'react';

export const BookingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeBooksy = () => {
      if (window.Booksy) {
        try {
          window.Booksy.initButtonWidget({
            businessId: '300509',
            locale: 'pl',
          });
          setIsInitialized(true);
        } catch (error) {
          console.error('Failed to initialize Booksy:', error);
        }
      }
    };

    const script = document.createElement('script');
    script.src = 'https://booksy.com/widget/code.js?id=300509&country=pl&lang=pl';
    script.async = true;
    script.onload = initializeBooksy;

    if (!document.querySelector('script[src*="booksy.com/widget/code.js"]')) {
      document.body.appendChild(script);
    } else {
      initializeBooksy();
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleClick = useCallback(() => {
    if (window.Booksy?.ButtonWidget?.show) {
      window.Booksy.ButtonWidget.show();
    } else {
      console.error('Booksy widget not initialized');
      // Fallback to direct URL
      window.open('https://booksy.com/pl-pl/300509_fala-fizjo_massage_3_gdynia', '_blank');
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
