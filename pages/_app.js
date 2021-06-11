import "../styles/globals.css"
import AppLayout from "../components/appLayout"

function MyApp({ Component, pageProps }) {
  return (
    <>
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
          height: 100vh;
        }
      `}</style>
    </>
  )
}

export default MyApp
