import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  systemPrompt: string;
  setSystemPrompt: (prompt: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      systemPrompt: 'You are an expert Data Scientist. Analyze the dataset and provide insights.',
      setSystemPrompt: (systemPrompt) => set({ systemPrompt }),
    }),
    {
      name: 'app-storage',
    }
  )
);
