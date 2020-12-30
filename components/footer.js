import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center container bg-black h-56 w-full">
      <div className="h-14">
        <img
          alt="Blind Ditch logo in black"
          className="h-full w-auto"
          src="/logo-white.png"
        />
      </div>
    </footer>
  );
}
