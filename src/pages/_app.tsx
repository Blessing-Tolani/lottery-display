import "../styles/globals.css";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    // <Component {...pageProps} />
    <div suppressHydrationWarning>
      {typeof window == "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
}

export default App;
