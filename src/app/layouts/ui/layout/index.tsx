import { Header } from '@/widgets/Header'
import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>{children}</main>
		</>
	)
}
