import { useEffect } from 'react';

interface BookingWidgetProps {
  width?: string;
  height?: string;
  className?: string;
}

export const BookingWidget = ({ width = "100%", height = "600px", className = "" }: BookingWidgetProps) => {
  useEffect(() => {
    // Initialize Booksy widget after component mounts
    if (window.BooksyWidget) {
      window.BooksyWidget.init({
        container: '#booksy-widget-container',
        id: 300509,
        country: 'pl',
        lang: 'pl'
      });
    }
  }, []);

  return (
    <div 
      className={`booking-widget-container ${className}`}
      style={{
        width,
        height,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        id="booksy-widget-container"
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          border: 'none',
        }}
      />
    </div>
  );
};
