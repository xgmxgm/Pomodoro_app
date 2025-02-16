import { motion } from 'framer-motion'
import styles from './Timer.module.scss'
import { type FC, useEffect, useState } from 'react'
import { useTimerStore } from '../../store/timerStore'
import { useColorStore } from '@/features/Settings/store/colorStore'

interface IProps {
	periods: number
	setCurrentStage: (currentStage: string) => void
}

export const Timer: FC<IProps> = ({ periods, setCurrentStage }) => {
	const [time, setTime] = useState<number>(0)
	const [duration, setDuration] = useState<number>(1)
	const [iteration, setIteration] = useState<number>(1)
	const [isRunning, setIsRunning] = useState<boolean>(false)

	const { themeColor } = useColorStore()
	const { pomodoroTime, shortBreakTime, longBreakTime } = useTimerStore()

	const radius: number = 170
	const strokeWidth: number = 10
	const size: number = radius * 2 + strokeWidth
	const progress: number = (time / duration) * 100
	const circumference: number = 2 * Math.PI * radius

	const changeStage = () => {
		if (time <= 0) {
			setIsRunning(false)

			if (iteration === periods) {
				setCurrentStage('long break')
				setIteration(1)
				setTime(longBreakTime * 60)
				setDuration(longBreakTime * 60)
				return
			}

			if (iteration % 2 !== 0) {
				setCurrentStage('pomodoro')
				setIteration(iteration + 1)
				setTime(pomodoroTime * 60)
				setDuration(pomodoroTime * 60)
				return
			} else if (iteration % 2 === 0) {
				setCurrentStage('short break')
				setIteration(iteration + 1)
				setTime(shortBreakTime * 60)
				setDuration(shortBreakTime * 60)
				return
			}
		}
	}

	const timeFormat = (time: number) => {
		const minutes = Math.floor((time % 3600) / 60)
		const seconds = time % 60

		return [
			minutes.toString().padStart(2, '0'),
			seconds.toString().padStart(2, '0'),
		].join(':')
	}

	const pVariants = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
	}

	useEffect(() => {
		let timer: ReturnType<typeof setInterval>

		if (isRunning) {
			timer = setInterval(() => {
				setTime(prevTime => prevTime - 1)
			}, 1000)
		}

		return () => {
			if (timer) clearInterval(timer)
		}
	}, [isRunning])

	useEffect(changeStage)

	return (
		<>
			<motion.div
				variants={pVariants}
				initial='hidden'
				animate='visible'
				className={styles['timer']}
			>
				<svg width={size} height={size} className={styles['timer__circle']}>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke='#151932'
						strokeWidth={strokeWidth}
						fill='none'
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke={themeColor}
						strokeWidth={strokeWidth}
						fill='none'
						strokeDasharray={circumference}
						strokeDashoffset={(1 - progress / 100) * circumference}
						strokeLinecap='round'
						style={{
							transform: 'rotate(-90deg)',
							transformOrigin: 'center',
							transition: '250ms',
						}}
					/>
					<text
						x='50%'
						y='50%'
						textAnchor='middle'
						dominantBaseline='middle'
						className={styles['timer__time']}
					>
						{timeFormat(time)}
					</text>
					<foreignObject x='26%' y='65%' width='50%' height='20%'>
						<button
							className={styles['timer__btn']}
							onClick={() => setIsRunning(!isRunning)}
							style={{
								width: '100%',
								height: '100%',
								border: 'none',
							}}
						>
							{isRunning ? 'pause' : 'start'}
						</button>
					</foreignObject>
				</svg>
			</motion.div>
		</>
	)
}
