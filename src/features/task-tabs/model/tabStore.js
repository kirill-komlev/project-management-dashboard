import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTabStore = create(
	persist(
		set => ({
			activeTab: 0, // значение по умолчанию
			setActiveTab: tab => set({ activeTab: tab }),
		}),
		{
			name: 'tasks-tab-storage', // ключ в sessionStorage
			getStorage: () => sessionStorage, // используем sessionStorage (по умолчанию localStorage)
		},
	),
)
