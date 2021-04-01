import Document, { Html, Head, Main, NextScript } from "next/document";
import { mediaStyles } from "../lib/media-queries";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
