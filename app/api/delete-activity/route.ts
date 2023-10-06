import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../lib/mongodb";
import Activity from "../../../models/activity";
import { NextResponse } from "next/server";

export  async function DELETE(req: NextApiRequest, res: NextApiResponse) {
    try {
      await connectMongoDB();
      const { id } = req.body;

      await Activity.findByIdAndDelete(id);

			return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error deleting activity:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  } 
