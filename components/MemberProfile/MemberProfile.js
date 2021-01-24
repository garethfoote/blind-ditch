import Image from "next/image";
import classnames from "classnames";
import styles from "./MemberProfile.module.css";

export const MemberProfile = ({ date, image, name, profile }) => {
  console.log(profile);
  return (
    <div>
      <div className="relative w-full h-80">
        <Image
          alt={image.altText || name}
          src={image.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p>{date}</p>
      <p>{name}</p>
      <div dangerouslySetInnerHTML={{ __html: profile }} />
    </div>
  );
};
