import { NavLink } from 'react-router'

import { cn } from 'shared/libs/cn'

const baseStyles = 'inline-flex gap-3 items-center px-2 py-1 rounded-xl text-lg text-gray-600 hover:bg-gray-100 hover:text-black transition-all duration-200 '

export function SidebarListLink({ to, icon, comment, children }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? cn(baseStyles, 'bg-gray-200 text-black hover:bg-gray-200') : baseStyles)}
		>
			{icon}
			<p className='truncate max-w-full flex-1 min-w-0'>
				{children}
				{comment && <span className='text-gray-400 truncate'> - {comment}</span>}
			</p>
		</NavLink>
	)
}
