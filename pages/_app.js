import "../styles/globals.css"
import AppLayout from "../components/AppLayout"
import { Provider } from "react-redux"
import store from "../redux/index"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <style jsx global>{`
        body {
          padding: 10px;
          background-color: #000000;
          color: white;
          font-family: "Lato", sans-serif;
        }
        section {
          background-color: #ffff;
          border-radius: 5px;
          min-height: 100vh;
          padding: 10px;
          max-width: 768px;
          margin: 0 auto;
        }
      `}</style>
    </Provider>
  )
}

export default MyApp
