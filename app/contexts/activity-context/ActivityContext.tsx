import React, { createContext, useContext, useState, useCallback } from 'react';

interface Activity {
	_id: string;
  activityType: string;
  duration?: number;
  focusZone?: string;
}

interface ActivityContextProps {
  activities: Activity[];
  fetchActivities: () => void;
}

const ActivityContext = createContext<ActivityContextProps | undefined>(undefined);

export const useActivityContext = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error('useActivityContext must be used within an ActivityProvider');
  }
  return context;
};

export const ActivityProvider: React.FC = ({ children }) => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchActivities = useCallback(async () => {
    try {
      const response = await fetch('/api/get-activity');
      const data = await response.json();
      setActivities(data.activities);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }, []);

  return (
    <ActivityContext.Provider value={{ activities, fetchActivities }}>
      {children}
    </ActivityContext.Provider>
  );
};
