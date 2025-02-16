import { type FC } from 'react'
import styles from './NumInput.module.scss'

interface IProps {
	title: string
	state: number
	setState: (state: number) => void
}

export const NumInput: FC<IProps> = ({ title, state, setState }) => {
	return (
		<div className={styles['num-input']}>
			<p className={styles['num-input__title']}>{title}</p>
			<input
				type='number'
				placeholder='enter minutes...'
				className={styles['num-input__input']}
				value={state}
				onChange={e => setState(+e.target.value)}
				min={1}
			/>
		</div>
	)
}
