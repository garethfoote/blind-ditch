import styles from "./Gallery.module.css";
import Image from "next/image";

export const Gallery = ({ images, width }) => {
  const imgHeight0 =
    width * (images[0].mediaDetails.height / images[0].mediaDetails.width);
  const imgHeight1 =
    width * (images[1].mediaDetails.height / images[1].mediaDetails.width);

  return (
    // <div className="max-w-2xl my-xl mx-auto">
    <div class="grid grid-cols-2 gap-4 md:gap-8 items-center">
      <div>
        <Image
          src={images[0].sourceUrl}
          width={width}
          height={imgHeight0}
          layout="responsive"
        />
      </div>
      <div>
        <Image
          src={images[1].sourceUrl}
          width={width}
          height={imgHeight1}
          layout="responsive"
        />
      </div>
    </div>
  );
};
