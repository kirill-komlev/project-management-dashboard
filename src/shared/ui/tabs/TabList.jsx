import { cn } from 'shared/libs/cn'

/**
 * TabList – контейнер для заголовков вкладок.
 */
export const TabList = ({ children, className }) => (
	<div className={cn('flex items-center -mb-0.5', className)}>
		<div className='inline-flex items-center'>{children}</div>
	</div>
)
