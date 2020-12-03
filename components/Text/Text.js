export const Text = (text) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: text.text }} />
    </>
  );
};
