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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var _mtm = window._mtm = window._mtm || [];
              _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src='https://bd.bowt.club/wp-content/plugins/matomo/app/../../../uploads/matomo/container_FvJyR9Pa.js'; s.parentNode.insertBefore(g,s);
              `,
            }}
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
