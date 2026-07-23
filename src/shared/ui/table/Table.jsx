import { useState } from 'react'

import { ChevronDown, ChevronUp, Ellipsis, Flag, UserRound, EyeOff } from 'lucide-react'

import { USERS_CONFIG } from 'shared/configs/users-config'
import { TAGS_CONFIG } from 'shared/configs/tags-config'

import { cn } from 'shared/libs/cn'
import { Chip, Tags } from '..'

const headers = ['Project', 'Assignee', 'Due Date', 'Priority']

const usersMap = new Map(USERS_CONFIG.map(u => [u.id, u.name]))

const tagMap = new Map(TAGS_CONFIG.map(tag => [tag.id, tag]))

// Функция-получатель
function getTagInfo(id) {
	const tag = tagMap.get(id)
	if (!tag) {
		return null
	}
	return {
		name: tag.name,
		color: tag.color,
	}
}

export function Table({ data, status }) {
	const [open, setOpen] = useState(true)
	return (
		<div className='p-4 bg-white rounded-2xl'>
			<div className='px-4 flex items-center justify-between'>
				<div className='flex gap-2 items-center'>
					{open ? (
						<ChevronUp
							size={28}
							onClick={() => setOpen(!open)}
							className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-all'
						/>
					) : (
						<ChevronDown
							size={28}
							onClick={() => setOpen(!open)}
							className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-all'
						/>
					)}
					<Chip
						status={status}
						count={data.length}
					/>
				</div>
				<Ellipsis
					size={28}
					className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-all'
				/>
			</div>
			{open ? <OpenTable data={data} /> : <HiddenTable dataLength={data.length} />}
		</div>
	)
}

function OpenTable({ data }) {
	return (
		<div className='mt-2 overflow-hidden border border-gray-200 rounded-2xl bg-white'>
			{/* Header */}
			<div className={`grid grid-cols-5 border-b border-gray-200 bg-gray-50`}>
				{headers.map((header, index) => (
					<div
						key={index}
						className={cn('px-4 py-2', index === 0 ? 'col-span-2' : '')}
					>
						{header}
					</div>
				))}
			</div>

			{/* Rows */}
			<div className='divide-y divide-gray-200'>
				{data.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className={`grid grid-cols-5`}
					>
						{row.map((cell, colIndex) => {
							if (colIndex === 0) {
								return (
									<div
										key={colIndex}
										className='p-4 col-span-2 flex items-center gap-3'
									>
										<div
											className='truncate'
											title={cell.text}
										>
											{cell.text}
										</div>
										{cell.tags?.length > 0 && (
											<div className='flex flex-none gap-1'>
												{cell.tags.map((tag, index) => {
													if (index < 2) {
														return (
															<Tags
																key={tag}
																color={getTagInfo(tag).color}
															>
																{getTagInfo(tag).name}
															</Tags>
														)
													}
												})}
												{cell.tags.length > 2 && (
													<div className='relative group'>
														<Tags color='gray'>+{cell.tags.length - 2}</Tags>{' '}
														<div className='absolute hidden -top-8 left-1/2 transform -translate-x-1/2 group-hover:flex items-center gap-1'>
															{cell.tags.map((tag, index) => {
																if (index > 1) {
																	return (
																		<Tags
																			key={tag}
																			color={getTagInfo(tag).color}
																		>
																			{getTagInfo(tag).name}
																		</Tags>
																	)
																}
															})}
														</div>
													</div>
												)}
											</div>
										)}
									</div>
								)
							} else if (colIndex == 1) {
								return (
									<div
										key={colIndex}
										className='p-4 flex items-center'
									>
										{cell.map(item => (
											<div
												key={`user-${item}`}
												className={cn('group relative p-1 -mr-2 text-xs bg-gray-200 rounded-full border-2 border-white', '')}
											>
												<UserRound
													className='text-gray-700'
													size={20}
												/>
												<div className='absolute hidden -top-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 rounded-2xl bg-gray-200 group-hover:block'>
													{usersMap.get(item)}
												</div>
											</div>
										))}
									</div>
								)
							} else if (colIndex == 3) {
								return (
									<div
										key={colIndex}
										className='p-4 flex gap-2 items-center truncate'
									>
										<Flag
											size={20}
											className={cell == 'High' ? 'text-red-500' : cell == 'Medium' ? 'text-yellow-500' : 'text-green-500'}
										/>
										{cell}
									</div>
								)
							}

							// Остальные колонки (число/строка)
							return (
								<div
									key={colIndex}
									className='p-4 truncate'
								>
									{cell}
								</div>
							)
						})}
					</div>
				))}
			</div>
		</div>
	)
}

function HiddenTable({ dataLength }) {
	return (
		<div className='mt-2 px-4 py-3 flex items-center gap-3 border border-gray-200 rounded-2xl bg-white'>
			<EyeOff
				className='text-gray-500'
				strokeWidth='1.5'
				size={20}
			/>
			<p className='text-gray-500'>{dataLength} tasks are hidden in this view</p>
		</div>
	)
}
