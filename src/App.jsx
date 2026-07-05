import { Button } from './shared/button/Button'

function App() {
	return (
		<>
			<h1 className='text-2xl font-bold border'>Hello</h1>

			<Button
				variant='primary'
				size='large'
			>
				New Project
			</Button>
			<Button variant='default'>Member</Button>
			<Button
				variant='default'
				size='small'
			>
				View Task
			</Button>
			<Button disabled>View Task</Button>
		</>
	)
}

export default App
