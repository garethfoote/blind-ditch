export const PullQuote = (quote) => {
  return (
    <>
      <h1>{quote.quote}</h1>
      <div>{quote.context}</div>
    </>
  );
};
