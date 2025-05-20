export interface Images {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  user: {
    name: string;
  };
  likes: number;
  links: {
    html: string;
  };
}

export interface SearchPhotos {
  results: Images[];
  total_pages: number;
}
