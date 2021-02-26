import Link from "next/link";
import classnames from "classnames";
import styles from "./Footer.module.css";
import globalData from "../../data/global-manifest.json";

export const Footer = () => {
  return (
    <footer className={classnames(styles.footer, "bg-black w-full")}>
      <div className="h-full justify-center items-center container mx-auto">
        <div className="text-center py-lg">
          {globalData.footer.map(({ node }, idx) => (
            <Link key={idx} as={`/page/${node.slug}`} href="/page/[slug]">
              <a className="text-offwhite">{node.title}</a>
            </Link>
          ))}
        </div>
        <div className="py-lg h-auto mx-auto px-md w-48">
          <img
            alt="Blind Ditch logo in black"
            className="h-auto w-full"
            src="/logo-white.png"
          />
        </div>
      </div>
    </footer>
  );
};
