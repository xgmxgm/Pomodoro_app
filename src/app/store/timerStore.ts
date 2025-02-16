import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TimerStore {
	pomodoroTime: number
	setPomodoroTime: (pomodoroTime: number) => void
	shortBreakTime: number
	setShortBreakTime: (shortBreakTime: number) => void
	longBreakTime: number
	setLongBreakTime: (longBreakTime: number) => void
}

export const useTimerStore = create<TimerStore>()(
	persist(
		set => ({
			pomodoroTime: 25,
			setPomodoroTime: pomodoroTime => set(() => ({ pomodoroTime })),
			longBreakTime: 15,
			setLongBreakTime: longBreakTime => set(() => ({ longBreakTime })),
			shortBreakTime: 5,
			setShortBreakTime: shortBreakTime => set(() => ({ shortBreakTime })),
		}),
		{ name: 'time-storage' }
	)
)
