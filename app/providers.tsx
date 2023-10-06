'use client'

import { ActivityProvider } from "./contexts/activity-context/ActivityContext"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ActivityProvider>
				{children}
				</ActivityProvider>
		</>
	)
}