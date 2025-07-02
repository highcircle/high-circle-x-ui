import { ReactNode } from "react";

export enum EFAQCategory {
  Investing = "ivs-investing",
  HighCircleVenture = "high-circle-venture",
  VentureCapital = "high-circle-venture",
}

export interface IFAQ {
  id: number;
  attributes: {
    category: EFAQCategory;
    title: string;
    detail: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface IGetFAQsResponse {
  data: IFAQ[];
}

export interface IDynamicWebsiteData {
  id: number;
  data: {
    contact_us_email: string;
    contact_us_phone: string;
    contact_us_address: string;
    footer_items: string[];
  };
}

export interface IPerson {
  id: number;
  attributes: {
    name: string;
    title: string;
    linkedInUrl?: string;
    category?: string;
    imageurl: {
      data: [
        {
          id: string;
          attributes: {
            formats: {
              small: {
                url: string;
              };
              medium: {
                url: string;
              };
              thumbnail: {
                url: string;
              };
            };
          };
        }
      ];
    };
  };
}

export interface IGetDynamicWebsiteDataResponse {
  data: IDynamicWebsiteData[];
}

export interface IGetTeamMembersResponse {
  data: IPerson[];
}

export interface IGetListingsResponse {
  data: IListing[];
}

export interface IListing {
  id: number;
  listings: {
    listings: IListingDetails[];
  };
}

export interface IListingDetails {
  deal_name: string;
  html_redirect?: string;
  portal_redirect?: string;
  social_media_link?: string;
  social_media_link_title?: string;
  social_media_link_output_path?: string;
  create_html?: boolean;
  button_text?: string;
  status: string;
  details: string[];
  category: string;
  location: string;
  photo_links: string[];
  typeform_link?: string;
  featured?: boolean;
  transparent_logo?: string;
  offer_open?: boolean;
  index?: number;
}

export interface IGetPressListingsResponse {
  data: IPressListings[];
}

export interface IPressListings {
  id: number;
  hcv_press_json: {
    press_listings: IPressListing[];
  };
}

export interface IPressListing {
  sorting_id: number;
  date: string;
  press_listing_image: string;
  press_title: string;
  press_desc: string;
  press_redirect_link: string;
}

export interface IGetEventListingsResponse {
  data: IEventListings[];
}

export interface IEventListings {
  id: number;
  hcv_events: {
    event_listings: IEventListing[];
  };
}

export interface IEventListing {
  sorting_id: number;
  name: string;
  date: string;
  upcoming: boolean;
  read_time: string;
  read_avatar: string;
  video_link: string;
  video_thumbnail: string;
  photo_links: string[];
  listing_image: string;
  full_description: string[];
  listing_details: string[];
}

export interface IGetUpdatesListingsResponse {
  data: IUpdatesListings[];
}

export interface IUpdatesListings {
  id: number;
  hcv_updates_json: {
    updates_listings: IUpdatesListing[];
  };
}

export interface IUpdatesListing {
  index: number;
  update_section: number;
  show_both?: boolean;
  spvname: string;
  only_Investers: boolean;
  image_links?: string[];
  dealname?: string;
  update_date: string;
  update_author?: string;
  update_read_time?: string;
  update_document_link?: string[];
  update_title: string;
  update_title_desc?: string;
}

export interface IGetNewsListingsResponse {
  data: INewsListings[];
}

export interface INewsListings {
  id: number;
  hcv_news_json: {
    news_listings: INewsListing[];
  };
}

export interface INewsListing {
  index: number;
  news_link: string;
  image_links?: string[];
  news_date?: string;
  news_title?: string;
  news_author?: string;
  news_read_time?: string;
}

export interface IGetQuickLinksResponse {
  data: IQuickLinks[];
}

export interface IQuickLinks {
  id: number;
  admin_quick_link: {
    quicklink_listings: IQuickLinksListing[];
  };
}

export interface IQuickLinksListing {
  name: string;
  description: string;
  link: string;
}