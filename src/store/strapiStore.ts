import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  IDynamicWebsiteData,
  IListing,
  IQuickLinks,
  IPressListings,
  IEventListings,
  IUpdatesListings,
  INewsListings,
} from "@/lib/types";

interface IContentStore {
  content: IDynamicWebsiteData;
  update: (value: IDynamicWebsiteData) => void;
}

const initialContent: IDynamicWebsiteData = {
  id: 0,
  data: {
    contact_us_email: "",
    contact_us_phone: "",
    contact_us_address: "",
    footer_items: [],
  },
};

export const useContentStore = create<IContentStore>()((set) => ({
  content: initialContent,
  update: (value) => set((state) => ({ content: (state.content = value) })),
}));

interface IListingsStore {
  listings: IListing[];
  update: (value: IListing[]) => void;
}

export const useListingsStore = create<IListingsStore>()(
  persist(
    (set) => ({
      listings: [],
      update: (value) => set(() => ({ listings: value })),
    }),
    {
      name: "listings-storage",
    }
  )
);

interface IQuickLinksStore {
  quicklink_listings: IQuickLinks[];
  update: (value: IQuickLinks[]) => void;
}

export const useQuickLinksStore = create<IQuickLinksStore>()(
  persist(
    (set) => ({
      quicklink_listings: [],
      update: (value) => set(() => ({ quicklink_listings: value })),
    }),
    {
      name: "quick-link-storage",
    }
  )
);

interface IPressListingsStore {
  press_listings: IPressListings[];
  update: (value: IPressListings[]) => void;
}

export const usePressListingsStore = create<IPressListingsStore>()(
  persist(
    (set) => ({
      press_listings: [],
      update: (value) => set(() => ({ press_listings: value })),
    }),
    {
      name: "Press-listings-storage",
    }
  )
);

interface IEventListingsStore {
  event_listings: IEventListings[];
  update: (value: IEventListings[]) => void;
}

export const useEventListingsStore = create<IEventListingsStore>()(
  persist(
    (set) => ({
      event_listings: [],
      update: (value) => set(() => ({ event_listings: value })),
    }),
    {
      name: "event-listings-storage",
    }
  )
);

interface IUpdatesListingsStore {
  updates_listings: IUpdatesListings[];
  update: (value: IUpdatesListings[]) => void;
}

export const useUpdatesListingsStore = create<IUpdatesListingsStore>()(
  persist(
    (set) => ({
      updates_listings: [],
      update: (value) => set(() => ({ updates_listings: value })),
    }),
    {
      name: "update-listings-storage",
    }
  )
);

interface INewsListingsStore {
  news_listings: INewsListings[];
  update: (value: INewsListings[]) => void;
}

export const useNewsListingsStore = create<INewsListingsStore>()(
  persist(
    (set) => ({
      news_listings: [],
      update: (value) => set(() => ({ news_listings: value })),
    }),
    {
      name: "News-listings-storage",
    }
  )
);
