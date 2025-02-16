import { Button } from '../Button'
import { Cross } from '../Icons/Cross'
import styles from './Modal.module.scss'
import type { FC, PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface IProps {
	title: string
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	buttonFunction: () => void
}

export const Modal: FC<PropsWithChildren<IProps>> = ({
	children,
	title,
	isOpen,
	setIsOpen,
	buttonFunction,
}) => {
	const pVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	}

	const pVariants_2 = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
		},
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial='hidden'
					animate='visible'
					variants={pVariants}
					exit={{
						opacity: 0,
					}}
					className={styles['modal']}
					onClick={() => setIsOpen(false)}
				>
					<motion.div
						className={styles['modal__content']}
						onClick={e => e.stopPropagation()}
						initial='hidden'
						animate='visible'
						exit={{
							opacity: 0,
							scale: 0,
						}}
						variants={pVariants_2}
					>
						<div className={styles['modal__title']}>
							{title}
							<button onClick={() => setIsOpen(false)}>
								<Cross width='25' height='25' />
							</button>
						</div>
						<hr className={styles['modal__line']} />
						<div className={styles['modal__other-content']}>{children}</div>
						<div className={styles['modal__footer']}>
							<Button onClick={() => buttonFunction()}>Apply</Button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
