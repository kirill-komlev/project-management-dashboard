import { Outlet } from 'react-router'

import { Sidebar } from 'components/sidebar/Sidebar'
import { Navbar } from 'components/navbar/Navbar'

export function MainLayout() {
	return (
		<div className='h-screen w-full max-w-screen grid grid-cols-[auto_auto_1fr] overflow-hidden bg-gray-50'>
			<Navbar />
			<Sidebar />
			<Outlet />
		</div>
	)
}
