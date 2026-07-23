import { NavLink } from 'react-router'

import { cn } from 'shared/libs/cn'

const baseStyles = 'p-3 rounded-xl transition-all duration-200 outline-offset-2 outline-transparent hover:outline-gray-300 outline-2'

export function NavbarLink({ to, children, ...props }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? cn('bg-gray-900 text-white', baseStyles) : baseStyles)}
			{...props}
		>
			{children}
		</NavLink>
	)
}
