export interface TBlog {
    _id: string;
    title: string;
    short_description: string;
    long_description: string;
    image: string;
    author: {
      email: string;
      image: string;
      name: string;
    };
  }