import ActivitiesList from "./components/activities-list/ActivitiesList";
import MyActivities from "./components/my-activities/MyActivities";

export default function HomePage() {
	return (
		<div>
			<h1>Hallo Name</h1>
			<ActivitiesList />
			<MyActivities />
		</div>
	);
}