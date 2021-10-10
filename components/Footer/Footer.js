import classnames from "classnames";
import styles from "./Footer.module.css";
// import globalData from "../../data/global-manifest.json";

export const Footer = () => {
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
        <div className="flex-1 max-h-56">
          <video autoPlay loop muted>
            <source src="/Blind_Ditch_anim.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </footer>
  );
};
