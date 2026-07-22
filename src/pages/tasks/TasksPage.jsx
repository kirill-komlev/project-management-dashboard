import { CalendarDays, CircleAlert, Clock, Ellipsis, LayoutDashboard, ListChecks, Plus, Settings, SquareActivity, Users } from 'lucide-react'

import { inDesignData, inDevelopmentData, reviewData, shippedData } from 'configs/data-config'

import { useTitle } from 'hooks/useTitle'

import { Button } from 'shared/Button'
import { CircleButton } from 'shared/CircleButton'
import { Container } from 'shared/Container'
import { Table } from 'shared/Table'
import { Tabs } from 'shared/Tabs'

const tabs = [
	{
		index: 0,
		name: 'List view',
		icon: (
			<ListChecks
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		index: 1,
		name: 'Board view',
		icon: (
			<LayoutDashboard
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		index: 2,
		name: 'Calendar view',
		icon: (
			<CalendarDays
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		index: 3,
		name: 'Timeline view',
		icon: (
			<Clock
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
]

export function TasksPage() {
	useTitle('Tasks')

	return (
		<>
			<div className='border-b-2 border-gray-200'>
				<Container>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-1'>
							<div className='flex items-center gap-2'>
								<div className='text-2xl font-medium'>Oripio - Design Tasks</div>
								<CircleAlert
									strokeWidth={1.5}
									size={20}
									className='text-gray-500 cursor-pointer'
								/>
							</div>
							<div className='text-lg text-gray-500'>Manage projects by assigning owners, setting timelines, and tracking progress.</div>
						</div>
						<div className='flex gap-2 items-center'>
							<Button>
								<SquareActivity
									strokeWidth={1.5}
									size={20}
								/>
								Activity
							</Button>
							<Button>
								<Users
									strokeWidth={1.5}
									size={20}
								/>
								Member
							</Button>
							<CircleButton>
								<Ellipsis
									strokeWidth={1.5}
									size={20}
								/>
							</CircleButton>
						</div>
					</div>
					<div className='mt-2 flex items-center justify-between'>
						<Tabs tabs={tabs} />
						<div className='inline-flex gap-2 items-center justify-between'>
							<Button size='large'>
								<Settings strokeWidth={1.5} />
								Customize
							</Button>
							<Button
								size='large'
								variant='primary'
							>
								<Plus strokeWidth={1.5} />
								New Project
							</Button>
						</div>
					</div>
				</Container>
			</div>
			<div>
				<Container className='my-6 p-2 flex flex-col gap-2 bg-gray-50 rounded-2xl'>
					<Table
						data={shippedData}
						status='shipped'
					/>
					<Table
						data={reviewData}
						status='review'
					/>
					<Table
						data={inDevelopmentData}
						status='inDevelopment'
					/>
					<Table
						data={inDesignData}
						status='inDesign'
					/>
				</Container>
			</div>
		</>
	)
}
