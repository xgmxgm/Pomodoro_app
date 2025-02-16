import { type FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import styles from './Stages.module.scss'
import { pVariants } from '../../animations'
import { useColorStore } from '@/features/Settings/store/colorStore'

interface IProps {
	stages: string[]
	currentStage: string
}

export const Stages: FC<IProps> = ({ stages, currentStage }) => {
	const { themeColor } = useColorStore()

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
