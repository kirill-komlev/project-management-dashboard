import { cn } from 'libs/cn/cn'

const icons = {
	inDesign: `
		<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"/>
			<path d="M17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3L10 10H17Z" fill="currentColor"/>
		</svg>
	`,
	inDevelopment: `
		<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"/>
			<path d="M10 17C11.8565 17 13.637 16.2625 14.9497 14.9497C16.2625 13.637 17 11.8565 17 10C17 8.14349 16.2625 6.36301 14.9497 5.05025C13.637 3.7375 11.8565 3 10 3L10 10L10 17Z" fill="currentColor"/>
		</svg>
	`,
	review: `
		<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="10" cy="10" r="9.25" stroke="currentColor" stroke-width="1.5"/>
			<path d="M3 10C3 11.3845 3.41054 12.7378 4.17971 13.889C4.94888 15.0401 6.04213 15.9373 7.32122 16.4672C8.6003 16.997 10.0078 17.1356 11.3656 16.8655C12.7235 16.5954 13.9708 15.9287 14.9497 14.9497C15.9287 13.9708 16.5954 12.7235 16.8655 11.3656C17.1356 10.0078 16.997 8.6003 16.4672 7.32122C15.9373 6.04213 15.0401 4.94888 13.889 4.17971C12.7378 3.41054 11.3845 3 10 3L10 10L3 10Z" fill="currentColor"/>
		</svg>
	`,
	shipped: `
		<svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM8.57617 13.5381L3.51953 8.48145L2.10547 9.89551L8.57617 16.3662L17.8467 7.0957L16.4326 5.68164L8.57617 13.5381Z" fill="currentColor"/>
		</svg>
	`,
}

const chipVariants = {
	status: {
		inDesign: {
			background: 'bg-amber-100',
			textColor: 'text-amber-600',
			text: 'In Design',
			icon: icons.inDesign,
		},
		inDevelopment: {
			background: 'bg-cyan-100',
			textColor: 'text-cyan-600',
			text: 'In Development',
			icon: icons.inDevelopment,
		},
		review: {
			background: 'bg-purple-100',
			textColor: 'text-purple-600',
			text: 'Review',
			icon: icons.review,
		},
		shipped: {
			background: 'bg-green-100',
			textColor: 'text-green-600',
			text: 'Shipped',
			icon: icons.shipped,
		},
	},
}

export function Chip({ status = 'shipped', count = '0' }) {
	const variant = chipVariants.status[status]
	return (
		<div className='inline-flex justify-center align-middle gap-2'>
			<div className={cn('inline-flex items-center justify-center gap-2', 'rounded-2xl py-1 px-2', 'text-sm', variant.background, variant.textColor)}>
				<div dangerouslySetInnerHTML={{ __html: variant.icon }} />
				{variant.text}
			</div>
			<div className='bg-gray-100 text-gray-600 text-sm rounded-2xl py-1 px-3'>{count}</div>
		</div>
	)
}
