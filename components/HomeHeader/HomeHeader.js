import { HighlightBoxBlue } from "../../components/HighlightBox";
import styles from "./HomeHeader.module.css";
import classnames from "classnames";

export const HomeHeader = ({ intro, testimonials }) => {
  // const readMore = '<a class="dash-underline" href="/about">Read more</a>  →';
  const randTestimonial = Math.floor(Math.random() * testimonials.length);
  return (
    <div className={classnames(styles.headerCols)}>
      <div className="sm:mx-0 sm:pr-lg md:pr-xl">
        <div
          className="pt-md pb-lg sm:pb-md px-sm text-sm text-justify leading-6 sm:text-lg sm:leading-9 sm:text-left text-bg-black"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </div>
      <div className="sm:mx-0">
        <HighlightBoxBlue
          hasShadow={true}
          isQuote={true}
          html={testimonials[randTestimonial].testimonial}
          context={testimonials[randTestimonial].context}
        />
      </div>
    </div>
  );
};
