"use client";
import { useRouter } from "next/navigation.js";
export function DeleteImage({ image }) {
  const imageId = image.id;

  const router = useRouter();

  async function handleDelete() {
    const res = await fetch("/api/images", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageId,
      }),
    });

    const info = await res.json();
    console.log(info);
    router.refresh();
  }

  return <button onClick={handleDelete}>Delete Photo</button>;
}
