import mongoose, { models } from "mongoose";

const activitySchema = new mongoose.Schema({
  activityType: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: false
  },
  focusZone: {
    type: String,
    required: false
  },
});

const Activity = models.Activity || mongoose.model('Activity', activitySchema);

export default Activity;