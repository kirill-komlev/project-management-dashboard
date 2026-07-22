import { Outlet } from 'react-router'
import { DashboardHeader } from '../../components/dashboard-header/DashboardHeader'
import { useState } from 'react'
import { TitleContext } from 'contexts/TitleContext'

export function DashboardLayout() {
	const [title, setTitle] = useState('Dashboard')

	return (
		<TitleContext.Provider value={{ title, setTitle }}>
			<div className='overflow-y-auto py-4 m-2 bg-white border-2 border-gray-200 rounded-4xl'>
				<div>
					<div className='flex flex-col gap-4'>
						<DashboardHeader title={title} />
						<hr className='w-full border border-gray-200 -mt-0.5' />

						<Outlet />
					</div>
				</div>
			</div>
		</TitleContext.Provider>
	)
}
