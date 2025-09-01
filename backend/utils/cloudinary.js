const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const fs = require('fs').promises; // Use async version of fs
dotenv.config({ path: './.env' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary with optimized settings
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // Explicitly set to "image" for better handling
      transformation: [{ quality: "auto:good", fetch_format: "auto" }],
    });

    console.log("✅ File uploaded to Cloudinary:", response.secure_url);

    // Delete the local file only if the upload is successful
    await fs.unlink(localFilePath);

    return response;
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error);

    // Only delete the file if it exists to prevent ENOENT errors
    try {
      await fs.access(localFilePath); // Check if file exists
      await fs.unlink(localFilePath); // Delete it if it exists
    } catch (fsError) {
      console.error("⚠️ Local file already deleted or not found:", fsError.message);
    }

    return { error: "Cloudinary upload failed", details: error };
  }
};

module.exports = uploadOnCloudinary;
