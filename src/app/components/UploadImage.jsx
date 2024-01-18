"use client";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export function UploadImage() {
  const [base64Image, setBase64Image] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const reader = new FileReader();

  function handleImageUpload(e) {
    const image = e.target.files[0];

    if (!image.type.startsWith("image/")) {
      return alert("Please upload an image file.");
    }

    if (image.size > 100_000) {
      return alert("too big");
    }

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(image);
  }

  async function handleSubmitImage(e) {
    e.preventDefault();
    try {
      if (!base64Image) {
        return setError("Please provide an image!");
      }

      const res = await fetch("/api/images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          base64Image,
        }),
      });

      const info = await res.json();

      setBase64Image("");
      setError("");
      router.refresh();
    } catch (error) {
      console.error("Error during image upload:", error.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitImage}>
        <input type="file" onChange={handleImageUpload} />
        <p>Your uploaded image:</p>
        <img src={base64Image}></img>
        <button>Upload Image</button>
      </form>
      <p>{error}</p>
    </>
  );
}
