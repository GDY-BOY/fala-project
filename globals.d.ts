export {};

declare global {
  interface Window {
    BooksyWidget?: {
      open: () => void;
    };
  }
}