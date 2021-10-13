import classnames from "classnames";
import styles from "./Footer.module.css";
import { useRef, useEffect } from "react";
// import globalData from "../../data/global-manifest.json";

export const Footer = () => {
  const vidSrcRef = useRef();

  useEffect(() => {
    vidSrcRef.current.setAttribute("src", "/Blind_Ditch_anim.mp4");
    vidSrcRef.current.parentElement.load();
    // vidSrcRef.current.parentElement.play();
    console.log(vidSrcRef.current.parentElement);
  }, []);

  return (
    <footer className={classnames(styles.footer, "w-full")}>
      <div className="flex h-full justify-center items-center mx-0 sm:mx-xl">
        <div className="flex-1">
          <div className="pl-md max-w-xs">
            <img
              alt="Arts Council England - Lottery Funded"
              className="h-auto w-full"
              src="/lottery_Logo_White_RGB.png"
            />
          </div>
        </div>
        <div className={classnames("flex-1 max-h-56")}>
          <video autoPlay loop muted>
            <source ref={vidSrcRef} src="" type="video/mp4" />
          </video>
        </div>
      </div>
    </footer>
  );
};
