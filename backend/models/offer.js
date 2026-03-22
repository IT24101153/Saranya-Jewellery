// ./models/offer.js
import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  offerName: String,
  discount: Number,
  startDate: String,
  endDate: String,
  targetGroup: String,
  status: String,
});

const Offer = mongoose.model("Offer", offerSchema);
export default Offer;
