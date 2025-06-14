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
    script.src = 'https://booksy.com/widget/code.js?id=300509&country=pl&lang=pl';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.BooksyWidget) {
        window.BooksyWidget.init({
          container: `#${containerId}`,
          id: 300509,
          country: 'pl',
          lang: 'pl'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [containerId]);

  return (
    <div 
      className={`booking-widget-container ${className}`}
      style={{
        width,
        height,
        position: 'relative',
        display: 'block',
        background: '#F8F4F1',
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
