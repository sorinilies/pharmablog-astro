export interface TPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    date: any;
    image: string;
    categories: string[];
    tags: string[];
    draft: boolean;
  };
  render: () => Promise<{ Content: any }>;
}