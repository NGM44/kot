

export type CustomResponse<T> = {
    message: string;
    data: T;
  };
  
  interface BannerMessage {
    id: string;
    bannerMessage: string;
    showBanner: boolean;
    bannerLink: string;
  }