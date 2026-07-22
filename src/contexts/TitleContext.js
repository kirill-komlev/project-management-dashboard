import { createContext } from 'react'

export const TitleContext = createContext({
	title: 'Dashboard',
	setTitle: () => {},
})
