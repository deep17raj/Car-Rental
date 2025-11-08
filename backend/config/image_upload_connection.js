import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CF_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CF_ACCESS_KEY_ID,
    secretAccessKey: process.env.CF_SECRET_ACCESS_KEY,
  },
});

export async function uploadImage(file) {
  if (!file) throw new Error("No file provided");

  const fileName = `${Date.now()}-${file.originalname}`;

  try {
    // Upload file buffer to R2
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.CF_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    );
    const publicUrl = `https://${process.env.R2_PUBLIC_URL}/${encodeURIComponent(fileName)}`;

    console.log("✅ Uploaded to R2:", publicUrl);
    return publicUrl;
  } catch (err) {
    console.error("❌ Error uploading to R2:", err);
    throw new Error("Upload failed: " + err.message);
  }
}
