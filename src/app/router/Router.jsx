import { Route, Routes } from 'react-router'

import { MainLayout } from 'layouts/main-layout/MainLayout'
import { DashboardLayout } from 'layouts/dashboard-layout/DashboardLayout'

import { DashboardPage } from 'pages/dashboard/DashboardPage'
import { TasksPage } from 'pages/tasks/TasksPage'

import { PAGE_CONFIG } from 'configs/page-config'

export function Router() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route element={<DashboardLayout />}>
					<Route
						path={PAGE_CONFIG.dashboard}
						element={<DashboardPage />}
					/>
					<Route
						path={PAGE_CONFIG.inbox}
						element={<DashboardPage />}
					/>
					<Route
						path={PAGE_CONFIG.comments}
						element={<DashboardPage />}
					/>
					<Route
						path={PAGE_CONFIG.tasks}
						element={<TasksPage />}
					/>
					<Route
						path={PAGE_CONFIG.teamSettings}
						element={<DashboardPage />}
					/>

					<Route
						path={`${PAGE_CONFIG.workSpace}/:workSpace`}
						element={<DashboardPage />}
					/>

					<Route
						path={`${PAGE_CONFIG.channel}/:channel`}
						element={<DashboardPage />}
					/>

					<Route
						path={`${PAGE_CONFIG.directMessage}/:directMessage`}
						element={<DashboardPage />}
					/>
				</Route>
			</Route>
		</Routes>
	)
}
