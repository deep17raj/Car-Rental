import express from "express";
import multer from "multer";
import { uploadImage } from "./config/image_upload_connection.js";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });




app.post("/add-car", upload.single("carImage"), async (req, res) => {
  try {
    const imageUrl = await uploadImage(req.file);
    // Save imageUrl + other form data to database here
    res.json({ success: true, imageUrl });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
