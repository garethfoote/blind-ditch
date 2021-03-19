import Link from "next/link";
import styles from "./Logo.module.css";
import classnames from "classnames";

export const Logo = () => {
  return (
    <div className={classnames(styles.logo)}>
      <div className="flex justify-center items-center relative z-10 h-full">
        <Link href="/">
          <a className="inline-block h-10 mx-auto">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-black.png"
            />
            <span className="visually-hidden">Blind Ditch</span>
          </a>
        </Link>
      </div>
    </div>
  );
};
