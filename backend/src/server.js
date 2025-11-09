import express from "express";
import dotenv from 'dotenv';
import pool from "../config/database_connection.js";
import multer from "multer";
import { uploadImage } from "../config/image_upload_connection.js";
import cors from 'cors';
import router from "../routers/routs.js";
import errorhandler from "../middleware/error_handler.js";
const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer({ storage: multer.memoryStorage() });

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api',router);
// error handling
app.use(errorhandler)



app.post("/add-car", upload.single("carImage"), async (req, res) => {
  try {
    const imageUrl = await uploadImage(req.file);
    // Save imageUrl + other form data to database here
    res.json({ success: true, imageUrl });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/', async(req,res)=>{
  const result = await pool.query("Select * from Cars");
  res.send(result.rows);
  console.log(result.rows)
})

app.listen(PORT,()=>{
  console.log(`server is on at ${PORT}`);
})