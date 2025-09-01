import React, { useContext, useState } from "react";
import imageCompression from "browser-image-compression";
import "./AddPicture.css";
import { DataContext } from "../../Context/DataContext"; // Ensure correct import

const AddPicture = () => {
  const { categories } = useContext(DataContext); // Ensure correct destructuring
  const [addPic, setAddPic] = useState({
    category: "",
    file: null,
  });
  const [status, setStatus] = useState("Add");

  function handleChange(e) {
    const { name, value } = e.target;
    setAddPic({ ...addPic, [name]: value });
  }

  function handleFileChange(e) {
    setAddPic({ ...addPic, file: e.target.files[0] });
  }

  async function submitFile(e) {
    e.preventDefault();
    setStatus("Processing..");

    if (!addPic.category || !addPic.file) {
      alert("Please provide both category and file.");
      setStatus("Add");
      return;
    }

    const options = {
      maxSizeMB: 10,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const formData = new FormData();
    formData.append("category", addPic.category);

    try {
      const compressedFile = await imageCompression(addPic.file, options);
      formData.append("file", compressedFile);
    } catch (error) {
      console.error("Image compression failed:", error);
    }

    const jwtToken = localStorage.getItem("jwtToken");

    try {
      const response = await fetch("http://localhost:8080/api/v1/admin/addimage", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Failed to upload image: " + (data.message || "Unknown error"));
      }

      e.target.reset();
      setStatus("Add");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image: " + error.message);
      setStatus("Add");
    }
  }

  return (
    <div className="add-picture">
      <form onSubmit={submitFile}>
        <div className="add-picture-category">
          <p>Category</p>
          <select name="category" onChange={handleChange}>
            {categories?.map((item, index) => (
              <option key={index} value={item.category}>
                {item.category}
              </option>
            ))}
          </select>
        </div>
        <div className="add-picture-file">
          <p>Picture file</p>
          <input type="file" name="file" onChange={handleFileChange} required />
        </div>
        <div className="add-picture-button">
          <button type="submit">{status}</button>
        </div>
      </form>
    </div>
  );
};

export default AddPicture;
