import classnames from "classnames";

export default function Container({ children, max = "4xl", spacing = "md" }) {
  var classes = ["mx-auto px-5", `my-${spacing}`, `max-w-${max}`];

  return <div className={classnames(classes)}>{children}</div>;
}
