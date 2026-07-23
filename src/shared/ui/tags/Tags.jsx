// eslint-disable-next-line no-unused-vars
const possibility = [
	'bg-red-100',
	'text-red-600',
	'bg-blue-100',
	'text-blue-600',
	'bg-violet-100',
	'text-violet-600',
	'bg-yellow-100',
	'text-yellow-600',
	'bg-gray-100',
	'text-gray-600',
]

export function Tags({ color, children }) {
	return <div className={`px-1.5 py-1 bg-${color}-100 rounded-full text-xs text-${color}-600`}>{children}</div>
}
