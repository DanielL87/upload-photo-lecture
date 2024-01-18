import Image from "next/image";
import styles from "./page.module.css";
import { UploadImage } from "./components/UploadImage.jsx";
import Timestamp from "./components/Timestamp.jsx";
import DisplayImage from "./components/DisplayImage.jsx";

export default function Home() {
  return (
    <div>
      <UploadImage />
      <DisplayImage />
      {/* <Timestamp /> */}
    </div>
  );
}
