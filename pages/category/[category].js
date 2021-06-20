import React from "react"
import { useRouter } from "next/router"
import useGetData from "../../hooks/useGetData"
import { URL_BASE } from "../../config"
import GridGif from "../../container/GridGif"
import Loading from "react-loader-spinner"
import Head from "next/head"

export default function Category() {
  const router = useRouter()
  const { category } = router.query
  const url = category
    ? `${URL_BASE}gifs/search?api_key=${process.env.API_KEY_GIPHY}&q=${category}`
    : false

  const [resp, loading, error] = useGetData(url)

  const { data } = resp

  return (
    <>
      <Head>
        <title>Results category: {category}</title>
      </Head>
      <h2>Gifs about this category: {category}</h2>
      {loading ? (
        <Loading
          color="#32D3A9"
          type="ThreeDots"
          style={{ textAlign: "center" }}
        />
      ) : (
        data && <GridGif gifs={data} />
      )}
      <style jsx>{`
        h2 {
          text-align: center;
        }
      `}</style>
    </>
  )
}
