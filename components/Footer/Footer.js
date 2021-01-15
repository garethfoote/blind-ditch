import classnames from "classnames";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classnames(styles.footer, "bg-black w-full")}>
      <div className="flex h-full justify-center items-center container mx-auto">
        <div className="flex-grow w-1/2">
          1
          <div className="h-auto px-md">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-white.png"
            />
          </div>
        </div>
        <div className="flex-grow w-1/2">2</div>
        {/* <div className="flex-grow w-1/3">3</div> */}
      </div>
    </footer>
  );
};
