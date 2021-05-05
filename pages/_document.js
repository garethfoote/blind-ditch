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
              
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);_paq.push(['alwaysUseSendBeacon']);_paq.push(['setTrackerUrl', "\/\/bd.bowt.club\/wp-content\/plugins\/matomo\/app\/matomo.php"]);_paq.push(['setSiteId', '1']);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src="\/\/bd.bowt.club\/wp-content\/uploads\/matomo\/matomo.js"; s.parentNode.insertBefore(g,s);
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
