import App from "next/app";
import '../styles/globals.css'

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // Build error happens because error page tries to fetch this on build time when backend isn't availagble
  await fetch('http://127.0.0.1/some-backend-url');
  return { ...appProps }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
