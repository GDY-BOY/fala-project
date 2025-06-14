declare interface Window {
  Booksy: {
    ButtonWidget: {
      show: () => void;
    };
    initButtonWidget: (config: {
      businessId: string;
      locale: string;
      isTestMode?: boolean;
    }) => void;
  }
}
