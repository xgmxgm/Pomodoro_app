import { type FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './Stages.module.scss'
import { useColorStore } from '@/app/store/colorStore'

interface IProps {
	stages: string[]
	currentStage: string
}

export const Stages: FC<IProps> = ({ stages, currentStage }) => {
	const { themeColor } = useColorStore()

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

	return (
		<motion.div
			variants={pVariants}
			initial='hidden'
			animate='visible'
			className={styles['stages']}
		>
			<ul className={styles['stages__list']}>
				{stages.map((stage, index) => (
					<li
						className={classNames(
							{ [styles.current]: currentStage === stage },
							styles['stages__stage-item']
						)}
						style={
							currentStage === stage ? { backgroundColor: themeColor } : {}
						}
						key={index}
					>
						<p>{stage}</p>
					</li>
				))}
			</ul>
		</motion.div>
	)
}
