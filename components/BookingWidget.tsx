import { useEffect, useId } from 'react';

interface BookingWidgetProps {
  width?: string;
  height?: string;
  className?: string;
}

export const BookingWidget = ({ width = "300px", height = "120px", className = "" }: BookingWidgetProps) => {
  const containerId = `booksy-widget-container-${useId()}`;

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'booksy-widget-script';
    script.src = 'https://booksy.com/widget/code.js?id=300509&country=pl&lang=pl';
    script.async = true;
    
    const initializeWidget = () => {
      if (window.Booksy) {
        try {
          window.Booksy.initButtonWidget({
            businessId: '300509',
            locale: 'pl',
          });
        } catch (error) {
          console.error('Failed to initialize Booksy widget:', error);
        }
      }
    };

    // Only add script if it doesn't exist
    if (!document.getElementById('booksy-widget-script')) {
      script.onload = initializeWidget;
      document.body.appendChild(script);
    } else {
      // If script already exists, try to initialize widget directly
      initializeWidget();
    }

    return () => {
      // Clean up script only if we added it
      const existingScript = document.getElementById('booksy-widget-script');
      if (existingScript && existingScript === script) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div 
      className={`booking-widget-container ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        display: 'block',
        background: 'transparent',
      }}
    >
      <div
        id={containerId}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'block',
        }}
      />
    </div>
  );
};
