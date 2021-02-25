import Link from "next/link";
import classnames from "classnames";
import styles from "./Footer.module.css";
import globalData from "../../data/global-manifest.json";

export const Footer = () => {
  return (
    <footer className={classnames(styles.footer, "bg-black w-full")}>
      <div className="flex h-full justify-center items-center container mx-auto">
        <div className="flex-grow w-1/2">
          1
          <div className="h-auto px-md w-48">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-white.png"
            />
          </div>
        </div>
        <div className="flex-grow w-1/2">
          {globalData.footer.map(({ node }) => (
            <Link as={`/page/${node.slug}`} href="/page/[slug]">
              <a className="text-offwhite">{node.title}</a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
