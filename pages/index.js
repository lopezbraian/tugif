import axios from "axios"
import Head from "next/head"
import { Provider } from "react-redux"
import { ListGift } from "../Container/ListGift"
import { ListSearcher } from "../Container/ListSearcher"
import store from "../redux"

export default function Home({ resp }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section>
        <ListGift data={resp.data} title="Trending" />
        <ListSearcher></ListSearcher>
      </section>
    </>
  )
}

export async function getStaticProps(context) {
  const data = await axios.get(
    `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY_GIPHY}&limit=25&rating=g`
  )
  return {
    props: { resp: data.data },
  }
}
