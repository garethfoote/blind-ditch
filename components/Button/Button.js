import Link from "next/link";

export const Button = ({ children, href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className="button-shadow">
        <span className="relative z-10 title-accent p-2 bg-mint border border-black border-solid">
          {children}
        </span>
      </a>
    </Link>
  );
};
