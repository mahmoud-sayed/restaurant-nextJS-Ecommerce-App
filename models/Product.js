import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 60
  },
  desc: {
    type: String,
    required: true,
    maxLength: 200
  },
  img: {
    type: String,
    required: true,
  },
  prices: {
    type: [Number],
    required: true,
  },
  extraOptions: {
    type: [
      {
        text: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ]
  },
},
  { timestamps: true }
);

// here we export the collection Product with structured document (ProductSchema) and we check if it's already have bean created before or not
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);