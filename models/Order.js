import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    maxLength: 60
  },
  address: {
    type: String,
    required: true,
    maxLength: 200
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  method: {
    type: Number,
    required: true,
  },

},
  { timestamps: true }
);

// here we export the collection Product with structured document (OrderSchema) and we check if it's already have bean created before or not
export default mongoose.model.Product || mongoose.model("Order", OrderSchema);