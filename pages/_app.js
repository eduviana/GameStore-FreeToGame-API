import "../styles/normalize.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { GameProvider } from "../context/GameProvider";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}

export default MyApp;

// 2e8ec8cb5fa14c1db3fde1b1978d73ab
