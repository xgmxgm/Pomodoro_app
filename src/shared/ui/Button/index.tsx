import styles from './Button.module.scss'
import { useColorStore } from '@/app/store/colorStore'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ children, ...props }, ref) => {
		const { themeColor } = useColorStore()

		return (
			<button
				className={styles['button']}
				style={{ backgroundColor: themeColor }}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)
