
import { create } from 'zustand';

interface ModalState {
  isJoinWaitlistOpen: boolean;
  openJoinWaitlist: () => void;
  closeJoinWaitlist: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isJoinWaitlistOpen: false,
  openJoinWaitlist: () => set({ isJoinWaitlistOpen: true }),
  closeJoinWaitlist: () => set({ isJoinWaitlistOpen: false }),
}));
