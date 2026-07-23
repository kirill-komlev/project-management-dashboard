import { cn } from 'shared/libs/cn'

const buttonVariants = {
	variant: {
		default: 'border border-gray-300 hover:bg-gray-100',
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
	},
	size: {
		small: 'px-2 py-1 text-sm rounded',
		medium: 'px-3 py-1.5 text-base rounded-full',
		large: 'px-4 py-2 text-lg rounded-full',
	},
}

export function Button({ variant = 'default', size = 'medium', disabled = false, className = '', children, ...props }) {
	return (
		<button
			disabled={disabled}
			className={cn(
				'inline-flex items-center justify-center gap-2',
				'cursor-pointer',
				'transition-all duration-200',
				'align-middle',
				buttonVariants.variant[variant],
				buttonVariants.size[size],
				disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
