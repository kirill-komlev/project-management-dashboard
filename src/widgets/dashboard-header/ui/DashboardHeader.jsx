import { Container } from 'shared/ui/container/Container'

import { DashboardHeaderNotifyButton } from './DashboardHeaderNotifyButton'
import { DashboardHeaderProfileButton } from './DashboardHeaderProfileButton'
import { DashboardHeaderSearchInput } from './DashboardHeaderSearchInput'

export function DashboardHeader({ title }) {
	return (
		<Container>
			<div className='flex items-center justify-between'>
				<h3 className='text-xl'>{title}</h3>
				<div className='flex gap-2 items-center'>
					<DashboardHeaderSearchInput />
					<div className='flex gap-2 items-center'>
						<DashboardHeaderNotifyButton icon='Goal' />
						<DashboardHeaderNotifyButton icon='Video' />
						<DashboardHeaderNotifyButton
							icon='Bell'
							value='2'
						/>
					</div>
					<DashboardHeaderProfileButton />
				</div>
			</div>
		</Container>
	)
}
