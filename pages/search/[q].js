import React, { useState } from "react"
import { useRouter } from "next/router"
import useGetData from "../../hooks/useGetData"
import { URL_BASE } from "../../config"
import Loading from "react-loader-spinner"
import Head from "next/head"
import GridGif from "../../container/GridGif"

export default function Search() {
  const router = useRouter()
  const { q } = router.query

  const url = q
    ? `${URL_BASE}gifs/search?api_key=${process.env.API_KEY_GIPHY}&q=${q}&limit=25`
    : false

  const [resp, loading, error] = useGetData(url)

  if (error) return ""
  const { data } = resp

  return (
    <>
      <Head>
        <title>Results searcher: {q}</title>
      </Head>
      <div>
        <h2>Gifs about this category: {q}</h2>
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
      </div>
    </>
  )
}
