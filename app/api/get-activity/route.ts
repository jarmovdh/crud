import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Activity from "../../../models/activity";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		await connectMongoDB();
		const activities = await Activity.find({});

		return NextResponse.json({ activities }, { status: 200 });
	}

	catch (error) {
		console.error("Error during getting activities:", error);
		res.status(500).json({ success: false, message: "Internal Server Error", error: error.message }); // Send a response in case of error
	}
}