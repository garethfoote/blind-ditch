import classnames from "classnames";
import styles from "./Footer.module.css";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import globalData from "../../data/global-manifest.json";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export const Footer = () => {
  // const footerRef = useRef();
  const [footerRef, inView, entry] = useInView({
    threshold: 0,
  });

  return (
    <footer ref={footerRef} className={classnames(styles.footer, "w-full")}>
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
        <div
          className={classnames("flex-1 max-h-56", {
            ["hidden"]: !inView,
            ["block"]: inView,
          })}
        >
          <video autoPlay loop muted>
            <source src="/Blind_Ditch_anim.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </footer>
  );
};
