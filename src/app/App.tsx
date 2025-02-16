import './styles/app.css'
import { useState } from 'react'
import { Timer } from '@/features/Timer'
import { Stages } from '@/features/Stages'
import { Settings } from '@/features/Settings'

const stages_str: string[] = ['pomodoro', 'short break', 'long break']

function App() {
	const [currentStage, setCurrentStage] = useState<string>('pomodoro')
	const [periods] = useState<number>(5)
	const [font, setFont] = useState<string>('sans-serif')

	return (
		<div className='app' style={{ fontFamily: font }}>
			<Stages stages={stages_str} currentStage={currentStage} />
			<Timer setCurrentStage={setCurrentStage} periods={periods} />
			<Settings setFont={setFont} font={font} />
		</div>
	)
}

export default App
