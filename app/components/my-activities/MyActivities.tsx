'use client'

import * as Styled from './MyActivities.styled';

import React, { useEffect, useState } from 'react';
import { useActivityContext } from '../../contexts/activity-context/ActivityContext';
import DeleteButton from '../delete-button/DeleteButton';




export default function MyActivities() {
  const { activities, fetchActivities } = useActivityContext();
  const [loading, setLoading] = useState(true);

	 useEffect(() => {
    const fetchData = async () => {
       fetchActivities();
      setLoading(false);
    };

    fetchData();
  }, [fetchActivities]);

  if (loading) return <div>Loading...</div>;

  return (
    <Styled.Container>
      <h2>My Activities</h2>
        {activities.map((activity) => (
					<Styled.Card key={activity._id}>
            <h3>{activity.activityType}</h3>
            <p>Duration: {activity.duration} </p>
						<p>Focus Zone: {activity.focusZone}</p>
						<DeleteButton id={activity._id} />
						</Styled.Card>
        ))}
    </Styled.Container>
  );
}