import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Activity from "../../../models/activity";
import {  NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectMongoDB();

		const { activityType, duration = "", focusZone = ""} = await req.json();
		console.log("activityType", activityType);
		console.log("duration", duration);
		console.log("focusZone", focusZone);

		const activity = new Activity({
			activityType,
			duration,
			focusZone
		});

		await activity.save();

		return NextResponse.json({ activity }, { status: 200 });
			


  } catch (error) {
		console.error("Error during adding show to favorites:", error);
		    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message }); // Send a response in case of error

  }
}
