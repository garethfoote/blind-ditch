import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black h-56 w-full">
      <div className="flex h-full justify-center items-center container mx-auto">
        <div className="flex-grow w-1/3">
          1
          <div className="h-12">
            <img
              alt="Blind Ditch logo in black"
              className="h-full w-auto"
              src="/logo-white.png"
            />
          </div>
        </div>
        <div className="flex-grow w-1/3">2</div>
        <div className="flex-grow w-1/3">3</div>
      </div>
    </footer>
  );
}
