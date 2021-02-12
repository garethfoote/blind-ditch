export const SectionTitle = ({ children, text }) => (
  <div className="text-center px-5 max-w-xl mx-auto my-lg sm:my-xl">
    <div className="text-center">
      <h2 className="text-md sm:text-xl title-underline inline uppercase leading-14 tracking-wider">
        {text || children}
      </h2>
    </div>
  </div>
);
