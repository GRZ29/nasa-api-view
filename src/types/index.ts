//this two types are for api general response
export type ImagesData = {
      collection: {
        href: string;
        items: ImageDataItem[];
        links: {
          href: string;
          prompt: string;
          rel: string;
        }[];
        metadata: {
          total_hits: number;
        };
        version: string;
      };
    };

export interface ImageDataItem {
  data: {
    center: string;
    date_created: string;
    description: string;
    description_500: string;
    keywords: string[];
    media_type: string;
    nasa_id: string;
    secondary_creator: string;
    title: string;
  }[];
  href: string;
  links: { href: string; rel: string; render: string }[];
}

//indivual images data
export type ImageItemData = {
      href: string;
      images: {
        href: string;
        items: {
          href: string;
        }[];
        version: string;
      };
      items: ImageDataItem[];
      metadata: {
        total_hits: number;
      };
      version: string;
    };
