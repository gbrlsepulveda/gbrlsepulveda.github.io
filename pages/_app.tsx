import Script from 'next/script';
import {ThemeProvider} from 'styled-components';
import {Normalize} from 'styled-normalize';

import theme, {GlobalStyles} from 'lib/theme';
import Main from 'components/Main';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Header />

      <Main>
        <Component {...pageProps} />
      </Main>

      <Footer />

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-UA-23273407-1`} />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-23273407-1', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </ThemeProvider>
  );
}
