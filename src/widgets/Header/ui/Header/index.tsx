import { Logo } from '@/shared/ui/Logo'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<div className={styles['header']}>
			<Logo />
		</div>
	)
}
