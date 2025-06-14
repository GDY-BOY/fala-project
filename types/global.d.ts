interface Window {
  BooksyWidget?: {
    init: (config: {
      container: string;
      id: number;
      country: string;
      lang: string;
    }) => void;
  };
}
