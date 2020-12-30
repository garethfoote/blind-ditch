import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black h-56 w-full">
      <div className="flex h-full justify-center items-center container mx-auto">
        <div className="h-12">
          <img
            alt="Blind Ditch logo in black"
            className="h-full w-auto"
            src="/logo-white.png"
          />
        </div>
        <div className="flex-grow"></div>
      </div>
    </footer>
  );
}
