import Activity from "../activity/Activity";

export default function ActivitiesList() {
	


	return (
		  <div>
      <h1>Add Activities:</h1>
			<Activity activityType="running"  />
			<Activity activityType="swimming" />
			<Activity activityType="cycling" />
			<Activity activityType="fitness" />
    </div>
	)
}