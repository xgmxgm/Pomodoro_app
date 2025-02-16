import { type FC } from 'react'
import styles from './FontButton.module.scss'

interface IProps {
	font: string
	fontState: string
	setFont: (font: string) => void
}

export const FontButton: FC<IProps> = ({ font, setFont, fontState }) => {
	return (
		<button
			className={styles['font-button']}
			style={{
				fontFamily: font,
				backgroundColor: fontState === font ? '#191D36' : '#EEF1FA',
				color: fontState === font ? 'white' : '#1e2140',
			}}
			onClick={() => setFont(font)}
		>
			Aa
		</button>
	)
}
