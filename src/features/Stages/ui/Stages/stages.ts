export interface IStage {
	title: string
	time: number
}

export const stages: IStage[] = [
	{ title: 'pomodoro', time: 3 },
	{ title: 'long break', time: 2 },
	{ title: 'short break', time: 1 },
]
