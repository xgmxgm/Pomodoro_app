import { motion } from 'framer-motion'
import { type FC, useState } from 'react'
import { Modal } from '@/shared/ui/Modal'
import styles from './Settings.module.scss'
import { pVariants } from '../../animations'
import { NumInput } from '@/shared/ui/NumInput'
import { FontButton } from '@/shared/ui/FontButton'
import { ColorButton } from '@/shared/ui/ColorButton'
import { SettingsIcon } from '@/shared/ui/Icons/Settings'
import { useTimerStore } from '@/features/Timer/store/timerStore'
import { useColorStore } from '@/features/Settings/store/colorStore'

interface IProps {
	font: string
	setFont: (font: string) => void
}

export const Settings: FC<IProps> = ({ setFont, font }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const {
		pomodoroTime,
		longBreakTime,
		shortBreakTime,
		setPomodoroTime,
		setLongBreakTime,
		setShortBreakTime,
	} = useTimerStore()

	const { themeColor, setThemeColor } = useColorStore()

	const [pomodoro, setPomodoro] = useState<number>(pomodoroTime)
	const [longBreak, setLongBreak] = useState<number>(longBreakTime)
	const [shortBreak, setShortBreak] = useState<number>(shortBreakTime)
	const [fontState, setFontState] = useState<string>(font)
	const [color, setColor] = useState<string>(themeColor)

	const handleApply = () => {
		setPomodoroTime(pomodoro)
		setLongBreakTime(longBreak)
		setShortBreakTime(shortBreak)
		setThemeColor(color)
		setFont(fontState)
		setIsOpen(false)
	}

	return (
		<motion.div
			variants={pVariants}
			initial='hidden'
			animate='visible'
			className={styles['settings']}
		>
			<button onClick={() => setIsOpen(true)}>
				<SettingsIcon width='35' height='35' />
			</button>
			<Modal
				buttonFunction={handleApply}
				title='Settings'
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<div className={styles['settings__list']}>
					<div className={styles['settings__item-title']}>
						<p>TIME (MINUTES)</p>
					</div>
					<div className={styles['settings__item']}>
						<NumInput
							title='pomodoro'
							state={pomodoro}
							setState={setPomodoro}
						/>
						<NumInput
							title='short break'
							state={shortBreak}
							setState={setShortBreak}
						/>
						<NumInput
							title='long break'
							state={longBreak}
							setState={setLongBreak}
						/>
					</div>
					<hr />
					<div className={styles['settings__item-title']}>
						<p>FONT</p>
					</div>
					<div className={styles['settings__item']}>
						<FontButton
							fontState={fontState}
							font='sans-serif'
							setFont={setFontState}
						/>
						<FontButton
							fontState={fontState}
							font='monospace'
							setFont={setFontState}
						/>
						<FontButton
							fontState={fontState}
							font='serif'
							setFont={setFontState}
						/>
						<FontButton
							fontState={fontState}
							font='fantasy'
							setFont={setFontState}
						/>
						<FontButton
							fontState={fontState}
							font='cursive'
							setFont={setFontState}
						/>
					</div>
					<hr />
					<div className={styles['settings__item-title']}>
						<p>COLOR</p>
					</div>
					<div className={styles['settings__item']}>
						<ColorButton color={color} setColor={setColor} HEXcolor='#6FF3F8' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#DC80F8' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#70A0F8' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#7048F8' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#F870A0' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#F89A70' />
						<ColorButton color={color} setColor={setColor} HEXcolor='#F87070' />
					</div>
				</div>
			</Modal>
		</motion.div>
	)
}
