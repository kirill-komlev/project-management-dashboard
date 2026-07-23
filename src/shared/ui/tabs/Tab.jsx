import { cn } from 'shared/libs/cn'

/**
 * Tab – заголовок вкладки.
 *
 * @param {*} value – идентификатор вкладки
 * @param {string} label – текст
 * @param {ReactNode} icon – иконка (опционально)
 * @param {boolean} active – активна ли вкладка (передаётся из родителя)
 * @param {function} onClick – колбэк при клике
 */
export const Tab = ({ value, label, icon, active, onClick, className, ...props }) => {
	return (
		<div
			className={cn(
				'inline-flex gap-2 items-center px-4 py-6',
				'text-gray-500 cursor-pointer border-b-2 border-gray-200 hover:border-gray-300 hover:text-gray-600 hover:bg-gray-50 transition-all',
				active && 'border-b-black text-black hover:border-b-black hover:text-black',
				className,
			)}
			onClick={() => onClick(value)}
			{...props}
		>
			{icon}
			{label}
		</div>
	)
}
