import { CircleDashed, ClipboardList, CodeXml, Ellipsis, Hash, LayoutGrid, MessageSquareMore, Pencil, Plus, Settings, UserRound } from 'lucide-react'

import { SidebarListLink } from './SidebarListLink'
import { SidebarListTitle } from './SidebarListTitle'
import { SidebarList } from './SidebarList'
import { SidebarListAction } from './SidebarListAction'
import { PAGE_CONFIG } from '../../configs/page-config'

const mainMenuList = [
	{
		to: PAGE_CONFIG.inbox,
		icon: (
			<LayoutGrid
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'Inbox',
	},
	{
		to: PAGE_CONFIG.comments,
		icon: (
			<MessageSquareMore
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'Assigned Comments',
	},
	{
		to: PAGE_CONFIG.tasks,
		icon: (
			<ClipboardList
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'My Tasks',
	},
	{
		to: PAGE_CONFIG.teamSettings,
		icon: (
			<Settings
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'Team Settings',
	},
]

const workSpacesList = [
	{
		to: `${PAGE_CONFIG.workSpace}/W23954736`,
		icon: (
			<Pencil
				className='p-0.5 bg-blue-500 rounded'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: 'Design Team',
	},
	{
		to: `${PAGE_CONFIG.workSpace}/W89023456`,
		icon: (
			<CodeXml
				className='p-0.5 bg-green-500 rounded'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: 'Development Deck',
	},
	{
		to: `${PAGE_CONFIG.workSpace}/W12353467`,
		icon: (
			<CircleDashed
				className='p-0.5 bg-purple-500 rounded'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: 'Innovation Lab',
	},
]

const channelsList = [
	{
		to: `${PAGE_CONFIG.channel}/C12353467`,
		icon: (
			<Hash
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'Welcome',
	},
	{
		to: `${PAGE_CONFIG.channel}/C23353467`,
		icon: (
			<Hash
				size={20}
				strokeWidth={1.5}
			/>
		),
		text: 'General',
		comment: 'AS Oripio',
	},
]

const messagesList = [
	{
		to: `${PAGE_CONFIG.directMessage}/DM1235346`,
		icon: (
			<UserRound
				className='p-0.5 bg-taupe-500 rounded-2xl'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: 'eren-jaeger@gmail.com',
	},
	{
		to: `${PAGE_CONFIG.directMessage}/DM2335346`,
		icon: (
			<UserRound
				className='p-0.5 bg-red-500 rounded-2xl'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: `mikasa-ackerman@gmail.com`,
	},
	{
		to: `${PAGE_CONFIG.directMessage}/DM3435346`,
		icon: (
			<UserRound
				className='p-0.5 bg-yellow-500 rounded-2xl'
				color='#ffffff'
				size={20}
				strokeWidth={2}
			/>
		),
		text: 'armin-arlert@gmail.com',
	},
]

export function Sidebar() {
	return (
		<div className='py-4 flex flex-col gap-4 max-w-72 w-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'>
			<div className='px-6'>
				<h3 className='font-semibold text-xl'>Oripio Design</h3>
				<h5 className='text-sm text-gray-600'>Team Plan</h5>
			</div>
			<hr className='w-full border border-gray-200' />

			<SidebarList>
				<SidebarListTitle>Main Menu</SidebarListTitle>
				{mainMenuList.map(item => (
					<SidebarListLink
						to={item.to}
						icon={item.icon}
						comment={item.comment}
					>
						{item.text}
					</SidebarListLink>
				))}
				<SidebarListAction
					icon={
						<Ellipsis
							size={20}
							strokeWidth={1.5}
						/>
					}
				>
					More
				</SidebarListAction>
			</SidebarList>

			<SidebarList>
				<SidebarListTitle>Work Spaces</SidebarListTitle>
				{workSpacesList.map(item => (
					<SidebarListLink
						to={item.to}
						icon={item.icon}
						comment={item.comment}
					>
						{item.text}
					</SidebarListLink>
				))}
				<SidebarListAction
					icon={
						<Plus
							size={20}
							strokeWidth={1.5}
						/>
					}
				>
					New Space
				</SidebarListAction>
			</SidebarList>

			<SidebarList>
				<SidebarListTitle>Channels</SidebarListTitle>
				{channelsList.map(item => (
					<SidebarListLink
						to={item.to}
						icon={item.icon}
						comment={item.comment}
					>
						{item.text}
					</SidebarListLink>
				))}
				<SidebarListAction
					icon={
						<Plus
							size={20}
							strokeWidth={1.5}
						/>
					}
				>
					Add Channel
				</SidebarListAction>
			</SidebarList>
			<SidebarList>
				<SidebarListTitle>Direct Messages</SidebarListTitle>
				{messagesList.map(item => (
					<SidebarListLink
						to={item.to}
						icon={item.icon}
						comment={item.comment}
					>
						{item.text}
					</SidebarListLink>
				))}
				<SidebarListAction
					icon={
						<Plus
							size={20}
							strokeWidth={1.5}
						/>
					}
				>
					New Message
				</SidebarListAction>
			</SidebarList>
		</div>
	)
}
