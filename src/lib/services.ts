import axios from "axios";
import {
  EFAQCategory,
  IGetDynamicWebsiteDataResponse,
  IGetFAQsResponse,
  IGetListingsResponse,
  IGetTeamMembersResponse,
  IGetQuickLinksResponse,
  IGetPressListingsResponse,
  IGetEventListingsResponse,
  IGetUpdatesListingsResponse,
  IGetNewsListingsResponse,
  IFAQ,
} from "./types";
import { STRAPI_URL_NEW } from "./helpers";
import { useContentStore, useEventListingsStore, useListingsStore, useNewsListingsStore, usePressListingsStore, useQuickLinksStore, useUpdatesListingsStore } from "@/store/strapiStore";

export const getDynamicWebsiteData =
  async (): Promise<IGetDynamicWebsiteDataResponse> => {
    if (
      Object.values(useContentStore.getState().content.data).some(
        (val) => val === ""
      )
    ) {
      const response = await fetch(
        `${STRAPI_URL_NEW}/investment-website-dynamic-data`
      );
      const json: IGetDynamicWebsiteDataResponse = await response.json();
      return new Promise((resolve, reject) => {
        if (json.data) {
          useContentStore.setState({ content: json.data[0] });
          resolve(json);
        } else {
          reject(new Error(`Unable to fetch dynamic website data`));
        }
      });
    }
    return new Promise((resolve) => {
      resolve({ data: [useContentStore.getState().content] });
    });
  };

export const getAllTeamMembers = async (): Promise<IGetTeamMembersResponse> => {
  const response = await fetch(
    `${STRAPI_URL_NEW}/hcv-investment-website-teams?populate=imageurl`
  );
  const rawJson = await response.json();

  const isNewFormat = rawJson?.data?.[0]?.name !== undefined; // flat format check

  const transformedData = isNewFormat
    ? rawJson.data.map((item: any) => ({
        id: item.id,
        attributes: {
          name: item.name,
          title: item.title,
          linkedInUrl: item.linkedInUrl,
          category: item.category,
          imageurl: {
            data: [
              {
                id: item.imageurl?.id,
                attributes: {
                  formats: item.imageurl?.formats ?? {},
                },
              },
            ],
          },
        },
      }))
    : rawJson.data;

  return new Promise((resolve, reject) => {
    if (transformedData) {
      resolve({ data: transformedData });
    } else {
      reject(new Error("Unable to fetch team members"));
    }
  });
};

export const getFAQs = async (
  category?: EFAQCategory
): Promise<IGetFAQsResponse> => {
  const response = await fetch(
    `${STRAPI_URL_NEW}/hcv-highcircle-faqs${
      category ? `?filters[category][$eq]=${category}` : ""
    }`
  );

  const json = await response.json();

  const transformed: IFAQ[] = json.data.map((item: any) => ({
    id: item.id,
    attributes: {
      category: item.category,
      title: item.title,
      detail: item.detail,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
    },
  }));

  return { data: transformed };
};

export const getListings = async (): Promise<IGetListingsResponse> => {
  const response = await fetch(`${STRAPI_URL_NEW}/highcircleventure-listings`);
  const json: IGetListingsResponse = await response.json();
  return new Promise((resolve, reject) => {
    if (json.data) {
      useListingsStore.setState({ listings: json.data });
      resolve(json);
    } else {
      reject(new Error(`Unable to fetch listings`));
    }
  });
};

export const getPressListings =
  async (): Promise<IGetPressListingsResponse> => {
    const response = await fetch(`${STRAPI_URL_NEW}/hcv-presses`);
    const json: IGetPressListingsResponse = await response.json();
    return new Promise((resolve, reject) => {
      if (json.data) {
        usePressListingsStore.setState({ press_listings: json.data });
        resolve(json);
      } else {
        reject(new Error(`Unable to fetch press listings`));
      }
    });
  };

export const getEventListings =
  async (): Promise<IGetEventListingsResponse> => {
    const response = await fetch(`${STRAPI_URL_NEW}/hcv-events`);
    const json: IGetEventListingsResponse = await response.json();
    return new Promise((resolve, reject) => {
      if (json.data) {
        useEventListingsStore.setState({ event_listings: json.data });
        resolve(json);
      } else {
        reject(new Error(`Unable to fetch event listings`));
      }
    });
  };

export const getUpdatesListings =
  async (): Promise<IGetUpdatesListingsResponse> => {
    const response = await fetch(`${STRAPI_URL_NEW}/hcv-updates`);
    const json: IGetUpdatesListingsResponse = await response.json();
    return new Promise((resolve, reject) => {
      if (json.data) {
        useUpdatesListingsStore.setState({ updates_listings: json.data });
        resolve(json);
      } else {
        reject(new Error(`Unable to fetch Updates listings`));
      }
    });
  };

export const getNewsListings = async (): Promise<IGetNewsListingsResponse> => {
  const response = await fetch(`${STRAPI_URL_NEW}/hcv-newss`);
  const json: IGetNewsListingsResponse = await response.json();
  return new Promise((resolve, reject) => {
    if (json.data) {
      useNewsListingsStore.setState({ news_listings: json.data });
      resolve(json);
    } else {
      reject(new Error(`Unable to fetch News listings`));
    }
  });
};

export const getQuickLinks = async (): Promise<IGetQuickLinksResponse> => {
  const response = await fetch(`${STRAPI_URL_NEW}/admin-quick-links`);
  const json: IGetQuickLinksResponse = await response.json();
  return new Promise((resolve, reject) => {
    if (json.data) {
      useQuickLinksStore.setState({ quicklink_listings: json.data });
      resolve(json);
    } else {
      reject(new Error(`Unable to fetch listings`));
    }
  });
};
