import Document, {Html, Head, Main, NextScript} from 'next/document';
// Import styled components ServerStyleSheet
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return {...page, styleTags};
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
