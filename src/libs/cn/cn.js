import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

// Удобная утилита cn (common pattern в React-проектах)
export function cn(...inputs) {
	return twMerge(clsx(inputs))
}
