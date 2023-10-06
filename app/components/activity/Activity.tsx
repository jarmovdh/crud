'use client';
import * as Styled from './Acitivity.styled';

import { useActivityContext } from "../../contexts/activity-context/ActivityContext";

interface ActivityProps {
	activityType: string;
	duration?: number;
	focusZone?: string;
}

export default function Activity({ activityType, duration, focusZone }: ActivityProps) {

				const { fetchActivities } = useActivityContext();


	  const handleOnClick = async () => {
    try {
      const response = await fetch('/api/add-activity', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          activityType,
          duration,
          focusZone,
        }),
			});
			fetchActivities();

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

			const data = await response.json();
			console.log('data', data);
      console.log('Activity added:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };

	return (
	  <Styled.Button type="button" onClick={handleOnClick}>
      <h2>{activityType}</h2>
       {duration && <p>Duration: {duration} minutes</p>}
      {focusZone && <p>Focus Zone: {focusZone}</p>}
		</Styled.Button>
		
 )
}