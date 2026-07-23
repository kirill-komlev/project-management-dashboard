import { CalendarDays, CircleAlert, Clock, Ellipsis, LayoutDashboard, ListChecks, Plus, Settings, SquareActivity, Users } from 'lucide-react'

import { useTabStore } from 'features/task-tabs/model/tabStore'

import { inDesignData, inDevelopmentData, reviewData, shippedData } from 'shared/configs/data-config'
import { useTitle } from 'shared/hooks/useTitle'
import { Button, CircleButton, Container, Table, Tab, TabList } from 'shared/ui'

const tabs = [
	{
		value: 0,
		label: 'List view',
		icon: (
			<ListChecks
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		value: 1,
		label: 'Board view',
		icon: (
			<LayoutDashboard
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		value: 2,
		label: 'Calendar view',
		icon: (
			<CalendarDays
				size={20}
				strokeWidth={1.5}
			/>
		),
	},
	{
		value: 3,
		label: 'Timeline view',
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
	const { activeTab, setActiveTab } = useTabStore()

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
						<TabList>
							{tabs.map(tab => (
								<Tab
									key={tab.value}
									value={tab.value}
									label={tab.label}
									icon={tab.icon}
									active={activeTab === tab.value}
									onClick={setActiveTab}
								/>
							))}
						</TabList>

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
				{activeTab === 0 && (
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
				)}
				{activeTab === 1 && <Container>Board view content</Container>}
				{activeTab === 2 && <Container>Calendar view content</Container>}
				{activeTab === 3 && <Container>Timeline view content</Container>}
			</div>
		</>
	)
}
