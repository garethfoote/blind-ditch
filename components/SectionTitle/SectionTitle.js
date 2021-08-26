export const SectionTitle = ({ children, text }) => (
  <div className="text-center pt-6 pb-5 max-w-2xl mx-auto my-md">
    <h2 className="text-md sm:text-xl title-underline inline uppercase leading-10 sm:leading-14 tracking-wider">
      {text || children}
    </h2>
  </div>
);
