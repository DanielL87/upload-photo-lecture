import { prisma } from "../lib/prisma.js";
import { DeleteImage } from "./DeleteImage.jsx";

export default async function DisplayImage() {
  const images = await prisma.photo.findMany();

  return (
    <div>
      <h2>Display Images</h2>
      <div id="image-container">
        {images.map((image) => (
          <div key={image.id} className="single-image">
            <img src={image.base64} alt={`Image ${image.id}`} />
            <DeleteImage image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
