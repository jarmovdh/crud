'use client;'

import { useActivityContext } from "../../contexts/activity-context/ActivityContext";

interface DeleteButtonProps {
  id: string;
}


export default function DeleteButton({ id }: DeleteButtonProps) {
					const { fetchActivities } = useActivityContext();


	  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/delete-activity', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });


      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

			  fetchActivities();

			console.log('Activity deleted:', id);
    } catch (error) {
      console.error('There was a problem with the delete operation:', error.message);
    }
  };

	return (
		<button onClick={() => handleDelete(id)}>Delete activity</button>
	)
}

