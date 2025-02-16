import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ColorStore {
	themeColor: string
	setThemeColor: (themeColor: string) => void
}

export const useColorStore = create<ColorStore>()(
	persist(
		set => ({
			themeColor: '#DC80F8',
			setThemeColor: themeColor => set(() => ({ themeColor })),
		}),
		{
			name: 'theme-color-storage',
		}
	)
)
