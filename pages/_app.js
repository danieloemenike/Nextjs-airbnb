import '../styles/globals.css'

import Router from "next/router"
import ProgressBar from '@badrap/bar-of-progress'

const progress =new ProgressBar({
    size:2,
    color:"#FE595E",
  className:"z-50",
  
});

  Router.events.on("routeChangeStart",progress.start);
  Router.events.on("routeChangeError",progress.finish);
  Router.events.on("routerChangeComplete",progress.finish)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
