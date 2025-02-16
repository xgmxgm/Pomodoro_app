import { type FC } from 'react'
import { Check } from '../Icons/Check'
import styles from './ColorButton.module.scss'

interface IProps {
	HEXcolor: string
	color: string
	setColor: (color: string) => void
}

export const ColorButton: FC<IProps> = ({ HEXcolor, setColor, color }) => {
	return (
		<button
			className={styles['color-button']}
			style={{ backgroundColor: HEXcolor }}
			onClick={() => setColor(HEXcolor)}
		>
			{color === HEXcolor && <Check />}
		</button>
	)
}
