import Link from "next/link";
import styles from "./Logo.module.css";
import classnames from "classnames";

export const Logo = () => {
  return (
    <div className={classnames(styles.logo)}>
      <h1 className="flex justify-center items-center relative z-10 h-full">
        <Link href="/">
          <a className="inline-block h-8 sm:h-10 mx-auto">
            <img
              alt="Blind Ditch"
              className="h-full w-auto"
              src="/logo-black.png"
            />
          </a>
        </Link>
      </h1>
    </div>
  );
};
